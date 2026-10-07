import type { ModuleId } from './modules'
import { TranslationPartSchema } from './moduleParts.schema'

// ── Part metadata (derived automatically in mergeParts) ──────────────────────

export interface PartMeta {
  steps: number
  materials: number
  videos: number
}

// ── Content-page helper types ─────────────────────────────────────────────────

export interface TeachingGuide {
  ariaLabel?: string
  download?: string
}

export interface RelatedModuleCard {
  moduleId: ModuleId
  brand: string
  href: string
  imageSrc?: string
  description: string
  parts?: number
  materials?: number
  videos?: number
  challenges?: number
  games?: number
}

// ── Non-translatable asset interfaces ────────────────────────────────────────

/** A package (zip) offered in every material language — shown as a language dropdown. */
export interface LanguagePackage { languages: MaterialLanguageFile[] }

export type PartBundle = LanguagePackage
/** Languages that translated materials can be provided in (same set as the site locales). */
export type MaterialLanguage = 'en' | 'cs' | 'no' | 'lt' | 'de'

/**
 * Native language names shown in the material "Download" dropdown.
 * (The options appear in the order they are listed in a material's `languages`.)
 */
export const MATERIAL_LANGUAGE_LABELS: Record<MaterialLanguage, string> = {
  en: 'English',
  cs: 'Čeština',
  no: 'Norsk',
  lt: 'Lietuvių',
  de: 'Deutsch',
}

/** One language version of a translated material. */
export interface MaterialLanguageFile { lang: MaterialLanguage; href: string }

/**
 * Download file name for one language version of a package or material,
 * e.g. "Digital Citizenship Part 1 Package (EN).zip".
 */
export function languageDownloadName(base: string | undefined, file: MaterialLanguageFile): string {
  const ext = file.href.split('.').pop()
  return base ? `${base} (${file.lang.toUpperCase()}).${ext}` : (file.href.split('/').pop() ?? '')
}

/**
 * A downloadable material.
 * - `href` — the file for materials without translatable text (e.g. an image);
 *   for translated materials it is the default/fallback file.
 * - `languages` — set this for materials that exist in several languages. The
 *   page then shows a "Download" dropdown with one option per entry instead of
 *   a plain "Download" link.
 */
export interface PartMaterialAssets {
  id?: string
  href: string
  isGuide?: boolean
  languages?: MaterialLanguageFile[]
}
export interface VideoDownload { href: string; filename?: string }
export interface SubtitleTrack { label: string; srclang: string; src: string }

export interface FeaturedVideoAssets {
  id?: string
  posterSrc: string
  videoSrc: string
  downloads: { video: VideoDownload }
  tracks: SubtitleTrack[]
}

export interface PartAssets {
  bundle?: PartBundle
  materials?: PartMaterialAssets[]
  featuredVideo?: FeaturedVideoAssets
}

export interface PartDefinition {
  anchorId: string
  assets?: PartAssets
}

// ── Translation-side types (provided by content editors in locale files) ──────

/** A single downloadable item label, authored in each locale. */
export interface TranslationVideoDownload {
  ariaLabel: string
}

/** Video metadata that varies per locale. */
export interface TranslationFeaturedVideo {
  title: string
  supportText?: string
  downloads?: {
    video: TranslationVideoDownload
    subtitles: TranslationVideoDownload
  }
}

/** A single activity-plan step, authored in each locale. */
export interface TranslationActivityStep {
  title: string
}

/** A single downloadable material, authored in each locale. */
export interface TranslationMaterial {
  kind: string
  name: string
  filename?: string
  ariaLabel: string
}

/** The `included` block inside a translation part. */
export interface TranslationPartIncluded {
  materials?: TranslationMaterial[]
  activityPlan?: TranslationActivityStep[]
}

/**
 * Shape of a single part entry inside a locale translation file.
 * Content editors (external partners) only fill in translatable text here —
 * no file paths, IDs, or technical identifiers.
 */
export interface TranslationPart {
  goal?: string
  bundle?: { filename?: string }
  included?: TranslationPartIncluded
  featuredVideo?: TranslationFeaturedVideo
}

// ── Merged output types ───────────────────────────────────────────────────────

/** A material entry after merging asset data with translation text. */
export interface MergedMaterial extends Partial<PartMaterialAssets>, TranslationMaterial {}

/** An activity-plan step with its auto-derived sequential number. */
export interface MergedActivityStep {
  stepNumber: number
  title: string
}

/** A download link after merging asset paths with translation label. */
export interface MergedVideoDownload extends Partial<VideoDownload>, TranslationVideoDownload {}

/** A video entry after merging asset data with translation text. */
export interface MergedFeaturedVideo extends Partial<Omit<FeaturedVideoAssets, 'downloads'>> {
  title?: string
  supportText?: string
  downloads?: {
    video: MergedVideoDownload
    subtitles: MergedVideoDownload
  }
}

/** `included` block in a fully merged part. */
export interface MergedPartIncluded {
  materials?: MergedMaterial[]
  activityPlan?: MergedActivityStep[]
}

/**
 * A fully merged part: structural data from `modulePartsData` combined with
 * locale text from a translation file. Consumed by content.astro pages.
 */
export interface MergedPart {
  number: number
  anchorId: string
  titleKey: string
  meta?: PartMeta
  goal?: string
  bundle?: Partial<PartBundle> & { filename?: string }
  included?: MergedPartIncluded
  featuredVideo?: MergedFeaturedVideo
}

// ── Merge helper ─────────────────────────────────────────────────────────────

/**
 * Combines structural part definitions (`modulePartsData`) with locale-specific
 * translation parts. Call this in each `content.astro` page instead of
 * accessing `modulePartsData` directly.
 *
 * @param moduleId         - Module identifier (e.g. `'dc'`, `'at'`).
 * @param translationParts - Locale parts array from `v('content*.parts')`.
 *
 * **Activity plan steps are numbered automatically** from the array index
 * (`stepNumber: 1, 2, 3…`). Order in the translation file determines the
 * step number — the first entry is always Step 1.
 *
 * **Material count mismatches** are caught in dev mode: if a locale's
 * `materials` array has a different length than `assets.materials`, a warning
 * is logged so editors can fix the discrepancy before it silently mis-pairs
 * download links.
 *
 * **Shape validation** runs in dev mode via Zod: each translation part is
 * checked against `TranslationPartSchema`. Validation errors are logged as
 * warnings — they do not throw, so the page still renders.
 */
export function mergeParts(
  moduleId: ModuleId,
  translationParts: ReadonlyArray<TranslationPart>
): MergedPart[] {
  // Validate translation part shapes in dev mode
  if (import.meta.env?.DEV) {
    translationParts.forEach((tp, i) => {
      const result = TranslationPartSchema.safeParse(tp)
      if (!result.success) {
        console.warn(
          `[mergeParts] ${moduleId} part ${i + 1}: unexpected shape —`,
          result.error.flatten()
        )
      }
    })
  }

  return modulePartsData[moduleId].map((partDef, i) => {
    const tp     = translationParts[i] ?? {}
    const { assets } = partDef
    const number   = i + 1
    const titleKey = `pages.hub.modules.${moduleId}.parts.p${number}.title`

    // ── Bundle ────────────────────────────────────────────────────────────────
    const bundle = assets?.bundle || tp.bundle
      ? { ...assets?.bundle, ...tp.bundle }
      : undefined

    // ── Materials ─────────────────────────────────────────────────────────────
    const assetMaterials       = assets?.materials ?? []
    const translationMaterials = tp.included?.materials ?? []

    if (
      import.meta.env?.DEV &&
      assetMaterials.length > 0 &&
      translationMaterials.length > 0 &&
      assetMaterials.length !== translationMaterials.length
    ) {
      console.warn(
        `[mergeParts] ${moduleId} part ${number} (${partDef.anchorId}): ` +
        `assets has ${assetMaterials.length} material(s) but translation has ` +
        `${translationMaterials.length}. Pairing by index — check for missing entries.`
      )
    }

    const materials: MergedMaterial[] | undefined = translationMaterials.length > 0
      ? translationMaterials.map((m, j) => {
          const id = assetMaterials[j]?.id
          // Download filenames carry the material ID: "1.1.1 - Kind - Name"
          const filename = id && m.filename ? `${id} - ${m.filename}` : m.filename
          return {
            ...assetMaterials[j],
            ...m,
            filename,
          } as MergedMaterial
        })
      : undefined

    // ── Activity plan ─────────────────────────────────────────────────────────
    const activityPlan: MergedActivityStep[] | undefined = tp.included?.activityPlan?.map(
      (step, j) => ({ stepNumber: j + 1, ...step })
    )

    // ── Featured video ────────────────────────────────────────────────────────
    const featuredVideo: MergedFeaturedVideo | undefined = assets?.featuredVideo || tp.featuredVideo
      ? {
          ...assets?.featuredVideo,
          ...tp.featuredVideo,
          // tracks are not translatable — always taken from assets
          tracks: assets?.featuredVideo?.tracks,
          downloads: {
            video:     { ...assets?.featuredVideo?.downloads?.video,     ...tp.featuredVideo?.downloads?.video },
            subtitles: { ...tp.featuredVideo?.downloads?.subtitles },
          },
        } as MergedFeaturedVideo
      : undefined

    const meta: PartMeta = {
      steps:     activityPlan?.length ?? 0,
      materials: assetMaterials.filter(m => m.href !== '' && !m.isGuide).length,
      videos:    assets?.featuredVideo?.videoSrc ? 1 : 0,
    }

    return {
      ...tp,
      number,
      anchorId: partDef.anchorId,
      titleKey,
      meta,
      bundle,
      included: tp.included
        ? { ...tp.included, ...(materials !== undefined ? { materials } : {}), activityPlan }
        : undefined,
      featuredVideo,
    }
  })
}

// ── Part data ─────────────────────────────────────────────────────────────────

export const modulePartsData: Record<ModuleId, PartDefinition[]> = {

  // ── Digital Citizenship ────────────────────────────────────────────────────
  dc: [
    {
      anchorId: 'digital-environments',
      assets: {
        bundle: {
          languages: [
            { lang: 'en', href: '/materials/digital-citizenship/part1/part1-en.zip' },
            { lang: 'cs', href: '/materials/digital-citizenship/part1/part1-cs.zip' },
            { lang: 'no', href: '/materials/digital-citizenship/part1/part1-no.zip' },
            { lang: 'lt', href: '/materials/digital-citizenship/part1/part1-lt.zip' },
            { lang: 'de', href: '/materials/digital-citizenship/part1/part1-de.zip' },
          ],
        },
        // Materials with `languages` → "Download" shows a language dropdown;
        // without it (no translatable text) → plain "Download" button.
        materials: [
          // Scenario Cards: Physical and Digital Worlds
          { id: '1.1.1',
            href: '/materials/digital-citizenship/part1/cards/en/1.1.1.Scenario_cards.Physical_and_digital_worlds.pdf',
            languages: [
              { lang: 'en', href: '/materials/digital-citizenship/part1/cards/en/1.1.1.Scenario_cards.Physical_and_digital_worlds.pdf' },
              { lang: 'cs', href: '/materials/digital-citizenship/part1/cards/cs/1.1.1.Scenario_cards.Physical_and_digital_worlds_CS.pdf' },
              { lang: 'no', href: '/materials/digital-citizenship/part1/cards/no/1.1.1.Scenario_cards.Physical_and_digital_worlds_NO.pdf' },
              { lang: 'lt', href: '/materials/digital-citizenship/part1/cards/lt/1.1.1.Scenario_cards.Physical_and_digital_worlds_LT.pdf' },
              { lang: 'de', href: '/materials/digital-citizenship/part1/cards/de/1.1.1.Scenario_cards.Physical_and_digital_worlds_DE.pdf' },
            ],
          },
        ],
        featuredVideo: {
          // What is a Digital Environment and Digital Systems?
          id: '1.1.2',
          posterSrc: '/images/learning-hub/video-posters/1.1.2_DigitalEnvironment_video_thumbnail.webp',
          videoSrc: '/materials/digital-citizenship/part1/videos/1.1.2.Video.Digital_Environment.mp4', 
          downloads: {
            video: 
            { href: '/materials/digital-citizenship/part1/videos/1.1.2.Video.Digital_Environment.mp4'
            }
          },
          tracks: [
            { label: 'English', 
              srclang: 'en',
              src: '/materials/digital-citizenship/part1/videos/subtitles/en/1.1.2.VideoSubtitles.Digital_Environment_EN.vtt' 
            },
            { label: 'Čeština',
              srclang: 'cs',
              src: '/materials/digital-citizenship/part1/videos/subtitles/cs/1.1.2.VideoSubtitles.Digital_Environment_CS.vtt' 
            },
            { label: 'Norsk',
              srclang: 'no',
              src: '/materials/digital-citizenship/part1/videos/subtitles/no/1.1.2.VideoSubtitles.Digital_Environment_NO.vtt' 
            },
            { label: 'Lietuvių', 
              srclang: 'lt', 
              src: '/materials/digital-citizenship/part1/videos/subtitles/lt/1.1.2.VideoSubtitles.Digital_Environment_LT.vtt' 
            },
            { label: 'Deutsch', 
              srclang: 'de', 
              src: '/materials/digital-citizenship/part1/videos/subtitles/de/1.1.2.VideoSubtitles.Digital_Environment_DE.vtt' 
            },
          ],
        },
      },
    },
    {
      anchorId: 'digital-citizen',
      assets: {
        bundle: {
          languages: [
            { lang: 'en', href: '/materials/digital-citizenship/part2/part2-en.zip' },
            { lang: 'cs', href: '/materials/digital-citizenship/part2/part2-cs.zip' },
            { lang: 'no', href: '/materials/digital-citizenship/part2/part2-no.zip' },
            { lang: 'lt', href: '/materials/digital-citizenship/part2/part2-lt.zip' },
            { lang: 'de', href: '/materials/digital-citizenship/part2/part2-de.zip' },
          ],
        },
        materials: [
          // Image: Responsible Citizen
          { id: '1.2.1',
            href: '/materials/digital-citizenship/part2/images/1.2.1.Image.Responsible_citizen.png',
          },
          // Worksheet: Rights, Responsibilities and Respect
          { id: '1.2.2',
            href: '/materials/digital-citizenship/part2/worksheets/en/1.2.2.Worksheet.Rights_responsibilities_and_respect.pdf',
            languages: [
              { lang: 'en', href: '/materials/digital-citizenship/part2/worksheets/en/1.2.2.Worksheet.Rights_responsibilities_and_respect.pdf' },
              { lang: 'cs', href: '/materials/digital-citizenship/part2/worksheets/cs/1.2.2.Worksheet.Rights_responsibilities_and_respect_CS.pdf' },
              { lang: 'no', href: '/materials/digital-citizenship/part2/worksheets/no/1.2.2.Worksheet.Rights_responsibilities_and_respect_NO.pdf' },
              { lang: 'lt', href: '/materials/digital-citizenship/part2/worksheets/lt/1.2.2.Worksheet.Rights_responsibilities_and_respect_LT.pdf' },
              { lang: 'de', href: '/materials/digital-citizenship/part2/worksheets/de/1.2.2.Worksheet.Rights_responsibilities_and_respect_DE.pdf' },
            ],
          },
        ],
      },
    },
    {
      anchorId: 'privacy-settings',
      assets: {
        bundle: {
          languages: [
            { lang: 'en', href: '/materials/digital-citizenship/part3/part3-en.zip' },
            { lang: 'cs', href: '/materials/digital-citizenship/part3/part3-cs.zip' },
            { lang: 'no', href: '/materials/digital-citizenship/part3/part3-no.zip' },
            { lang: 'lt', href: '/materials/digital-citizenship/part3/part3-lt.zip' },
            { lang: 'de', href: '/materials/digital-citizenship/part3/part3-de.zip' },
          ],
        },
        materials: [
          // Image: Feeling Safe
          { id: '1.3.1',
            href: '/materials/digital-citizenship/part3/images/1.3.1.Image.Feeling_safe.png',
          },
          // Image: Feeling Unsafe
          { id: '1.3.2',
            href: '/materials/digital-citizenship/part3/images/1.3.2.Image.Feeling_unsafe.png',
          },
          // Image: Privacy Setting Strategy
          { id: '1.3.4',
            href: '/materials/digital-citizenship/part3/images/en/1.3.4.Image.Privacy_setting_strategy.png',
          },
          // Image: App Privacy Settings
          { id: '1.3.5',
            href: '/materials/digital-citizenship/part3/images/1.3.5.Image.App_Privacy_Settings.png',
          },
        ],
        featuredVideo: {
          // What are Privacy Settings?
          id: '1.3.3',
          posterSrc: '/images/learning-hub/video-posters/1.3.3_PrivacySettings_video_thumbnail.webp',
          videoSrc: '/materials/digital-citizenship/part3/videos/1.3.3.Video.Privacy_Settings.mp4',
          downloads: {
            video:
            { href: '/materials/digital-citizenship/part3/videos/1.3.3.Video.Privacy_Settings.mp4'
            }
          },
          tracks: [
            { label: 'English',
              srclang: 'en',
              src: '/materials/digital-citizenship/part3/videos/subtitles/en/1.3.3.VideoSubtitles.Privacy_Settings_EN.vtt'
            },
            { label: 'Čeština',
              srclang: 'cs',
              src: '/materials/digital-citizenship/part3/videos/subtitles/cs/1.3.3.VideoSubtitles.Privacy_Settings_CS.vtt'
            },
            { label: 'Norsk',
              srclang: 'no',
              src: '/materials/digital-citizenship/part3/videos/subtitles/no/1.3.3.VideoSubtitles.Privacy_Settings_NO.vtt'
            },
            { label: 'Lietuvių',
              srclang: 'lt',
              src: '/materials/digital-citizenship/part3/videos/subtitles/lt/1.3.3.VideoSubtitles.Privacy_Settings_LT.vtt'
            },
            { label: 'Deutsch',
              srclang: 'de',
              src: '/materials/digital-citizenship/part3/videos/subtitles/de/1.3.3.VideoSubtitles.Privacy_Settings_DE.vtt'
            },
          ],
        },
      },
    },
    {
      anchorId: 'wise-and-resilient',
      assets: {
        bundle: {
          languages: [
            { lang: 'en', href: '/materials/digital-citizenship/part4/part4-en.zip' },
            { lang: 'cs', href: '/materials/digital-citizenship/part4/part4-cs.zip' },
            { lang: 'no', href: '/materials/digital-citizenship/part4/part4-no.zip' },
            { lang: 'lt', href: '/materials/digital-citizenship/part4/part4-lt.zip' },
            { lang: 'de', href: '/materials/digital-citizenship/part4/part4-de.zip' },
          ],
        },
        featuredVideo: {
          // Resilience in Digital Environments
          id: '1.4.1',
          posterSrc: '/images/learning-hub/video-posters/1.4.1_Resilience_video_thumbnail.webp',
          videoSrc: '/materials/digital-citizenship/part4/videos/1.4.1.Video.Resilience.mp4',
          downloads: {
            video:
            { href: '/materials/digital-citizenship/part4/videos/1.4.1.Video.Resilience.mp4'
            }
          },
          tracks: [
            { label: 'English',
              srclang: 'en',
              src: '/materials/digital-citizenship/part4/videos/subtitles/en/1.4.1.VideoSubtitles.Resilience_EN.vtt'
            },
            { label: 'Čeština',
              srclang: 'cs',
              src: '/materials/digital-citizenship/part4/videos/subtitles/cs/1.4.1.VideoSubtitles.Resilience_CS.vtt'
            },
            { label: 'Norsk',
              srclang: 'no',
              src: '/materials/digital-citizenship/part4/videos/subtitles/no/1.4.1.VideoSubtitles.Resilience_NO.vtt'
            },
            { label: 'Lietuvių',
              srclang: 'lt',
              src: '/materials/digital-citizenship/part4/videos/subtitles/lt/1.4.1.VideoSubtitles.Resilience_LT.vtt'
            },
            { label: 'Deutsch',
              srclang: 'de',
              src: '/materials/digital-citizenship/part4/videos/subtitles/de/1.4.1.VideoSubtitles.Resilience_DE.vtt'
            },
          ],
        },
      },
    },
    {
      anchorId: 'act-responsibly',
      assets: {
        bundle: {
          languages: [
            { lang: 'en', href: '/materials/digital-citizenship/part5/part5-en.zip' },
            { lang: 'cs', href: '/materials/digital-citizenship/part5/part5-cs.zip' },
            { lang: 'no', href: '/materials/digital-citizenship/part5/part5-no.zip' },
            { lang: 'lt', href: '/materials/digital-citizenship/part5/part5-lt.zip' },
            { lang: 'de', href: '/materials/digital-citizenship/part5/part5-de.zip' },
          ],
        },
        materials: [
          // Image: Digital Footprint
          { id: '1.5.1',
            href: '/materials/digital-citizenship/part5/images/en/1.5.1.Image.Digital_footprint.png',
          },
          // Scenario Cards: Good and Bad to Post
          { id: '1.5.2',
            href: '/materials/digital-citizenship/part5/cards/en/1.5.2.Scenario_cards.Good_and_bad_to_post.pdf',
          },
          // Scenario Cards: Social Media Posts
          { id: '1.5.3',
            href: '/materials/digital-citizenship/part5/cards/en/1.5.3.Scenario_cards.Social_media_posts.pdf',
            languages: [
              { lang: 'en', href: '/materials/digital-citizenship/part5/cards/en/1.5.3.Scenario_cards.Social_media_posts.pdf' },
              { lang: 'cs', href: '/materials/digital-citizenship/part5/cards/cs/1.5.3.Scenario_cards.Social_media_posts_CS.pdf' },
              { lang: 'no', href: '/materials/digital-citizenship/part5/cards/no/1.5.3.Scenario_cards.Social_media_posts_NO.pdf' },
              { lang: 'lt', href: '/materials/digital-citizenship/part5/cards/lt/1.5.3.Scenario_cards.Social_media_posts_LT.pdf' },
              { lang: 'de', href: '/materials/digital-citizenship/part5/cards/de/1.5.3.Scenario_cards.Social_media_posts_DE.pdf' },
            ],
          },
        ],
      },
    },
  ],

  // ── Attacker Perspective ───────────────────────────────────────────────────
  ap: [
    {
      anchorId: 'circle-of-trusted-people',
      assets: {
        bundle: {
          languages: [
            { lang: 'en', href: '/materials/attacker-perspective/part1/part1-en.zip' },
            { lang: 'cs', href: '/materials/attacker-perspective/part1/part1-cs.zip' },
            { lang: 'no', href: '/materials/attacker-perspective/part1/part1-no.zip' },
            { lang: 'lt', href: '/materials/attacker-perspective/part1/part1-lt.zip' },
            { lang: 'de', href: '/materials/attacker-perspective/part1/part1-de.zip' },
          ],
        },
        // Materials with `languages` → "Download" shows a language dropdown;
        // without it (no translatable text) → plain "Download" button.
        materials: [
          // Worksheet: Trusteees: People Around Me
          { id: '2.1.1',
            href: '/materials/attacker-perspective/part1/worksheets/en/2.1.1.Worksheet.Trusted_people_around_me.pdf',
          },
          // Worksheet: Circles of Trust
          { id: '2.1.2',
            href: '/materials/attacker-perspective/part1/worksheets/en/2.1.2.Worksheet.Circles_of_trust.pdf',
          },
          // Image: Situation: Found Money
          { id: '2.1.3',
            href: '/materials/attacker-perspective/part1/images/2.1.3.Situation.Found_money.jpg',
          },
          // Image: Situation: Saw a Photo
          { id: '2.1.4',
            href: '/materials/attacker-perspective/part1/images/2.1.4.Situation.Saw_a_photo.jpg',
          },
        ],
      },
    },
    {
      anchorId: 'what-is-an-attacker',
      assets: {
        bundle: {
          languages: [
            { lang: 'en', href: '/materials/attacker-perspective/part2/part2-en.zip' },
            { lang: 'cs', href: '/materials/attacker-perspective/part2/part2-cs.zip' },
            { lang: 'no', href: '/materials/attacker-perspective/part2/part2-no.zip' },
            { lang: 'lt', href: '/materials/attacker-perspective/part2/part2-lt.zip' },
            { lang: 'de', href: '/materials/attacker-perspective/part2/part2-de.zip' },
          ],
        },
        materials: [
          // Scenario Cards: Identify the Behaviour
          { id: '2.2.1',
            href: '/materials/attacker-perspective/part2/cards/en/2.2.1.Cards.Identify_the_behaviour.pdf',
          },
          // Scenario Cards: Recognise the Characters
          { id: '2.2.2',
            href: '/materials/attacker-perspective/part2/cards/en/2.2.2.Cards.Recognise_the_characters.pdf',
          },
          // Image: Attacker Motivations
          { id: '2.2.4',
            href: '/materials/attacker-perspective/part2/images/en/2.2.4.Image.Attacker_motivations.png',
          },
          // Image: Looking into the Fairytale: Attacker Motivation and Means
          { id: '2.2.5',
            href: '/materials/attacker-perspective/part2/images/2.2.5.Image.Looking_into_the_fairytale_attacker_motivation_and_means.png',
          },
          // Worksheet: Attack Analysis
          { id: '2.2.6',
            href: '/materials/attacker-perspective/part2/worksheets/en/2.2.6.Worksheet.Attack_analysis.pdf',
          },
        ],
        featuredVideo: {
          // Who is Behind Cyber Attacks?
          id: '2.2.3',
          posterSrc: '/images/learning-hub/video-posters/2.2.3_WhoIsBehindCyberAttacks_video_thumbnail.webp',
          videoSrc: '/materials/attacker-perspective/part2/videos/2.2.3.Video.Who_is_Behind_Cyber_Attacks.mp4',
          downloads: {
            video:
            { href: '/materials/attacker-perspective/part2/videos/2.2.3.Video.Who_is_Behind_Cyber_Attacks.mp4'
            }
          },
          tracks: [
            { label: 'English',
              srclang: 'en',
              src: '/materials/attacker-perspective/part2/videos/subtitles/en/2.2.3.VideoSubtitles.Who_is_Behind_Cyber_Attacks_EN.vtt'
            },
            { label: 'Čeština',
              srclang: 'cs',
              src: '/materials/attacker-perspective/part2/videos/subtitles/cs/2.2.3.VideoSubtitles.Who_is_Behind_Cyber_Attacks_CS.vtt'
            },
            { label: 'Norsk',
              srclang: 'no',
              src: '/materials/attacker-perspective/part2/videos/subtitles/no/2.2.3.VideoSubtitles.Who_is_Behind_Cyber_Attacks_NO.vtt'
            },
            { label: 'Lietuvių',
              srclang: 'lt',
              src: '/materials/attacker-perspective/part2/videos/subtitles/lt/2.2.3.VideoSubtitles.Who_is_Behind_Cyber_Attacks_LT.vtt'
            },
            { label: 'Deutsch',
              srclang: 'de',
              src: '/materials/attacker-perspective/part2/videos/subtitles/de/2.2.3.VideoSubtitles.Who_is_Behind_Cyber_Attacks_DE.vtt'
            },
          ],
        },
      },
    },
    {
      anchorId: 'attacker-techniques',
      assets: {
        bundle: {
          languages: [
            { lang: 'en', href: '/materials/attacker-perspective/part3/part3-en.zip' },
            { lang: 'cs', href: '/materials/attacker-perspective/part3/part3-cs.zip' },
            { lang: 'no', href: '/materials/attacker-perspective/part3/part3-no.zip' },
            { lang: 'lt', href: '/materials/attacker-perspective/part3/part3-lt.zip' },
            { lang: 'de', href: '/materials/attacker-perspective/part3/part3-de.zip' },
          ],
        },
        materials: [
          // Reading: Smishing and Impersonation
          { id: '2.3.1',
            href: '/materials/attacker-perspective/part3/readings/en/2.3.1.Reading.Smishing_and_impersonation.docx',
            languages: [
              { lang: 'en', href: '/materials/attacker-perspective/part3/readings/en/2.3.1.Reading.Smishing_and_impersonation.docx' },
              { lang: 'no', href: '/materials/attacker-perspective/part3/readings/no/2.3.1.Reading.Smishing_and_impersonation_NO.docx' },
              { lang: 'lt', href: '/materials/attacker-perspective/part3/readings/lt/2.3.1.Reading.Smishing_and_impersonation_LT.docx' },
            ],
          },
          // Reading: Vishing, Fraud, and Impersonation
          { id: '2.3.2',
            href: '/materials/attacker-perspective/part3/readings/en/2.3.2.Reading.Vishing_fraud_and_impersonation.docx',
            languages: [
              { lang: 'en', href: '/materials/attacker-perspective/part3/readings/en/2.3.2.Reading.Vishing_fraud_and_impersonation.docx' },
              { lang: 'no', href: '/materials/attacker-perspective/part3/readings/no/2.3.2.Reading.Vishing_fraud_and_impersonation_NO.docx' },
              { lang: 'lt', href: '/materials/attacker-perspective/part3/readings/lt/2.3.2.Reading.Vishing_fraud_and_impersonation_LT.docx' },
            ],
          },
          // Reading: Most Common Cyber Threats
          { id: '2.3.3',
            href: '/materials/attacker-perspective/part3/readings/en/2.3.3.Reading.Most_common_cyber_threats.docx',
            languages: [
              { lang: 'en', href: '/materials/attacker-perspective/part3/readings/en/2.3.3.Reading.Most_common_cyber_threats.docx' },
              { lang: 'no', href: '/materials/attacker-perspective/part3/readings/no/2.3.3.Reading.Most_common_cyber_threats_NO.docx' },
              { lang: 'lt', href: '/materials/attacker-perspective/part3/readings/lt/2.3.3.Reading.Most_common_cyber_threats_LT.docx' },
            ],
          },
          // Scenario Cards: Common Adversary Techniques
          { id: '2.3.4',
            href: '/materials/attacker-perspective/part3/cards/en/2.3.4.Image.Common_adversary_techniques.pdf',
          },
          // Cards: Attackers and Their Plans
          { id: '2.3.5',
            href: '/materials/attacker-perspective/part3/cards/2.3.5.Cards.Attackers_and_their_plans.pdf',
          },
          // Worksheet: Puzzle: Party of Attackers
          { id: '2.3.6',
            href: '/materials/attacker-perspective/part3/worksheets/en/2.3.6.Puzzle.Party_of_attackers.docx',
            languages: [
              { lang: 'en', href: '/materials/attacker-perspective/part3/worksheets/en/2.3.6.Puzzle.Party_of_attackers.docx' },
              { lang: 'no', href: '/materials/attacker-perspective/part3/worksheets/no/2.3.6.Puzzle.Party_of_attackers_NO.docx' },
              { lang: 'lt', href: '/materials/attacker-perspective/part3/worksheets/lt/2.3.6.Puzzle.Party_of_attackers_LT.docx' },
            ],
          },
        ],
      },
    },
  ],

  // ── Authentication ─────────────────────────────────────────────────────────
  at: [
    {
      anchorId: 'identity-and-digital-assets',
      assets: {
        bundle: {
          languages: [
            { lang: 'en', href: '/materials/authentication/part1/part1-en.zip' },
            { lang: 'cs', href: '/materials/authentication/part1/part1-cs.zip' },
            { lang: 'no', href: '/materials/authentication/part1/part1-no.zip' },
            { lang: 'lt', href: '/materials/authentication/part1/part1-lt.zip' },
            { lang: 'de', href: '/materials/authentication/part1/part1-de.zip' },
          ],
        },
        // Materials with `languages` → "Download" shows a language dropdown;
        // without it (no translatable text) → plain "Download" button.
        materials: [
          // Image: Digital Identity
          { id: '3.1.1',
            href: '/materials/authentication/part1/images/3.1.1.Image.Digital_Identity.png',
          },
          // Images: Examples of Personal Digital Assets
          { id: '3.1.3',
            href: '/materials/authentication/part1/images/3.1.3.Images.Digital_Assets.pdf',
          },
          // Worksheet: What Would Happen If...?
          { id: '3.1.4',
            href: '/materials/authentication/part1/worksheets/en/3.1.4.Worksheet.What_would_happen_if.docx',
            languages: [
              { lang: 'en', href: '/materials/authentication/part1/worksheets/en/3.1.4.Worksheet.What_would_happen_if.docx' },
              { lang: 'no', href: '/materials/authentication/part1/worksheets/no/3.1.4.Worksheet.What_would_happen_if_NO.docx' },
              { lang: 'lt', href: '/materials/authentication/part1/worksheets/lt/3.1.4.Worksheet.What_would_happen_if_LT.docx' },
            ],
          },
          // Worksheet: My Digital Assets
          { id: '3.1.5',
            href: '/materials/authentication/part1/worksheets/en/3.1.5.Worksheet.My_digital_assets.docx',
            languages: [
              { lang: 'en', href: '/materials/authentication/part1/worksheets/en/3.1.5.Worksheet.My_digital_assets.docx' },
              { lang: 'no', href: '/materials/authentication/part1/worksheets/no/3.1.5.Worksheet.My_digital_assets_NO.docx' },
              { lang: 'lt', href: '/materials/authentication/part1/worksheets/lt/3.1.5.Worksheet.My_digital_assets_LT.docx' },
            ],
          },
        ],
        featuredVideo: {
          // What is Digital Identity?
          id: '3.1.2',
          posterSrc: '/images/learning-hub/video-posters/3.1.2_WhatIsDigitalIdentity_video_thumbnail.webp',
          videoSrc: '/materials/authentication/part1/videos/3.1.2.Video.What_is_Digital_Identity.mp4',
          downloads: {
            video:
            { href: '/materials/authentication/part1/videos/3.1.2.Video.What_is_Digital_Identity.mp4'
            }
          },
          tracks: [
            { label: 'English',
              srclang: 'en',
              src: '/materials/authentication/part1/videos/subtitles/en/3.1.2.VideoSubtitles.What_is_Digital_Identity_EN.vtt'
            },
            { label: 'Čeština',
              srclang: 'cs',
              src: '/materials/authentication/part1/videos/subtitles/cs/3.1.2.VideoSubtitles.What_is_Digital_Identity_CS.vtt'
            },
            { label: 'Norsk',
              srclang: 'no',
              src: '/materials/authentication/part1/videos/subtitles/no/3.1.2.VideoSubtitles.What_is_Digital_Identity_NO.vtt'
            },
            { label: 'Lietuvių',
              srclang: 'lt',
              src: '/materials/authentication/part1/videos/subtitles/lt/3.1.2.VideoSubtitles.What_is_Digital_Identity_LT.vtt'
            },
            { label: 'Deutsch',
              srclang: 'de',
              src: '/materials/authentication/part1/videos/subtitles/de/3.1.2.VideoSubtitles.What_is_Digital_Identity_DE.vtt'
            },
          ],
        },
      },
    },
    {
      anchorId: 'what-is-authentication',
      assets: {
        bundle: {
          languages: [
            { lang: 'en', href: '/materials/authentication/part2/part2-en.zip' },
            { lang: 'cs', href: '/materials/authentication/part2/part2-cs.zip' },
            { lang: 'no', href: '/materials/authentication/part2/part2-no.zip' },
            { lang: 'lt', href: '/materials/authentication/part2/part2-lt.zip' },
            { lang: 'de', href: '/materials/authentication/part2/part2-de.zip' },
          ],
        },
        materials: [
          // Images: Real-World Authentication Examples
          { id: '3.2.1',
            href: '/materials/authentication/part2/images/3.2.1.Images.Real-world_Authentication_Examples.pdf',
          },
          // Image: Logging into a Digital System
          { id: '3.2.3',
            href: '/materials/authentication/part2/images/en/3.2.3.Image.Logging_into_a_digital_system.pdf',
          },
          // Worksheet: Authentication in Everyday Life
          { id: '3.2.4',
            href: '/materials/authentication/part2/worksheets/en/3.2.4.Worksheet.Authentication_in_everyday_life.docx',
            languages: [
              { lang: 'en', href: '/materials/authentication/part2/worksheets/en/3.2.4.Worksheet.Authentication_in_everyday_life.docx' },
              { lang: 'no', href: '/materials/authentication/part2/worksheets/no/3.2.4.Worksheet.Authentication_in_everyday_life_NO.docx' },
              { lang: 'lt', href: '/materials/authentication/part2/worksheets/lt/3.2.4.Worksheet.Authentication_in_everyday_life_LT.docx' },
            ],
          },
        ],
        featuredVideo: {
          // What is Authentication?
          id: '3.2.2',
          posterSrc: '/images/learning-hub/video-posters/3.2.2_WhatIsAuthentication_video_thumbnail.webp',
          videoSrc: '/materials/authentication/part2/videos/3.2.2.Video.Authentication.mp4',
          downloads: {
            video:
            { href: '/materials/authentication/part2/videos/3.2.2.Video.Authentication.mp4'
            }
          },
          tracks: [
            { label: 'English',
              srclang: 'en',
              src: '/materials/authentication/part2/videos/subtitles/en/3.2.2.VideoSubtitles.Authentication_EN.vtt'
            },
            { label: 'Čeština',
              srclang: 'cs',
              src: '/materials/authentication/part2/videos/subtitles/cs/3.2.2.VideoSubtitles.Authentication_CS.vtt'
            },
            { label: 'Norsk',
              srclang: 'no',
              src: '/materials/authentication/part2/videos/subtitles/no/3.2.2.VideoSubtitles.Authentication_NO.vtt'
            },
            { label: 'Lietuvių',
              srclang: 'lt',
              src: '/materials/authentication/part2/videos/subtitles/lt/3.2.2.VideoSubtitles.Authentication_LT.vtt'
            },
            { label: 'Deutsch',
              srclang: 'de',
              src: '/materials/authentication/part2/videos/subtitles/de/3.2.2.VideoSubtitles.Authentication_DE.vtt'
            },
          ],
        },
      },
    },
    {
      anchorId: 'strong-usernames-and-passwords',
      assets: {
        bundle: {
          languages: [
            { lang: 'en', href: '/materials/authentication/part3/part3-en.zip' },
            { lang: 'cs', href: '/materials/authentication/part3/part3-cs.zip' },
            { lang: 'no', href: '/materials/authentication/part3/part3-no.zip' },
            { lang: 'lt', href: '/materials/authentication/part3/part3-lt.zip' },
            { lang: 'de', href: '/materials/authentication/part3/part3-de.zip' },
          ],
        },
        materials: [
          // Image: Examples of Weak Passwords
          { id: '3.3.2',
            href: '/materials/authentication/part3/images/en/3.3.2.Image.Examples_of_weak_passwords.pdf',
          },
          // Image: Examples of Strong Passwords
          { id: '3.3.3',
            href: '/materials/authentication/part3/images/en/3.3.3.Image.Examples_of_strong_passwords.pdf',
          },
          // Cards: Create a Strong Password
          { id: '3.3.4',
            href: '/materials/authentication/part3/cards/3.3.4.Cards.Create_a_strong_password.pdf',
          },
          // Image: Check Your Password
          { id: '3.3.5',
            href: '/materials/authentication/part3/images/en/3.3.5.Image.Check_your_password.png',
          },
          // Worksheet: My Strong Password Rules
          { id: '3.3.6',
            href: '/materials/authentication/part3/worksheets/en/3.3.6.Worksheet.My_strong_password_rules.docx',
            languages: [
              { lang: 'en', href: '/materials/authentication/part3/worksheets/en/3.3.6.Worksheet.My_strong_password_rules.docx' },
              { lang: 'no', href: '/materials/authentication/part3/worksheets/no/3.3.6.Worksheet.My_strong_password_rules_NO.docx' },
              { lang: 'lt', href: '/materials/authentication/part3/worksheets/lt/3.3.6.Worksheet.My_strong_password_rules_LT.docx' },
            ],
          },
        ],
        featuredVideo: {
          // Strong and Weak Passwords
          id: '3.3.1',
          posterSrc: '/images/learning-hub/video-posters/3.3.1_StrongAndWeakPasswords_video_thumbnail.webp',
          videoSrc: '/materials/authentication/part3/videos/3.3.1.Video.Strong_and_Weak_Passwords.mp4',
          downloads: {
            video:
            { href: '/materials/authentication/part3/videos/3.3.1.Video.Strong_and_Weak_Passwords.mp4'
            }
          },
          tracks: [
            { label: 'English',
              srclang: 'en',
              src: '/materials/authentication/part3/videos/subtitles/en/3.3.1.VideoSubtitles.Strong_and_Weak_Passwords_EN.vtt'
            },
            { label: 'Čeština',
              srclang: 'cs',
              src: '/materials/authentication/part3/videos/subtitles/cs/3.3.1.VideoSubtitles.Strong_and_Weak_Passwords_CS.vtt'
            },
            { label: 'Norsk',
              srclang: 'no',
              src: '/materials/authentication/part3/videos/subtitles/no/3.3.1.VideoSubtitles.Strong_and_Weak_Passwords_NO.vtt'
            },
            { label: 'Lietuvių',
              srclang: 'lt',
              src: '/materials/authentication/part3/videos/subtitles/lt/3.3.1.VideoSubtitles.Strong_and_Weak_Passwords_LT.vtt'
            },
            { label: 'Deutsch',
              srclang: 'de',
              src: '/materials/authentication/part3/videos/subtitles/de/3.3.1.VideoSubtitles.Strong_and_Weak_Passwords_DE.vtt'
            },
          ],
        },
      },
    },
    {
      anchorId: 'how-to-manage-passwords-securely',
      assets: {
        bundle: {
          languages: [
            { lang: 'en', href: '/materials/authentication/part4/part4-en.zip' },
            { lang: 'cs', href: '/materials/authentication/part4/part4-cs.zip' },
            { lang: 'no', href: '/materials/authentication/part4/part4-no.zip' },
            { lang: 'lt', href: '/materials/authentication/part4/part4-lt.zip' },
            { lang: 'de', href: '/materials/authentication/part4/part4-de.zip' },
          ],
        },
        materials: [
          // Image: Two Different Types of Authentication Used Together
          { id: '3.4.1',
            href: '/materials/authentication/part4/images/en/3.4.1.Image.Two_types_of_authentication_used_together.pdf',
          },
          // Schema: Set of Money Coins
          { id: '3.4.2',
            href: '/materials/authentication/part4/schemas/3.4.2.Schema.Set_of_money_coins_School_bank.pdf',
          },
          // Schema: Set of Groups
          { id: '3.4.3',
            href: '/materials/authentication/part4/schemas/3.4.3.Schema.Set_of_groups.pdf',
          },
          // Schema: PIN Cards
          { id: '3.4.4',
            href: '/materials/authentication/part4/schemas/3.4.4.Schema.PIN_cards.pdf',
          },
          // Image: How to Use a Password Manager
          { id: '3.4.6',
            href: '/materials/authentication/part4/images/3.4.6.Image.How_to_use_a_password_manager.png',
          },
          // Image: Password Manager
          { id: '3.4.7',
            href: '/materials/authentication/part4/images/3.4.7.Image.Password_manager.png',
          },
          // Image: Steps of Saving Passwords
          { id: '3.4.8',
            href: '/materials/authentication/part4/images/3.4.8.Image.Steps_of_saving_passwords.pdf',
          },
          // Worksheet: Password Problems and Solutions
          { id: '3.4.9',
            href: '/materials/authentication/part4/worksheets/en/3.4.9.Worksheet.Password_problems_and_solutions.docx',
            languages: [
              { lang: 'en', href: '/materials/authentication/part4/worksheets/en/3.4.9.Worksheet.Password_problems_and_solutions.docx' },
              { lang: 'no', href: '/materials/authentication/part4/worksheets/no/3.4.9.Worksheet.Password_problems_and_solutions_NO.docx' },
              { lang: 'lt', href: '/materials/authentication/part4/worksheets/lt/3.4.9.Worksheet.Password_problems_and_solutions_LT.docx' },
            ],
          },
        ],
        featuredVideo: {
          // What is a Password Manager?
          id: '3.4.5',
          posterSrc: '/images/learning-hub/video-posters/3.4.5_WhatIsPasswordManager_video_thumbnail.webp',
          videoSrc: '/materials/authentication/part4/videos/3.4.5.Video.Password_Manager.mp4',
          downloads: {
            video:
            { href: '/materials/authentication/part4/videos/3.4.5.Video.Password_Manager.mp4'
            }
          },
          tracks: [
            { label: 'English',
              srclang: 'en',
              src: '/materials/authentication/part4/videos/subtitles/en/3.4.5.VideoSubtitles.Password_Manager_EN.vtt'
            },
            { label: 'Čeština',
              srclang: 'cs',
              src: '/materials/authentication/part4/videos/subtitles/cs/3.4.5.VideoSubtitles.Password_Manager_CS.vtt'
            },
            { label: 'Norsk',
              srclang: 'no',
              src: '/materials/authentication/part4/videos/subtitles/no/3.4.5.VideoSubtitles.Password_Manager_NO.vtt'
            },
            { label: 'Lietuvių',
              srclang: 'lt',
              src: '/materials/authentication/part4/videos/subtitles/lt/3.4.5.VideoSubtitles.Password_Manager_LT.vtt'
            },
            { label: 'Deutsch',
              srclang: 'de',
              src: '/materials/authentication/part4/videos/subtitles/de/3.4.5.VideoSubtitles.Password_Manager_DE.vtt'
            },
          ],
        },
      },
    },
    {
      anchorId: 'how-to-protect-our-digital-identity',
      assets: {
        bundle: {
          languages: [
            { lang: 'en', href: '/materials/authentication/part5/part5-en.zip' },
            { lang: 'cs', href: '/materials/authentication/part5/part5-cs.zip' },
            { lang: 'no', href: '/materials/authentication/part5/part5-no.zip' },
            { lang: 'lt', href: '/materials/authentication/part5/part5-lt.zip' },
            { lang: 'de', href: '/materials/authentication/part5/part5-de.zip' },
          ],
        },
        materials: [
          // Image: Safe and Unsafe Online Behaviours
          { id: '3.5.1',
            href: '/materials/authentication/part5/images/3.5.1.Image.Safe_and_unsafe_online_behaviours.pdf',
          },
          // Worksheet: Digital Identity and Authentication Scenarios
          { id: '3.5.3',
            href: '/materials/authentication/part5/worksheets/en/3.5.3.Worksheet.Digital_identity_and_authentication_scenarios.docx',
            languages: [
              { lang: 'en', href: '/materials/authentication/part5/worksheets/en/3.5.3.Worksheet.Digital_identity_and_authentication_scenarios.docx' },
              { lang: 'no', href: '/materials/authentication/part5/worksheets/no/3.5.3.Worksheet.Digital_identity_and_authentication_scenarios_NO.docx' },
              { lang: 'lt', href: '/materials/authentication/part5/worksheets/lt/3.5.3.Worksheet.Digital_identity_and_authentication_scenarios_LT.docx' },
            ],
          },
          // Worksheet: How I Protect My Digital Identity
          { id: '3.5.4',
            href: '/materials/authentication/part5/worksheets/en/3.5.4.Worksheet.How_I_protect_my_digital_identity.docx',
            languages: [
              { lang: 'en', href: '/materials/authentication/part5/worksheets/en/3.5.4.Worksheet.How_I_protect_my_digital_identity.docx' },
              { lang: 'no', href: '/materials/authentication/part5/worksheets/no/3.5.4.Worksheet.How_I_protect_my_digital_identity_NO.docx' },
              { lang: 'lt', href: '/materials/authentication/part5/worksheets/lt/3.5.4.Worksheet.How_I_protect_my_digital_identity_LT.docx' },
            ],
          },
        ],
        featuredVideo: {
          // Protecting Your Digital Identity
          id: '3.5.2',
          posterSrc: '/images/learning-hub/video-posters/3.5.2_ProtectingYourDigitalIdentity_video_thumbnail.webp',
          videoSrc: '/materials/authentication/part5/videos/3.5.2.Video.Protecting_Your_Digital_Identity.mp4',
          downloads: {
            video:
            { href: '/materials/authentication/part5/videos/3.5.2.Video.Protecting_Your_Digital_Identity.mp4'
            }
          },
          tracks: [
            { label: 'English',
              srclang: 'en',
              src: '/materials/authentication/part5/videos/subtitles/en/3.5.2.VideoSubtitles.Protecting_Your_Digital_Identity_EN.vtt'
            },
            { label: 'Čeština',
              srclang: 'cs',
              src: '/materials/authentication/part5/videos/subtitles/cs/3.5.2.VideoSubtitles.Protecting_Your_Digital_Identity_CS.vtt'
            },
            { label: 'Norsk',
              srclang: 'no',
              src: '/materials/authentication/part5/videos/subtitles/no/3.5.2.VideoSubtitles.Protecting_Your_Digital_Identity_NO.vtt'
            },
            { label: 'Lietuvių',
              srclang: 'lt',
              src: '/materials/authentication/part5/videos/subtitles/lt/3.5.2.VideoSubtitles.Protecting_Your_Digital_Identity_LT.vtt'
            },
            { label: 'Deutsch',
              srclang: 'de',
              src: '/materials/authentication/part5/videos/subtitles/de/3.5.2.VideoSubtitles.Protecting_Your_Digital_Identity_DE.vtt'
            },
          ],
        },
      },
    },
  ],

  // ── Data Privacy ───────────────────────────────────────────────────────────
  dp: [
    {
      anchorId: 'what-is-private-data',
      assets: {
        bundle: {
          languages: [
            { lang: 'en', href: '/materials/data-privacy/part1/part1-en.zip' },
            { lang: 'cs', href: '/materials/data-privacy/part1/part1-cs.zip' },
            { lang: 'no', href: '/materials/data-privacy/part1/part1-no.zip' },
            { lang: 'lt', href: '/materials/data-privacy/part1/part1-lt.zip' },
            { lang: 'de', href: '/materials/data-privacy/part1/part1-de.zip' },
          ],
        },
        // Materials with `languages` → "Download" shows a language dropdown;
        // without it (no translatable text) → plain "Download" button.
        materials: [
          // Sorting Cards: Private or Public
          { id: '4.1.2',
            href: '/materials/data-privacy/part1/cards/en/4.1.2.Sorting_cards.Private_or_public.pdf',
            languages: [
              { lang: 'en', href: '/materials/data-privacy/part1/cards/en/4.1.2.Sorting_cards.Private_or_public.pdf' },
              { lang: 'cs', href: '/materials/data-privacy/part1/cards/cs/4.1.2.Sorting_cards.Private_or_public_CS.pdf' },
              { lang: 'no', href: '/materials/data-privacy/part1/cards/no/4.1.2.Sorting_cards.Private_or_public_NO.pdf' },
              { lang: 'lt', href: '/materials/data-privacy/part1/cards/lt/4.1.2.Sorting_cards.Private_or_public_LT.pdf' },
              { lang: 'de', href: '/materials/data-privacy/part1/cards/de/4.1.2.Sorting_cards.Private_or_public_DE.pdf' },
            ],
          },
          // Worksheet: Reflection: Public vs. Private Data
          { id: '4.1.3',
            href: '/materials/data-privacy/part1/worksheets/en/4.1.3.Worksheet.Reflection_Public_vs_Private_Data.docx',
            languages: [
              { lang: 'en', href: '/materials/data-privacy/part1/worksheets/en/4.1.3.Worksheet.Reflection_Public_vs_Private_Data.docx' },
              { lang: 'no', href: '/materials/data-privacy/part1/worksheets/no/4.1.3.Worksheet.Reflection_Public_vs_Private_Data_NO.docx' },
              { lang: 'lt', href: '/materials/data-privacy/part1/worksheets/lt/4.1.3.Worksheet.Reflection_Public_vs_Private_Data_LT.docx' },
            ],
          },
        ],
        featuredVideo: {
          // What is Private Data?
          id: '4.1.1',
          posterSrc: '/images/learning-hub/video-posters/4.1.1_WhatIsPrivateData_video_thumbnail.webp',
          videoSrc: '/materials/data-privacy/part1/videos/4.1.1.Video.What_is_Private_Data.mp4',
          downloads: {
            video:
            { href: '/materials/data-privacy/part1/videos/4.1.1.Video.What_is_Private_Data.mp4'
            }
          },
          tracks: [
            { label: 'English',
              srclang: 'en',
              src: '/materials/data-privacy/part1/videos/subtitles/en/4.1.1.VideoSubtitles.What_is_Private_Data_EN.vtt'
            },
            { label: 'Čeština',
              srclang: 'cs',
              src: '/materials/data-privacy/part1/videos/subtitles/cs/4.1.1.VideoSubtitles.What_is_Private_Data_CS.vtt'
            },
            { label: 'Norsk',
              srclang: 'no',
              src: '/materials/data-privacy/part1/videos/subtitles/no/4.1.1.VideoSubtitles.What_is_Private_Data_NO.vtt'
            },
            { label: 'Lietuvių',
              srclang: 'lt',
              src: '/materials/data-privacy/part1/videos/subtitles/lt/4.1.1.VideoSubtitles.What_is_Private_Data_LT.vtt'
            },
            { label: 'Deutsch',
              srclang: 'de',
              src: '/materials/data-privacy/part1/videos/subtitles/de/4.1.1.VideoSubtitles.What_is_Private_Data_DE.vtt'
            },
          ],
        },
      },
    },
    {
      anchorId: 'data-sharing',
      assets: {
        bundle: {
          languages: [
            { lang: 'en', href: '/materials/data-privacy/part2/part2-en.zip' },
            { lang: 'cs', href: '/materials/data-privacy/part2/part2-cs.zip' },
            { lang: 'no', href: '/materials/data-privacy/part2/part2-no.zip' },
            { lang: 'lt', href: '/materials/data-privacy/part2/part2-lt.zip' },
            { lang: 'de', href: '/materials/data-privacy/part2/part2-de.zip' },
          ],
        },
        materials: [
          // Image: Sharing Online: Safe vs. Risky
          { id: '4.2.1',
            href: '/materials/data-privacy/part2/images/4.2.1.Image.Sharing_online_safe_vs_risky.pdf',
          },
          // Scenario Cards: Roleplay
          { id: '4.2.2',
            href: '/materials/data-privacy/part2/cards/en/4.2.2.Scenario_cards.Roleplay.pdf',
            languages: [
              { lang: 'en', href: '/materials/data-privacy/part2/cards/en/4.2.2.Scenario_cards.Roleplay.pdf' },
              { lang: 'cs', href: '/materials/data-privacy/part2/cards/cs/4.2.2.Scenario_cards.Roleplay_CS.pdf' },
              { lang: 'no', href: '/materials/data-privacy/part2/cards/no/4.2.2.Scenario_cards.Roleplay_NO.pdf' },
              { lang: 'lt', href: '/materials/data-privacy/part2/cards/lt/4.2.2.Scenario_cards.Roleplay_LT.pdf' },
              { lang: 'de', href: '/materials/data-privacy/part2/cards/de/4.2.2.Scenario_cards.Roleplay_DE.pdf' },
            ],
          },
          // Worksheet: Share or Don't Share
          { id: '4.2.3',
            href: '/materials/data-privacy/part2/worksheets/en/4.2.3.Worksheet.Share_or_Dont_Share.docx',
            languages: [
              { lang: 'en', href: '/materials/data-privacy/part2/worksheets/en/4.2.3.Worksheet.Share_or_Dont_Share.docx' },
              { lang: 'no', href: '/materials/data-privacy/part2/worksheets/no/4.2.3.Worksheet.Share_or_Dont_Share_NO.docx' },
              { lang: 'lt', href: '/materials/data-privacy/part2/worksheets/lt/4.2.3.Worksheet.Share_or_Dont_Share_LT.docx' },
            ],
          },
        ],
      },
    },
    {
      anchorId: 'digital-footprints',
      assets: {
        bundle: {
          languages: [
            { lang: 'en', href: '/materials/data-privacy/part3/part3-en.zip' },
            { lang: 'cs', href: '/materials/data-privacy/part3/part3-cs.zip' },
            { lang: 'no', href: '/materials/data-privacy/part3/part3-no.zip' },
            { lang: 'lt', href: '/materials/data-privacy/part3/part3-lt.zip' },
            { lang: 'de', href: '/materials/data-privacy/part3/part3-de.zip' },
          ],
        },
        materials: [
          // Image: Comic Story: A Day in the Life of Sam Online
          { id: '4.3.2',
            href: '/materials/data-privacy/part3/images/en/4.3.2.Image.Comic_story_A_day_in_the_life_of_Sam_online.png',
            languages: [
              { lang: 'en', href: '/materials/data-privacy/part3/images/en/4.3.2.Image.Comic_story_A_day_in_the_life_of_Sam_online.png' },
              { lang: 'de', href: '/materials/data-privacy/part3/images/de/4.3.2.Image.Comic_story_A_day_in_the_life_of_Sam_online_DE.png' },
            ],
          },
          // Worksheet: Track Sam's Footprint
          { id: '4.3.3',
            href: '/materials/data-privacy/part3/worksheets/en/4.3.3.Worksheet.Track_Sams_Footprint.docx',
            languages: [
              { lang: 'en', href: '/materials/data-privacy/part3/worksheets/en/4.3.3.Worksheet.Track_Sams_Footprint.docx' },
              { lang: 'no', href: '/materials/data-privacy/part3/worksheets/no/4.3.3.Worksheet.Track_Sams_Footprint_NO.docx' },
              { lang: 'lt', href: '/materials/data-privacy/part3/worksheets/lt/4.3.3.Worksheet.Track_Sams_Footprint_LT.docx' },
              { lang: 'de', href: '/materials/data-privacy/part3/worksheets/de/4.3.3.Worksheet.Track_Sams_Footprint_DE.docx' },
            ],
          },
          // Schema: Board Privacy Value
          { id: '4.3.4',
            href: '/materials/data-privacy/part3/schemas/4.3.4.Schema.Board_Privacy_Value.pdf',
          },
          // Game Set: Privacy Value
          { id: '4.3.5',
            href: '/materials/data-privacy/part3/cards/en/4.3.5.Game_set.Privacy_Value.pdf',
            languages: [
              { lang: 'en', href: '/materials/data-privacy/part3/cards/en/4.3.5.Game_set.Privacy_Value.pdf' },
              { lang: 'no', href: '/materials/data-privacy/part3/cards/no/4.3.5.Game_set.Privacy_Value_NO.pdf' },
            ],
          },
        ],
        featuredVideo: {
          // What is a Digital Footprint?
          id: '4.3.1',
          posterSrc: '/images/learning-hub/video-posters/4.3.1_WhatIsDigitalFootprint_video_thumbnail.webp',
          videoSrc: '/materials/data-privacy/part3/videos/4.3.1.Video.What_is_a_Digital_Footprint.mp4',
          downloads: {
            video:
            { href: '/materials/data-privacy/part3/videos/4.3.1.Video.What_is_a_Digital_Footprint.mp4'
            }
          },
          tracks: [
            { label: 'English',
              srclang: 'en',
              src: '/materials/data-privacy/part3/videos/subtitles/en/4.3.1.VideoSubtitles.What_is_a_Digital_Footprint_EN.vtt'
            },
            { label: 'Čeština',
              srclang: 'cs',
              src: '/materials/data-privacy/part3/videos/subtitles/cs/4.3.1.VideoSubtitles.What_is_a_Digital_Footprint_CS.vtt'
            },
            { label: 'Norsk',
              srclang: 'no',
              src: '/materials/data-privacy/part3/videos/subtitles/no/4.3.1.VideoSubtitles.What_is_a_Digital_Footprint_NO.vtt'
            },
            { label: 'Lietuvių',
              srclang: 'lt',
              src: '/materials/data-privacy/part3/videos/subtitles/lt/4.3.1.VideoSubtitles.What_is_a_Digital_Footprint_LT.vtt'
            },
            { label: 'Deutsch',
              srclang: 'de',
              src: '/materials/data-privacy/part3/videos/subtitles/de/4.3.1.VideoSubtitles.What_is_a_Digital_Footprint_DE.vtt'
            },
          ],
        },
      },
    },
    {
      anchorId: 'clean-up-digital-footprint',
      assets: {
        bundle: {
          languages: [
            { lang: 'en', href: '/materials/data-privacy/part4/part4-en.zip' },
            { lang: 'cs', href: '/materials/data-privacy/part4/part4-cs.zip' },
            { lang: 'no', href: '/materials/data-privacy/part4/part4-no.zip' },
            { lang: 'lt', href: '/materials/data-privacy/part4/part4-lt.zip' },
            { lang: 'de', href: '/materials/data-privacy/part4/part4-de.zip' },
          ],
        },
        materials: [
          // Image: An Example of Basic Settings
          { id: '4.4.1',
            href: '/materials/data-privacy/part4/images/en/4.4.1.Image.An_example_of_basic_settings.png',
            languages: [
              { lang: 'en', href: '/materials/data-privacy/part4/images/en/4.4.1.Image.An_example_of_basic_settings.png' },
              { lang: 'cs', href: '/materials/data-privacy/part4/images/cs/4.4.1.Image.An_example_of_basic_settings_CS.png' },
              { lang: 'no', href: '/materials/data-privacy/part4/images/no/4.4.1.Image.An_example_of_basic_settings_NO.png' },
              { lang: 'lt', href: '/materials/data-privacy/part4/images/lt/4.4.1.Image.An_example_of_basic_settings_LT.png' },
              { lang: 'de', href: '/materials/data-privacy/part4/images/de/4.4.1.Image.An_example_of_basic_settings_DE.png' },
            ],
          },
          // Worksheet: Fix This Profile!
          { id: '4.4.2a',
            href: '/materials/data-privacy/part4/worksheets/en/4.4.2a.Worksheet.Fix_this_profile.docx',
            languages: [
              { lang: 'en', href: '/materials/data-privacy/part4/worksheets/en/4.4.2a.Worksheet.Fix_this_profile.docx' },
              { lang: 'lt', href: '/materials/data-privacy/part4/worksheets/lt/4.4.2a.Worksheet.Fix_this_profile_LT.docx' },
            ],
          },
          // Worksheet: Fix This Profile!
          { id: '4.4.2b',
            href: '/materials/data-privacy/part4/worksheets/en/4.4.2b.Worksheet.Fix_this_profile.png',
            languages: [
              { lang: 'en', href: '/materials/data-privacy/part4/worksheets/en/4.4.2b.Worksheet.Fix_this_profile.png' },
              { lang: 'cs', href: '/materials/data-privacy/part4/worksheets/cs/4.4.2b.Worksheet.Fix_this_profile_CS.png' },
              { lang: 'no', href: '/materials/data-privacy/part4/worksheets/no/4.4.2b.Worksheet.Fix_this_profile_NO.png' },
              { lang: 'lt', href: '/materials/data-privacy/part4/worksheets/lt/4.4.2b.Worksheet.Fix_this_profile_LT.png' },
              { lang: 'de', href: '/materials/data-privacy/part4/worksheets/de/4.4.2b.Worksheet.Fix_this_profile_DE.png' },
            ],
          },
          // Worksheet: Privacy Tips for Kids
          { id: '4.4.3',
            href: '/materials/data-privacy/part4/worksheets/en/4.4.3.Worksheet.Privacy_Tips_for_Kids.docx',
            languages: [
              { lang: 'en', href: '/materials/data-privacy/part4/worksheets/en/4.4.3.Worksheet.Privacy_Tips_for_Kids.docx' },
              { lang: 'no', href: '/materials/data-privacy/part4/worksheets/no/4.4.3.Worksheet.Privacy_Tips_for_Kids_NO.docx' },
              { lang: 'lt', href: '/materials/data-privacy/part4/worksheets/lt/4.4.3.Worksheet.Privacy_Tips_for_Kids_LT.docx' },
            ],
          },
          // Worksheet: Poster Template
          { id: '4.4.4',
            href: '/materials/data-privacy/part4/worksheets/4.4.4.Worksheet.Poster_template.pdf',
          },
          // Worksheet: Puzzle: Using Digital Traces “Members of the Brain Fights Team”
          { id: '4.4.6',
            href: '/materials/data-privacy/part4/worksheets/en/4.4.6.Worksheet.Puzzle.Using_digital_traces.docx',
            languages: [
              { lang: 'en', href: '/materials/data-privacy/part4/worksheets/en/4.4.6.Worksheet.Puzzle.Using_digital_traces.docx' },
              { lang: 'no', href: '/materials/data-privacy/part4/worksheets/no/4.4.6.Worksheet.Puzzle.Using_digital_traces_NO.docx' },
              { lang: 'lt', href: '/materials/data-privacy/part4/worksheets/lt/4.4.6.Worksheet.Puzzle.Using_digital_traces_LT.docx' },
            ],
          },
        ],
        featuredVideo: {
          // Protecting Your Personal Data Online
          id: '4.4.5',
          posterSrc: '/images/learning-hub/video-posters/4.4.5_ProtectingYourPersonalDataOnline_video_thumbnail.webp',
          videoSrc: '/materials/data-privacy/part4/videos/4.4.5.Video.Protecting_Your_Personal_Data.mp4',
          downloads: {
            video:
            { href: '/materials/data-privacy/part4/videos/4.4.5.Video.Protecting_Your_Personal_Data.mp4'
            }
          },
          tracks: [
            { label: 'English',
              srclang: 'en',
              src: '/materials/data-privacy/part4/videos/subtitles/en/4.4.5.VideoSubtitles.Protecting_Your_Personal_Data_EN.vtt'
            },
            { label: 'Čeština',
              srclang: 'cs',
              src: '/materials/data-privacy/part4/videos/subtitles/cs/4.4.5.VideoSubtitles.Protecting_Your_Personal_Data_CS.vtt'
            },
            { label: 'Norsk',
              srclang: 'no',
              src: '/materials/data-privacy/part4/videos/subtitles/no/4.4.5.VideoSubtitles.Protecting_Your_Personal_Data_NO.vtt'
            },
            { label: 'Lietuvių',
              srclang: 'lt',
              src: '/materials/data-privacy/part4/videos/subtitles/lt/4.4.5.VideoSubtitles.Protecting_Your_Personal_Data_LT.vtt'
            },
            { label: 'Deutsch',
              srclang: 'de',
              src: '/materials/data-privacy/part4/videos/subtitles/de/4.4.5.VideoSubtitles.Protecting_Your_Personal_Data_DE.vtt'
            },
          ],
        },
      },
    },
  ],

  // ── Social Engineering ─────────────────────────────────────────────────────
  se: [
    {
      anchorId: 'what-is-social-engineering',
      assets: {
        bundle: {
          languages: [
            { lang: 'en', href: '/materials/social-engineering/part1/part1-en.zip' },
            { lang: 'cs', href: '/materials/social-engineering/part1/part1-cs.zip' },
            { lang: 'no', href: '/materials/social-engineering/part1/part1-no.zip' },
            { lang: 'lt', href: '/materials/social-engineering/part1/part1-lt.zip' },
            { lang: 'de', href: '/materials/social-engineering/part1/part1-de.zip' },
          ],
        },
        // Materials with `languages` → "Download" shows a language dropdown;
        // without it (no translatable text) → plain "Download" button.
        materials: [
          // Image: Hacking Systems vs. Tricking People
          { id: '5.1.2',
            href: '/materials/social-engineering/part1/images/5.1.2.Images.Hacking_systems_versus_tricking_people.pdf',
          },
          // Image: Goals of an Attacker
          { id: '5.1.3',
            href: '/materials/social-engineering/part1/images/en/5.1.3.Image.Goals_of_an_attacker.pdf',
          },
          // Scenario Cards: What Does an Attacker Want?
          { id: '5.1.4',
            href: '/materials/social-engineering/part1/cards/en/5.1.4.Scenario_cards.What_does_an_attacker_want.pdf',
          },
          // Solution Cards: What Does an Attacker Want?
          { id: '5.1.5',
            href: '/materials/social-engineering/part1/cards/en/5.1.5.Solution_cards.What_does_an_attacker_want.pdf',
          },
          // Worksheet: Understanding Social Engineering
          { id: '5.1.6',
            href: '/materials/social-engineering/part1/worksheets/en/5.1.6.Worksheet.Understanding_social_engineering.docx',
            languages: [
              { lang: 'en', href: '/materials/social-engineering/part1/worksheets/en/5.1.6.Worksheet.Understanding_social_engineering.docx' },
              { lang: 'no', href: '/materials/social-engineering/part1/worksheets/no/5.1.6.Worksheet.Understanding_social_engineering_NO.docx' },
              { lang: 'lt', href: '/materials/social-engineering/part1/worksheets/lt/5.1.6.Worksheet.Understanding_social_engineering_LT.docx' },
            ],
          },
        ],
        featuredVideo: {
          // What is Social Engineering?
          id: '5.1.1',
          posterSrc: '/images/learning-hub/video-posters/5.1.1_WhatIsSocialEngineering_video_thumbnail.webp',
          videoSrc: '/materials/social-engineering/part1/videos/5.1.1.Video.What_is_Social_Engineering.mp4',
          downloads: {
            video:
            { href: '/materials/social-engineering/part1/videos/5.1.1.Video.What_is_Social_Engineering.mp4'
            }
          },
          tracks: [
            { label: 'English',
              srclang: 'en',
              src: '/materials/social-engineering/part1/videos/subtitles/en/5.1.1.VideoSubtitles.What_is_Social_Engineering_EN.vtt'
            },
            { label: 'Čeština',
              srclang: 'cs',
              src: '/materials/social-engineering/part1/videos/subtitles/cs/5.1.1.VideoSubtitles.What_is_Social_Engineering_CS.vtt'
            },
            { label: 'Norsk',
              srclang: 'no',
              src: '/materials/social-engineering/part1/videos/subtitles/no/5.1.1.VideoSubtitles.What_is_Social_Engineering_NO.vtt'
            },
            { label: 'Lietuvių',
              srclang: 'lt',
              src: '/materials/social-engineering/part1/videos/subtitles/lt/5.1.1.VideoSubtitles.What_is_Social_Engineering_LT.vtt'
            },
            { label: 'Deutsch',
              srclang: 'de',
              src: '/materials/social-engineering/part1/videos/subtitles/de/5.1.1.VideoSubtitles.What_is_Social_Engineering_DE.vtt'
            },
          ],
        },
      },
    },
    {
      anchorId: 'why-is-social-engineering-used',
      assets: {
        bundle: {
          languages: [
            { lang: 'en', href: '/materials/social-engineering/part2/part2-en.zip' },
            { lang: 'cs', href: '/materials/social-engineering/part2/part2-cs.zip' },
            { lang: 'no', href: '/materials/social-engineering/part2/part2-no.zip' },
            { lang: 'lt', href: '/materials/social-engineering/part2/part2-lt.zip' },
            { lang: 'de', href: '/materials/social-engineering/part2/part2-de.zip' },
          ],
        },
        materials: [
          // Scenario Cards: Attacker Tactics
          { id: '5.2.1',
            href: '/materials/social-engineering/part2/cards/en/5.2.1.Scenario_cards.Attacker_tactics.pdf',
          },
          // Scenario Cards: Emotional Manipulation Puzzle
          { id: '5.2.2',
            href: '/materials/social-engineering/part2/cards/en/5.2.2.Scenario_cards.Emotional_manipulation_puzzle.pdf',
          },
          // Worksheet: Why Social Engineering Works
          { id: '5.2.3',
            href: '/materials/social-engineering/part2/worksheets/en/5.2.3.Worksheet.Why_Social_Engineering_works.docx',
            languages: [
              { lang: 'en', href: '/materials/social-engineering/part2/worksheets/en/5.2.3.Worksheet.Why_Social_Engineering_works.docx' },
              { lang: 'no', href: '/materials/social-engineering/part2/worksheets/no/5.2.3.Worksheet.Why_Social_Engineering_works_NO.docx' },
              { lang: 'lt', href: '/materials/social-engineering/part2/worksheets/lt/5.2.3.Worksheet.Why_Social_Engineering_works_LT.docx' },
            ],
          },
        ],
      },
    },
    {
      anchorId: 'recognising-social-engineering',
      assets: {
        bundle: {
          languages: [
            { lang: 'en', href: '/materials/social-engineering/part3/part3-en.zip' },
            { lang: 'cs', href: '/materials/social-engineering/part3/part3-cs.zip' },
            { lang: 'no', href: '/materials/social-engineering/part3/part3-no.zip' },
            { lang: 'lt', href: '/materials/social-engineering/part3/part3-lt.zip' },
            { lang: 'de', href: '/materials/social-engineering/part3/part3-de.zip' },
          ],
        },
        materials: [
          // Worksheet: Dot-to-Dot Activity
          { id: '5.3.2',
            href: '/materials/social-engineering/part3/worksheets/en/5.3.2.Worksheet.Dot_to_dot_activity.docx',
            languages: [
              { lang: 'en', href: '/materials/social-engineering/part3/worksheets/en/5.3.2.Worksheet.Dot_to_dot_activity.docx' },
              { lang: 'no', href: '/materials/social-engineering/part3/worksheets/no/5.3.2.Worksheet.Dot_to_dot_activity_NO.docx' },
              { lang: 'lt', href: '/materials/social-engineering/part3/worksheets/lt/5.3.2.Worksheet.Dot_to_dot_activity_LT.docx' },
            ],
          },
        ],
        featuredVideo: {
          // Types of Social Engineering
          id: '5.3.1',
          posterSrc: '/images/learning-hub/video-posters/5.3.1_TypesOfSocialEngineering_video_thumbnail.webp',
          videoSrc: '/materials/social-engineering/part3/videos/5.3.1.Video.Types_of_Social_Engineering.mp4',
          downloads: {
            video:
            { href: '/materials/social-engineering/part3/videos/5.3.1.Video.Types_of_Social_Engineering.mp4'
            }
          },
          tracks: [
            { label: 'English',
              srclang: 'en',
              src: '/materials/social-engineering/part3/videos/subtitles/en/5.3.1.VideoSubtitles.Types_of_Social_Engineering_EN.vtt'
            },
            { label: 'Čeština',
              srclang: 'cs',
              src: '/materials/social-engineering/part3/videos/subtitles/cs/5.3.1.VideoSubtitles.Types_of_Social_Engineering_CS.vtt'
            },
            { label: 'Norsk',
              srclang: 'no',
              src: '/materials/social-engineering/part3/videos/subtitles/no/5.3.1.VideoSubtitles.Types_of_Social_Engineering_NO.vtt'
            },
            { label: 'Lietuvių',
              srclang: 'lt',
              src: '/materials/social-engineering/part3/videos/subtitles/lt/5.3.1.VideoSubtitles.Types_of_Social_Engineering_LT.vtt'
            },
            { label: 'Deutsch',
              srclang: 'de',
              src: '/materials/social-engineering/part3/videos/subtitles/de/5.3.1.VideoSubtitles.Types_of_Social_Engineering_DE.vtt'
            },
          ],
        },
      },
    },
    {
      anchorId: 'protecting-from-social-engineering',
      assets: {
        bundle: {
          languages: [
            { lang: 'en', href: '/materials/social-engineering/part4/part4-en.zip' },
            { lang: 'cs', href: '/materials/social-engineering/part4/part4-cs.zip' },
            { lang: 'no', href: '/materials/social-engineering/part4/part4-no.zip' },
            { lang: 'lt', href: '/materials/social-engineering/part4/part4-lt.zip' },
            { lang: 'de', href: '/materials/social-engineering/part4/part4-de.zip' },
          ],
        },
        materials: [
          // Image: Stop, Think, Check, Ask
          { id: '5.4.1',
            href: '/materials/social-engineering/part4/images/en/5.4.1.Image.Stop_think_check_ask.png',
          },
          // Worksheet: Stop, Think, Check, Ask
          { id: '5.4.2',
            href: '/materials/social-engineering/part4/worksheets/en/5.4.2.Worksheet.Stop_think_check_ask.docx',
            languages: [
              { lang: 'en', href: '/materials/social-engineering/part4/worksheets/en/5.4.2.Worksheet.Stop_think_check_ask.docx' },
              { lang: 'no', href: '/materials/social-engineering/part4/worksheets/no/5.4.2.Worksheet.Stop_think_check_ask_NO.docx' },
              { lang: 'lt', href: '/materials/social-engineering/part4/worksheets/lt/5.4.2.Worksheet.Stop_think_check_ask_LT.docx' },
            ],
          },
          // Scenario Cards: What Would You Do?
          { id: '5.4.3',
            href: '/materials/social-engineering/part4/cards/en/5.4.3.Scenario_cards.What_would_you_do.pdf',
          },
          // Role Cards: Prosocial Behaviour or Bystander Apathy
          { id: '5.4.4',
            href: '/materials/social-engineering/part4/cards/en/5.4.4.Role_cards.Prosocial_behaviour_or_bystander_apathy.pdf',
          },
          // Worksheet: Protecting Myself and Others
          { id: '5.4.5',
            href: '/materials/social-engineering/part4/worksheets/en/5.4.5.Worksheet.Protecting_myself_and_others.docx',
            languages: [
              { lang: 'en', href: '/materials/social-engineering/part4/worksheets/en/5.4.5.Worksheet.Protecting_myself_and_others.docx' },
              { lang: 'no', href: '/materials/social-engineering/part4/worksheets/no/5.4.5.Worksheet.Protecting_myself_and_others_NO.docx' },
              { lang: 'lt', href: '/materials/social-engineering/part4/worksheets/lt/5.4.5.Worksheet.Protecting_myself_and_others_LT.docx' },
            ],
          },
        ],
      },
    },
  ],

  // ── Malware ────────────────────────────────────────────────────────────────
  mw: [
    {
      anchorId: 'what-is-malware',
      assets: {
        bundle: {
          languages: [
            { lang: 'en', href: '/materials/malware/part1/part1-en.zip' },
            { lang: 'cs', href: '/materials/malware/part1/part1-cs.zip' },
            { lang: 'no', href: '/materials/malware/part1/part1-no.zip' },
            { lang: 'lt', href: '/materials/malware/part1/part1-lt.zip' },
            { lang: 'de', href: '/materials/malware/part1/part1-de.zip' },
          ],
        },
        // Materials with `languages` → "Download" shows a language dropdown;
        // without it (no translatable text) → plain "Download" button.
        materials: [
          // Image: Malicious + Software = Malware
          { id: '6.1.1',
            href: '/materials/malware/part1/images/6.1.1.Image.Malicious_software_malware.png',
          },
          // Image: What is Malicious?
          { id: '6.1.2',
            href: '/materials/malware/part1/images/en/6.1.2.Image.What_is_malicious.png',
            languages: [
              { lang: 'en', href: '/materials/malware/part1/images/en/6.1.2.Image.What_is_malicious.png' },
              { lang: 'cs', href: '/materials/malware/part1/images/cs/6.1.2.Image.What_is_malicious_CS.png' },
              { lang: 'no', href: '/materials/malware/part1/images/no/6.1.2.Image.What_is_malicious_NO.png' },
              { lang: 'lt', href: '/materials/malware/part1/images/lt/6.1.2.Image.What_is_malicious_LT.png' },
              { lang: 'de', href: '/materials/malware/part1/images/de/6.1.2.Image.What_is_malicious_DE.png' },
            ],
          },
          // Worksheet: Related to Malware or Not
          { id: '6.1.4',
            href: '/materials/malware/part1/worksheets/en/6.1.4.Worksheet.Related_to_malware_or_not.docx',
            languages: [
              { lang: 'en', href: '/materials/malware/part1/worksheets/en/6.1.4.Worksheet.Related_to_malware_or_not.docx' },
              { lang: 'no', href: '/materials/malware/part1/worksheets/no/6.1.4.Worksheet.Related_to_malware_or_not_NO.docx' },
              { lang: 'lt', href: '/materials/malware/part1/worksheets/lt/6.1.4.Worksheet.Related_to_malware_or_not_LT.docx' },
              { lang: 'de', href: '/materials/malware/part1/worksheets/de/6.1.4.Worksheet.Related_to_malware_or_not_DE.docx' },
            ],
          },
        ],
        featuredVideo: {
          // What is Malware?
          id: '6.1.3',
          posterSrc: '/images/learning-hub/video-posters/6.1.3_WhatIsMalware_video_thumbnail.webp',
          videoSrc: '/materials/malware/part1/videos/6.1.3.Video.What_is_Malware.mp4',
          downloads: {
            video:
            { href: '/materials/malware/part1/videos/6.1.3.Video.What_is_Malware.mp4'
            }
          },
          tracks: [
            { label: 'English',
              srclang: 'en',
              src: '/materials/malware/part1/videos/subtitles/en/6.1.3.VideoSubtitles.What_is_Malware_EN.vtt'
            },
            { label: 'Čeština',
              srclang: 'cs',
              src: '/materials/malware/part1/videos/subtitles/cs/6.1.3.VideoSubtitles.What_is_Malware_CS.vtt'
            },
            { label: 'Norsk',
              srclang: 'no',
              src: '/materials/malware/part1/videos/subtitles/no/6.1.3.VideoSubtitles.What_is_Malware_NO.vtt'
            },
            { label: 'Lietuvių',
              srclang: 'lt',
              src: '/materials/malware/part1/videos/subtitles/lt/6.1.3.VideoSubtitles.What_is_Malware_LT.vtt'
            },
            { label: 'Deutsch',
              srclang: 'de',
              src: '/materials/malware/part1/videos/subtitles/de/6.1.3.VideoSubtitles.What_is_Malware_DE.vtt'
            },
          ],
        },
      },
    },
    {
      anchorId: 'malware-types',
      assets: {
        bundle: {
          languages: [
            { lang: 'en', href: '/materials/malware/part2/part2-en.zip' },
            { lang: 'cs', href: '/materials/malware/part2/part2-cs.zip' },
            { lang: 'no', href: '/materials/malware/part2/part2-no.zip' },
            { lang: 'lt', href: '/materials/malware/part2/part2-lt.zip' },
            { lang: 'de', href: '/materials/malware/part2/part2-de.zip' },
          ],
        },
        materials: [
          // Schema: Set of Coins
          { id: '6.2.2',
            href: '/materials/malware/part2/schemas/6.2.2.Schema.Set_of_coins.pdf',
          },
          // Schema: Knot the Ties Board
          { id: '6.2.3',
            href: '/materials/malware/part2/schemas/6.2.3.Schema.Knot_Ties_board.pdf',
          },
        ],
        featuredVideo: {
          // Introducing Malware Types
          id: '6.2.1',
          posterSrc: '/images/learning-hub/video-posters/6.2.1_IntroducingMalwareTypes_video_thumbnail.webp',
          videoSrc: '/materials/malware/part2/videos/6.2.1.Video.Malware_Types.mp4',
          downloads: {
            video:
            { href: '/materials/malware/part2/videos/6.2.1.Video.Malware_Types.mp4'
            }
          },
          tracks: [
            { label: 'English',
              srclang: 'en',
              src: '/materials/malware/part2/videos/subtitles/en/6.2.1.VideoSubtitles.Malware_Types_EN.vtt'
            },
            { label: 'Čeština',
              srclang: 'cs',
              src: '/materials/malware/part2/videos/subtitles/cs/6.2.1.VideoSubtitles.Malware_Types_CS.vtt'
            },
            { label: 'Norsk',
              srclang: 'no',
              src: '/materials/malware/part2/videos/subtitles/no/6.2.1.VideoSubtitles.Malware_Types_NO.vtt'
            },
            { label: 'Lietuvių',
              srclang: 'lt',
              src: '/materials/malware/part2/videos/subtitles/lt/6.2.1.VideoSubtitles.Malware_Types_LT.vtt'
            },
            { label: 'Deutsch',
              srclang: 'de',
              src: '/materials/malware/part2/videos/subtitles/de/6.2.1.VideoSubtitles.Malware_Types_DE.vtt'
            },
          ],
        },
      },
    },
    {
      anchorId: 'recognising-malware',
      assets: {
        bundle: {
          languages: [
            { lang: 'en', href: '/materials/malware/part3/part3-en.zip' },
            { lang: 'cs', href: '/materials/malware/part3/part3-cs.zip' },
            { lang: 'no', href: '/materials/malware/part3/part3-no.zip' },
            { lang: 'lt', href: '/materials/malware/part3/part3-lt.zip' },
            { lang: 'de', href: '/materials/malware/part3/part3-de.zip' },
          ],
        },
        materials: [
          // Reading: Recognising Malware
          { id: '6.3.1',
            href: '/materials/malware/part3/readings/en/6.3.1.Reading.Recognising_malware.docx',
            languages: [
              { lang: 'en', href: '/materials/malware/part3/readings/en/6.3.1.Reading.Recognising_malware.docx' },
              { lang: 'no', href: '/materials/malware/part3/readings/no/6.3.1.Reading.Recognising_malware_NO.docx' },
              { lang: 'lt', href: '/materials/malware/part3/readings/lt/6.3.1.Reading.Recognising_malware_LT.docx' },
            ],
          },
          // Poster: Seven Indicators
          { id: '6.3.2',
            href: '/materials/malware/part3/posters/en/6.3.2.Poster.Seven_indicators.pdf',
            languages: [
              { lang: 'en', href: '/materials/malware/part3/posters/en/6.3.2.Poster.Seven_indicators.pdf' },
              { lang: 'cs', href: '/materials/malware/part3/posters/cs/6.3.2.Poster.Seven_indicators_CS.pdf' },
              { lang: 'no', href: '/materials/malware/part3/posters/no/6.3.2.Poster.Seven_indicators_NO.pdf' },
              { lang: 'lt', href: '/materials/malware/part3/posters/lt/6.3.2.Poster.Seven_indicators_LT.pdf' },
              { lang: 'de', href: '/materials/malware/part3/posters/de/6.3.2.Poster.Seven_indicators_DE.pdf' },
            ],
          },
          // Worksheet: List of Indicators
          { id: '6.3.3',
            href: '/materials/malware/part3/worksheets/en/6.3.3.Worksheet.List_of_indicators.docx',
            languages: [
              { lang: 'en', href: '/materials/malware/part3/worksheets/en/6.3.3.Worksheet.List_of_indicators.docx' },
              { lang: 'no', href: '/materials/malware/part3/worksheets/no/6.3.3.Worksheet.List_of_indicators_NO.docx' },
              { lang: 'lt', href: '/materials/malware/part3/worksheets/lt/6.3.3.Worksheet.List_of_indicators_LT.docx' },
            ],
          },
        ],
      },
    },
    {
      anchorId: 'protection-measures',
      assets: {
        bundle: {
          languages: [
            { lang: 'en', href: '/materials/malware/part4/part4-en.zip' },
            { lang: 'cs', href: '/materials/malware/part4/part4-cs.zip' },
            { lang: 'no', href: '/materials/malware/part4/part4-no.zip' },
            { lang: 'lt', href: '/materials/malware/part4/part4-lt.zip' },
            { lang: 'de', href: '/materials/malware/part4/part4-de.zip' },
          ],
        },
        materials: [
          // Situation: Malware and Data Theft
          { id: '6.4.1',
            href: '/materials/malware/part4/situations/en/6.4.1.Situation.Malware_and_data_theft.docx',
            languages: [
              { lang: 'en', href: '/materials/malware/part4/situations/en/6.4.1.Situation.Malware_and_data_theft.docx' },
              { lang: 'no', href: '/materials/malware/part4/situations/no/6.4.1.Situation.Malware_and_data_theft_NO.docx' },
              { lang: 'lt', href: '/materials/malware/part4/situations/lt/6.4.1.Situation.Malware_and_data_theft_LT.docx' },
            ],
          },
          // Poster: DOs and DON'Ts
          { id: '6.4.2',
            href: '/materials/malware/part4/posters/en/6.4.2.Poster.Dos_and_Donts.pdf',
            languages: [
              { lang: 'en', href: '/materials/malware/part4/posters/en/6.4.2.Poster.Dos_and_Donts.pdf' },
              { lang: 'cs', href: '/materials/malware/part4/posters/cs/6.4.2.Poster.Dos_and_Donts_CS.pdf' },
              { lang: 'no', href: '/materials/malware/part4/posters/no/6.4.2.Poster.Dos_and_Donts_NO.pdf' },
              { lang: 'lt', href: '/materials/malware/part4/posters/lt/6.4.2.Poster.Dos_and_Donts_LT.pdf' },
              { lang: 'de', href: '/materials/malware/part4/posters/de/6.4.2.Poster.Dos_and_Donts_DE.pdf' },
            ],
          },
          // Images: Associative Pictures: Be Aware
          { id: '6.4.3',
            href: '/materials/malware/part4/images/6.4.3.Images.Associative_pictures_Be_aware.pdf',
          },
          // Worksheet: A Shield Against Malware
          { id: '6.4.4',
            href: '/materials/malware/part4/worksheets/en/6.4.4.Worksheet.A_shield_against_malware.pdf',
            languages: [
              { lang: 'en', href: '/materials/malware/part4/worksheets/en/6.4.4.Worksheet.A_shield_against_malware.pdf' },
              { lang: 'cs', href: '/materials/malware/part4/worksheets/cs/6.4.4.Worksheet.A_shield_against_malware_CS.pdf' },
              { lang: 'no', href: '/materials/malware/part4/worksheets/no/6.4.4.Worksheet.A_shield_against_malware_NO.pdf' },
              { lang: 'lt', href: '/materials/malware/part4/worksheets/lt/6.4.4.Worksheet.A_shield_against_malware_LT.pdf' },
              { lang: 'de', href: '/materials/malware/part4/worksheets/de/6.4.4.Worksheet.A_shield_against_malware_DE.pdf' },
            ],
          },
        ],
      },
    },
  ],

  // ── Digital Misuse ──────────────────────────────────────────────────────────
  dm: [
    {
      anchorId: 'misinformation',
      assets: {
        bundle: {
          languages: [
            { lang: 'en', href: '/materials/digital-misuse/part1/part1-en.zip' },
            { lang: 'cs', href: '/materials/digital-misuse/part1/part1-cs.zip' },
            { lang: 'no', href: '/materials/digital-misuse/part1/part1-no.zip' },
            { lang: 'lt', href: '/materials/digital-misuse/part1/part1-lt.zip' },
            { lang: 'de', href: '/materials/digital-misuse/part1/part1-de.zip' },
          ],
        },
        // Materials with `languages` → "Download" shows a language dropdown;
        // without it (no translatable text) → plain "Download" button.
        materials: [
          // Game Cards: Truth Detectives
          { id: '7.1.2',
            href: '/materials/digital-misuse/part1/games/en/7.1.2.Game_cards.What_is_misinformation.pdf',
            languages: [
              { lang: 'en', href: '/materials/digital-misuse/part1/games/en/7.1.2.Game_cards.What_is_misinformation.pdf' },
              { lang: 'de', href: '/materials/digital-misuse/part1/games/de/7.1.2.Game_cards.What_is_misinformation_DE.pdf' },
            ],
          },
          // Image: The Cinnamon Challenge
          { id: '7.1.3',
            href: '/materials/digital-misuse/part1/images/7.1.3.Image.Cinnamon_challenge.png',
          },
        ],
        featuredVideo: {
          // What is Misinformation?
          id: '7.1.1',
          posterSrc: '/images/learning-hub/video-posters/7.1.1_WhatIsMisinformation_video_thumbnail.webp',
          videoSrc: '/materials/digital-misuse/part1/videos/7.1.1.Video.Misinformation.mp4',
          downloads: {
            video:
            { href: '/materials/digital-misuse/part1/videos/7.1.1.Video.Misinformation.mp4'
            }
          },
          tracks: [
            { label: 'English',
              srclang: 'en',
              src: '/materials/digital-misuse/part1/videos/subtitles/en/7.1.1.VideoSubtitles.Misinformation_EN.vtt'
            },
            { label: 'Čeština',
              srclang: 'cs',
              src: '/materials/digital-misuse/part1/videos/subtitles/cs/7.1.1.VideoSubtitles.Misinformation_CS.vtt'
            },
            { label: 'Norsk',
              srclang: 'no',
              src: '/materials/digital-misuse/part1/videos/subtitles/no/7.1.1.VideoSubtitles.Misinformation_NO.vtt'
            },
            { label: 'Lietuvių',
              srclang: 'lt',
              src: '/materials/digital-misuse/part1/videos/subtitles/lt/7.1.1.VideoSubtitles.Misinformation_LT.vtt'
            },
            { label: 'Deutsch',
              srclang: 'de',
              src: '/materials/digital-misuse/part1/videos/subtitles/de/7.1.1.VideoSubtitles.Misinformation_DE.vtt'
            },
          ],
        },
      },
    },
    {
      anchorId: 'disinformation',
      assets: {
        bundle: {
          languages: [
            { lang: 'en', href: '/materials/digital-misuse/part2/part2-en.zip' },
            { lang: 'cs', href: '/materials/digital-misuse/part2/part2-cs.zip' },
            { lang: 'no', href: '/materials/digital-misuse/part2/part2-no.zip' },
            { lang: 'lt', href: '/materials/digital-misuse/part2/part2-lt.zip' },
            { lang: 'de', href: '/materials/digital-misuse/part2/part2-de.zip' },
          ],
        },
        materials: [
          // Worksheet: Newspaper Template “Sharing News”
          { id: '7.2.2',
            href: '/materials/digital-misuse/part2/worksheets/7.2.2.Worksheet.Newspaper_template_Sharing_news.pdf',
          },
          // Image: Social Media Algorithms
          { id: '7.2.3',
            href: '/materials/digital-misuse/part2/images/7.2.3.Image.Social_media_algorithms.png',
          },
        ],
        featuredVideo: {
          // What is Disinformation?
          id: '7.2.1',
          posterSrc: '/images/learning-hub/video-posters/7.2.1_WhatIsDisinformation_video_thumbnail.webp',
          videoSrc: '/materials/digital-misuse/part2/videos/7.2.1.Video.Disinformation.mp4',
          downloads: {
            video:
            { href: '/materials/digital-misuse/part2/videos/7.2.1.Video.Disinformation.mp4'
            }
          },
          tracks: [
            { label: 'English',
              srclang: 'en',
              src: '/materials/digital-misuse/part2/videos/subtitles/en/7.2.1.VideoSubtitles.Disinformation_EN.vtt'
            },
            { label: 'Čeština',
              srclang: 'cs',
              src: '/materials/digital-misuse/part2/videos/subtitles/cs/7.2.1.VideoSubtitles.Disinformation_CS.vtt'
            },
            { label: 'Norsk',
              srclang: 'no',
              src: '/materials/digital-misuse/part2/videos/subtitles/no/7.2.1.VideoSubtitles.Disinformation_NO.vtt'
            },
            { label: 'Lietuvių',
              srclang: 'lt',
              src: '/materials/digital-misuse/part2/videos/subtitles/lt/7.2.1.VideoSubtitles.Disinformation_LT.vtt'
            },
            { label: 'Deutsch',
              srclang: 'de',
              src: '/materials/digital-misuse/part2/videos/subtitles/de/7.2.1.VideoSubtitles.Disinformation_DE.vtt'
            },
          ],
        },
      },
    },
    {
      anchorId: 'cyberbullying',
      assets: {
        bundle: {
          languages: [
            { lang: 'en', href: '/materials/digital-misuse/part3/part3-en.zip' },
            { lang: 'cs', href: '/materials/digital-misuse/part3/part3-cs.zip' },
            { lang: 'no', href: '/materials/digital-misuse/part3/part3-no.zip' },
            { lang: 'lt', href: '/materials/digital-misuse/part3/part3-lt.zip' },
            { lang: 'de', href: '/materials/digital-misuse/part3/part3-de.zip' },
          ],
        },
        materials: [
          // Scenario Cards: Act it Out!
          { id: '7.3.1',
            href: '/materials/digital-misuse/part3/cards/en/7.3.1.Scenario_cards.Act_it_out.pdf',
          },
          // Scenario Cards: Is it Just Bad Manners?
          { id: '7.3.3',
            href: '/materials/digital-misuse/part3/cards/en/7.3.3.Scenario_cards.Is_it_just_bad_manners.pdf',
          },
        ],
        featuredVideo: {
          // What is Cyber Bullying?
          id: '7.3.2',
          posterSrc: '/images/learning-hub/video-posters/7.3.2_WhatIsCyberbullying_video_thumbnail.webp',
          videoSrc: '/materials/digital-misuse/part3/videos/7.3.2.Video.Cyber_Bullying.mp4',
          downloads: {
            video:
            { href: '/materials/digital-misuse/part3/videos/7.3.2.Video.Cyber_Bullying.mp4'
            }
          },
          tracks: [
            { label: 'English',
              srclang: 'en',
              src: '/materials/digital-misuse/part3/videos/subtitles/en/7.3.2.VideoSubtitles.Cyber_Bullying_EN.vtt'
            },
            { label: 'Čeština',
              srclang: 'cs',
              src: '/materials/digital-misuse/part3/videos/subtitles/cs/7.3.2.VideoSubtitles.Cyber_Bullying_CS.vtt'
            },
            { label: 'Norsk',
              srclang: 'no',
              src: '/materials/digital-misuse/part3/videos/subtitles/no/7.3.2.VideoSubtitles.Cyber_Bullying_NO.vtt'
            },
            { label: 'Lietuvių',
              srclang: 'lt',
              src: '/materials/digital-misuse/part3/videos/subtitles/lt/7.3.2.VideoSubtitles.Cyber_Bullying_LT.vtt'
            },
            { label: 'Deutsch',
              srclang: 'de',
              src: '/materials/digital-misuse/part3/videos/subtitles/de/7.3.2.VideoSubtitles.Cyber_Bullying_DE.vtt'
            },
          ],
        },
      },
    },
    {
      anchorId: 'stranger-danger',
      assets: {
        bundle: {
          languages: [
            { lang: 'en', href: '/materials/digital-misuse/part4/part4-en.zip' },
            { lang: 'cs', href: '/materials/digital-misuse/part4/part4-cs.zip' },
            { lang: 'no', href: '/materials/digital-misuse/part4/part4-no.zip' },
            { lang: 'lt', href: '/materials/digital-misuse/part4/part4-lt.zip' },
            { lang: 'de', href: '/materials/digital-misuse/part4/part4-de.zip' },
          ],
        },
        materials: [
          // Poster: Stranger Danger
          { id: '7.4.1',
            href: '/materials/digital-misuse/part4/posters/en/7.4.1.Poster.Stranger_danger.pdf',
            languages: [
              { lang: 'en', href: '/materials/digital-misuse/part4/posters/en/7.4.1.Poster.Stranger_danger.pdf' },
              { lang: 'cs', href: '/materials/digital-misuse/part4/posters/cs/7.4.1.Poster.Stranger_danger_CS.pdf' },
              { lang: 'no', href: '/materials/digital-misuse/part4/posters/no/7.4.1.Poster.Stranger_danger_NO.pdf' },
              { lang: 'lt', href: '/materials/digital-misuse/part4/posters/lt/7.4.1.Poster.Stranger_danger_LT.pdf' },
              { lang: 'de', href: '/materials/digital-misuse/part4/posters/de/7.4.1.Poster.Stranger_danger_DE.pdf' },
            ],
          },
          // Scenario Cards: Real or Fake? The Profile Detective Game
          { id: '7.4.2',
            href: '/materials/digital-misuse/part4/cards/7.4.2.Scenario_cards.Real_or_fake_The_profile_detective_game.pdf',
          },
          // Worksheet: Stranger Danger Champion
          { id: '7.4.3',
            href: '/materials/digital-misuse/part4/worksheets/en/7.4.3.Worksheet.Stranger_Danger_Champion.docx',
            languages: [
              { lang: 'en', href: '/materials/digital-misuse/part4/worksheets/en/7.4.3.Worksheet.Stranger_Danger_Champion.docx' },
              { lang: 'no', href: '/materials/digital-misuse/part4/worksheets/no/7.4.3.Worksheet.Stranger_Danger_Champion_NO.docx' },
              { lang: 'lt', href: '/materials/digital-misuse/part4/worksheets/lt/7.4.3.Worksheet.Stranger_Danger_Champion_LT.docx' },
            ],
          },
        ],
      },
    },
    {
      anchorId: 'influencers',
      assets: {
        bundle: {
          languages: [
            { lang: 'en', href: '/materials/digital-misuse/part5/part5-en.zip' },
            { lang: 'cs', href: '/materials/digital-misuse/part5/part5-cs.zip' },
            { lang: 'no', href: '/materials/digital-misuse/part5/part5-no.zip' },
            { lang: 'lt', href: '/materials/digital-misuse/part5/part5-lt.zip' },
            { lang: 'de', href: '/materials/digital-misuse/part5/part5-de.zip' },
          ],
        },
        materials: [
          // Scenario Cards: Influencer Posts
          { id: '7.5.2',
            href: '/materials/digital-misuse/part5/cards/en/7.5.2.Scenario_cards.Influencer_posts.pdf',
          },
        ],
        featuredVideo: {
          // Social Media Influencers
          id: '7.5.1',
          posterSrc: '/images/learning-hub/video-posters/7.5.1_SocialMediaInfluencers_video_thumbnail.webp',
          videoSrc: '/materials/digital-misuse/part5/videos/7.5.1.Video.Influencers.mp4',
          downloads: {
            video:
            { href: '/materials/digital-misuse/part5/videos/7.5.1.Video.Influencers.mp4'
            }
          },
          tracks: [
            { label: 'English',
              srclang: 'en',
              src: '/materials/digital-misuse/part5/videos/subtitles/en/7.5.1.VideoSubtitles.Influencers_EN.vtt'
            },
            { label: 'Čeština',
              srclang: 'cs',
              src: '/materials/digital-misuse/part5/videos/subtitles/cs/7.5.1.VideoSubtitles.Influencers_CS.vtt'
            },
            { label: 'Norsk',
              srclang: 'no',
              src: '/materials/digital-misuse/part5/videos/subtitles/no/7.5.1.VideoSubtitles.Influencers_NO.vtt'
            },
            { label: 'Lietuvių',
              srclang: 'lt',
              src: '/materials/digital-misuse/part5/videos/subtitles/lt/7.5.1.VideoSubtitles.Influencers_LT.vtt'
            },
            { label: 'Deutsch',
              srclang: 'de',
              src: '/materials/digital-misuse/part5/videos/subtitles/de/7.5.1.VideoSubtitles.Influencers_DE.vtt'
            },
          ],
        },
      },
    },
    {
      anchorId: 'deal-with-digital-misusers',
      assets: {
        bundle: {
          languages: [
            { lang: 'en', href: '/materials/digital-misuse/part6/part6-en.zip' },
            { lang: 'cs', href: '/materials/digital-misuse/part6/part6-cs.zip' },
            { lang: 'no', href: '/materials/digital-misuse/part6/part6-no.zip' },
            { lang: 'lt', href: '/materials/digital-misuse/part6/part6-lt.zip' },
            { lang: 'de', href: '/materials/digital-misuse/part6/part6-de.zip' },
          ],
        },
        materials: [
          // Worksheet: Digital Superhero
          { id: '7.6.1',
            href: '/materials/digital-misuse/part6/worksheets/en/7.6.1.Worksheet.Digital_superhero.docx',
            languages: [
              { lang: 'en', href: '/materials/digital-misuse/part6/worksheets/en/7.6.1.Worksheet.Digital_superhero.docx' },
              { lang: 'no', href: '/materials/digital-misuse/part6/worksheets/no/7.6.1.Worksheet.Digital_superhero_NO.docx' },
              { lang: 'lt', href: '/materials/digital-misuse/part6/worksheets/lt/7.6.1.Worksheet.Digital_superhero_LT.docx' },
            ],
          },
          // Worksheet: CyberDoku - Solving the Mystery
          { id: '7.6.2',
            href: '/materials/digital-misuse/part6/worksheets/en/7.6.2.Worksheet.CyberDoku_Solving_the_mystery.docx',
            languages: [
              { lang: 'en', href: '/materials/digital-misuse/part6/worksheets/en/7.6.2.Worksheet.CyberDoku_Solving_the_mystery.docx' },
              { lang: 'no', href: '/materials/digital-misuse/part6/worksheets/no/7.6.2.Worksheet.CyberDoku_Solving_the_mystery_NO.docx' },
              { lang: 'lt', href: '/materials/digital-misuse/part6/worksheets/lt/7.6.2.Worksheet.CyberDoku_Solving_the_mystery_LT.docx' },
            ],
          },
          // Image: CyberDoku - The Map of the Area
          { id: '7.6.3',
            href: '/materials/digital-misuse/part6/images/7.6.3.Image.CyberDoku_the_map_of_the_area.png',
          },
        ],
      },
    },
  ],
}

// ── Count helpers (derived from modulePartsData) ──────────────────────────────

export function getModuleMaterialCount(id: ModuleId): number {
  return (modulePartsData[id] ?? []).reduce(
    (sum, p) => sum + (p.assets?.materials?.filter(m => m.href !== '' && !m.isGuide).length ?? 0),
    0
  )
}

export function getModuleVideoCount(id: ModuleId): number {
  return (modulePartsData[id] ?? []).filter(
    p => !!p.assets?.featuredVideo?.videoSrc
  ).length
}
