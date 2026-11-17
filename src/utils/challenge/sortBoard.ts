/**
 * Sort board: the "put each card into the right zone" mechanic shared by the
 * Digital Citizenship and Data Privacy challenges.
 *
 * Three ways to place a card, all ending in the same check:
 *   - drag the card onto a zone (mouse)
 *   - select the card, then click a zone or one of the buttons under the card (tap / click)
 *   - Enter or Space on the card, then Enter on one of the buttons (keyboard); Escape goes back
 *
 * The board owns the cards, the selection and the first-try count. Everything a game
 * says or shows (feedback texts, score display, what happens when all cards are placed)
 * stays in the page and arrives here as callbacks.
 *
 * Markup contract inside `root`:
 *   [data-cards-tray]                       where unsorted cards wait
 *   [data-zone="<zone>"] [data-zone-content] one per zone
 *   template[data-card-template]            .<cardClass>-wrapper > .<cardClass> + .<cardClass>__choices
 *                                           with one <button data-choose="<zone>"> per zone
 *   template[data-empty-template]           placeholder shown in an empty zone
 */

export interface SortBoardOptions {
  root: HTMLElement
  /** Class stem of a card: `post-card` → `.post-card`, `.post-card-wrapper`, `.post-card__choices`, `.post-card--selected` … */
  cardClass: string
  /** `dataset` key that carries the card id: `postId` → `data-post-id` */
  idKey: string
  /** The zone a card belongs to; `undefined` for an unknown id */
  zoneOf: (id: number) => string | undefined
  /** Fill a freshly cloned card (emoji, text …) */
  fillCard: (wrapper: HTMLElement, id: number) => void
  /** Called after every change of the number of placed cards, and after a deal */
  onProgress: (placed: number, total: number) => void
  /** Card landed in its zone */
  onCorrect: (id: number, zone: string) => void
  /** Card was put into a wrong zone (it stays where it was) */
  onWrong: (id: number) => void
  /** A card that is already placed was tapped — the player wants to read about it again */
  onReview: (id: number, zone: string) => void
  /** The last card has been placed */
  onAllPlaced: () => void
}

export interface SortBoard {
  /** Empty the zones and lay out a new set of cards */
  deal: (ids: ReadonlyArray<number>) => void
  /** Focus the first card that is still unsorted */
  focusFirst: () => void
  /** Cards placed on the first try in the current deal */
  readonly firstTry: number
  /** Ids of cards that were put into a wrong zone at least once */
  readonly missed: ReadonlySet<number>
  readonly total: number
}

/** How long the board ignores input while the answer is shown (ms) */
const PAUSE_CORRECT = 600
const PAUSE_WRONG = 700

const toDataAttribute = (key: string) => `data-${key.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`)}`

export const createSortBoard = (options: SortBoardOptions): SortBoard | null => {
  const { root, cardClass, idKey } = options
  const cardSelector = `[${toDataAttribute(idKey)}]`
  const choicesSelector = `.${cardClass}__choices`

  const tray = root.querySelector<HTMLElement>('[data-cards-tray]')
  const zones = Array.from(root.querySelectorAll<HTMLElement>('[data-zone]'))
  const cardTemplate = root.querySelector<HTMLTemplateElement>('template[data-card-template]')
  const emptyTemplate = root.querySelector<HTMLTemplateElement>('template[data-empty-template]')
  if (!tray || !cardTemplate || !emptyTemplate || zones.length === 0) return null

  const zoneByName = new Map(zones.map((zone) => [zone.dataset.zone ?? '', zone]))

  let total = 0
  let placed = 0
  let firstTry = 0
  let missed = new Set<number>()
  let selectedCard: HTMLElement | null = null
  let draggedCard: HTMLElement | null = null
  let busy = false

  const getCards = () => Array.from(root.querySelectorAll<HTMLElement>(cardSelector))
  const getWrapper = (element: HTMLElement) => element.closest<HTMLElement>(`.${cardClass}-wrapper`)
  const getChoices = (card: HTMLElement) => getWrapper(card)?.querySelector<HTMLElement>(choicesSelector) ?? null
  const idOf = (card: HTMLElement) => Number(card.dataset[idKey])
  const isPlaced = (card: HTMLElement) => card.dataset.placed === 'true'

  // ── Selection (tap, click or keyboard) ──────────────────────────────────
  const deselectCard = () => {
    if (selectedCard) {
      selectedCard.classList.remove(`${cardClass}--selected`)
      selectedCard.setAttribute('aria-pressed', 'false')
      const choices = getChoices(selectedCard)
      if (choices) choices.hidden = true
    }
    selectedCard = null
  }

  const handleCardClick = (card: HTMLElement) => {
    if (busy) return
    if (isPlaced(card)) {
      const zone = options.zoneOf(idOf(card))
      if (zone !== undefined) options.onReview(idOf(card), zone)
      return
    }
    if (selectedCard === card) {
      deselectCard()
      return
    }
    deselectCard()
    selectedCard = card
    card.classList.add(`${cardClass}--selected`)
    card.setAttribute('aria-pressed', 'true')
    const choices = getChoices(card)
    if (choices) choices.hidden = false
  }

  // ── Placing a card ──────────────────────────────────────────────────────
  const moveCardToZone = (card: HTMLElement, zone: HTMLElement) => {
    const wrapper = getWrapper(card)
    const content = zone.querySelector('[data-zone-content]')
    if (!content || !wrapper) return
    content.querySelector('.drop-zone__empty')?.remove()
    content.appendChild(wrapper)
  }

  const focusNextCard = () => {
    getCards().find((card) => !isPlaced(card))?.focus()
  }

  const performDrop = (card: HTMLElement, zone: HTMLElement, { focusNext = false } = {}) => {
    if (isPlaced(card) || busy) return
    const id = idOf(card)
    const rightZone = options.zoneOf(id)
    if (rightZone === undefined) return

    busy = true
    const chosen = zone.dataset.zone ?? ''

    if (rightZone === chosen) {
      card.dataset.placed = 'true'
      card.classList.add(`${cardClass}--placed`)
      card.draggable = false
      card.tabIndex = -1
      card.setAttribute('aria-pressed', 'false')
      deselectCard()
      moveCardToZone(card, zone)

      placed++
      if (!missed.has(id)) firstTry++
      options.onProgress(placed, total)
      options.onCorrect(id, chosen)
      if (focusNext) focusNextCard()

      setTimeout(() => {
        busy = false
        if (total > 0 && placed === total) options.onAllPlaced()
      }, PAUSE_CORRECT)
    } else {
      // Wrong zone: counts against the first-try score; the page explains why
      missed.add(id)
      card.classList.add(`${cardClass}--wrong`)
      options.onWrong(id)

      setTimeout(() => {
        card.classList.remove(`${cardClass}--wrong`)
        busy = false
      }, PAUSE_WRONG)
    }
  }

  // ── Drag and drop ───────────────────────────────────────────────────────
  root.addEventListener(
    'dragstart',
    (e) => {
      if (!(e.target instanceof HTMLElement)) return
      const card = e.target.closest<HTMLElement>(cardSelector)
      if (!card || isPlaced(card)) {
        e.preventDefault()
        return
      }
      draggedCard = card
      card.classList.add(`${cardClass}--dragging`)
      if (e.dataTransfer) {
        e.dataTransfer.effectAllowed = 'move'
        e.dataTransfer.setData('text/plain', card.dataset[idKey] ?? '')
      }
    },
    true,
  )

  root.addEventListener(
    'dragend',
    (e) => {
      if (!(e.target instanceof HTMLElement)) return
      e.target.closest(cardSelector)?.classList.remove(`${cardClass}--dragging`)
      zones.forEach((zone) => zone.classList.remove('drop-zone--active'))
    },
    true,
  )

  zones.forEach((zone) => {
    zone.addEventListener('dragover', (e) => {
      e.preventDefault()
      if (e.dataTransfer) e.dataTransfer.dropEffect = 'move'
      ;(e.target as HTMLElement).closest('[data-zone]')?.classList.add('drop-zone--active')
    })
    zone.addEventListener('dragleave', (e) => {
      if (e.target === zone) zone.classList.remove('drop-zone--active')
    })
    zone.addEventListener('drop', (e) => {
      e.preventDefault()
      if (!draggedCard) return
      zone.classList.remove('drop-zone--active')
      performDrop(draggedCard, zone)
      draggedCard = null
    })
    // A card is selected, then a zone is clicked
    zone.addEventListener('click', (e) => {
      // A click on a card or its buttons inside the zone is not a click on the zone itself
      if (e.target instanceof HTMLElement && e.target.closest(`${cardSelector}, ${choicesSelector}`)) return
      if (!selectedCard || busy || isPlaced(selectedCard)) return
      performDrop(selectedCard, zone)
    })
  })

  // ── Click and keyboard (cards are created again for every game, so the listeners are delegated) ──
  root.addEventListener('click', (e) => {
    const target = e.target
    if (!(target instanceof HTMLElement)) return

    // "Where does it go?" buttons under the selected card
    const choice = target.closest<HTMLElement>('[data-choose]')
    if (choice) {
      const card = getWrapper(choice)?.querySelector<HTMLElement>(cardSelector)
      const zone = zoneByName.get(choice.dataset.choose ?? '')
      if (card && zone) performDrop(card, zone, { focusNext: true })
      return
    }

    const card = target.closest<HTMLElement>(cardSelector)
    if (card) handleCardClick(card)
  })

  root.addEventListener('keydown', (e) => {
    const target = e.target
    if (!(target instanceof HTMLElement)) return

    const card = target.closest<HTMLElement>(cardSelector)
    if (card && target === card) {
      if (e.key === 'Escape' && selectedCard === card) {
        deselectCard()
        return
      }
      if ((e.key !== 'Enter' && e.key !== ' ') || e.repeat || isPlaced(card)) return
      e.preventDefault()
      const wasSelected = selectedCard === card
      handleCardClick(card)
      // Newly selected → continue with the buttons right below the card
      if (!wasSelected && selectedCard === card) getChoices(card)?.querySelector<HTMLElement>('button')?.focus()
      return
    }

    // Escape inside the buttons: back to the card
    if (e.key === 'Escape' && target.closest(choicesSelector) && selectedCard) {
      const back = selectedCard
      deselectCard()
      back.focus()
    }
  })

  // ── Public ──────────────────────────────────────────────────────────────
  const deal = (ids: ReadonlyArray<number>) => {
    zones.forEach((zone) => {
      zone.querySelector<HTMLElement>('[data-zone-content]')?.replaceChildren(emptyTemplate.content.firstElementChild!.cloneNode(true))
    })
    total = ids.length
    placed = 0
    firstTry = 0
    missed = new Set<number>()
    selectedCard = null
    draggedCard = null
    busy = false
    tray.replaceChildren(
      ...ids.map((id) => {
        const wrapper = cardTemplate.content.firstElementChild!.cloneNode(true) as HTMLElement
        wrapper.querySelector<HTMLElement>(`.${cardClass}`)!.dataset[idKey] = String(id)
        options.fillCard(wrapper, id)
        return wrapper
      }),
    )
    options.onProgress(placed, total)
  }

  return {
    deal,
    focusFirst: () => getCards()[0]?.focus({ preventScroll: true }),
    get firstTry() {
      return firstTry
    },
    get missed() {
      return missed
    },
    get total() {
      return total
    },
  }
}
