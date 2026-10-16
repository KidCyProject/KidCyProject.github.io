# Codebase Guide

## Project Overview

**KidCy / Wise Web Wanderers** — an Astro-based multilingual e-learning platform teaching cybersecurity to upper-elementary students. Built on the [Accessible Astro Starter](https://accessible-astro.netlify.app/) template; strong WCAG accessibility focus throughout.

Stack: **Astro 6**, **TypeScript**, **Tailwind CSS v4**, **SCSS**, **Zod** (runtime validation), **astro-icon** (Lucide icons), **jszip** (download bundles).

---

## Directory Structure

```
src/
├── assets/scss/          # Global SCSS — reset, fonts, buttons, dark mode, module color vars
│   └── base/
│       ├── _root.scss    # CSS custom properties (brand colors, spacing, elevation)
│       ├── _modules.scss # Per-module brand color overrides (--brand-DC, --brand-AT, …)
│       ├── _challenge.scss # Shared look of the seven interactive challenges (cards, buttons, meters, result cards)
│       ├── _dark.scss    # Dark mode token overrides
│       └── …
├── components/           # Reusable Astro components
├── data/                 # Module registry, part/asset data, challenge mechanics (challenge<XX>.ts), games
├── i18n/                 # Translation system
├── layouts/              # Page shell (DefaultLayout)
├── pages/                # File-system routes
│   ├── index.astro       # Home page
│   ├── about.astro       # About page
│   ├── 404.astro         # Custom 404
│   ├── learning-hub/     # Module content, challenge, and game pages (English default)
│   ├── cs/[...slug].astro  # Czech locale wrapper
│   ├── de/[...slug].astro  # German locale wrapper
│   ├── lt/[...slug].astro  # Lithuanian locale wrapper
│   └── no/[...slug].astro  # Norwegian locale wrapper
├── styles/tailwind.css   # Tailwind entry point
└── utils/navigation.ts   # Navigation keyboard/ARIA interaction logic
```

---

## i18n System

### Locales
`src/i18n/i18n.ts` — `DEFAULT_LOCALE = 'en'`, `SUPPORTED_LOCALES = ['en', 'cs', 'de', 'lt', 'no']`.

### Translation files
`src/i18n/translations/<locale>/`
- `shared.ts` — all UI strings: nav, footer, hero, home, about, hub labels, module titles, content page labels, game page, 404.
- `contentDC.ts`, `contentAP.ts`, `contentAT.ts`, `contentDP.ts`, `contentSE.ts`, `contentMW.ts`, `contentDM.ts` — per-module content: aim, objectives, outcomes, parts (translatable text only — no file paths).
- `index.ts` — re-exports everything as a single namespace object.

### `useTranslations(locale)` — `src/i18n/index.ts`
Returns `{ t, v, locale, translations }`:
- `t(key)` — dot-path lookup, returns `string`. Falls back to English if key is missing in locale.
- `v<T>(key)` — same but returns `T | undefined` (used for arrays and nested objects).

Usage in every `.astro` page:
```ts
const { t, v } = useTranslations(Astro.currentLocale)
t('nav.home')                                     // → "Home"
v<string[]>('contentDC.objectives')              // → string[]
```

### Localized routing
Each non-English locale has a catch-all `pages/<locale>/[...slug].astro`. It calls `getLocalizedPageStaticPaths()` (from `src/i18n/localizedPages.ts`) to generate one route per English source page, then renders the same source component via `LocalizedPageRoute.astro`. Result: every English page is available at `/<locale>/<same-slug>` with no duplication of page source files.

`localizePath(locale, href)` — converts an internal `/path` to the locale-prefixed version. Use everywhere a link targets an internal page.

---

## Module Data System

### Module registry — `src/data/modules.ts`

Defines `modules: ModuleData[]` — one entry per learning module:

| ID | Slug | Color |
|----|------|-------|
| `dc` | `digital-citizenship` | `#22C55E` |
| `ap` | `attacker-perspective` | `#8850DF` |
| `at` | `authentication` | `#F59E0B` |
| `dp` | `data-privacy` | `#14B8A6` |
| `se` | `social-engineering` | `#D946EF` |
| `mw` | `malware` | `#93CC16` |
| `dm` | `digital-misuse` | `#EF4444` |

Each `ModuleData` holds: `id`, `slug`, `color`, `materials` (count), `videos` (count), `challenges` (0 or 1), `games` (0 or 1), `teachingGuide.languages` and `materialsPackage.languages` (one zip per language, shown as a language dropdown). `introMaterials.languages` holds the shared introductory-materials zips.

Counts are **derived automatically** from `modulePartsData` at build time — do not hard-code them.

### Part asset data — `src/data/moduleParts.ts`

`modulePartsData: Record<ModuleId, PartDefinition[]>` — the single source of truth for all file paths and structural data. Each `PartDefinition` has:
- `anchorId` — URL hash for deep-linking to a part (e.g. `digital-environments`).
- `assets.bundle.languages` — one ZIP per language for the whole part (`partN/partN-<lang>.zip`, built by `scripts/generate-zips.sh`).
- `assets.materials[]` — array of `{ id, href, isGuide?, languages? }` asset entries.
  - Material **without translatable text** (e.g. an image): set only `href` → the page shows a plain **Download** button.
  - Material **translated into several languages**: also add `languages: [{ lang: 'en', href }, { lang: 'cs', href }, …]` → **Download** opens a language dropdown (one option per entry, in the listed order; names come from `MATERIAL_LANGUAGE_LABELS`). Keep `href` pointing to a default file (it is used for the material counts). Example: `1.1.1` in Digital Citizenship.
- `assets.featuredVideo` — `{ id, posterSrc, videoSrc, downloads, tracks[] }`. `tracks[]` feeds both the video player captions and the Subtitles download dropdown (one entry per language). Both dropdowns share the behaviour in `src/utils/downloadMenu.ts`.

**Editors do not touch this file for text** — all displayed text comes from translation files.

### Game files, guides and videos — `src/data/games.ts`

Everything under the Play button of a `game.astro` page is rendered by `GameSupport.astro` (two columns, one on narrow screens): `GameDownload.astro` (left) and `GameResources.astro` (right).

| What | Where | Notes |
|------|-------|-------|
| Roblox place files | `public/materials/games-hub/experiences/` | `home.rbxl` = hub, plus `auth`, `data`, `social`, `malware`, `abuse`. Translations are inside each place → one file per game. Mapped to modules in `games.ts`. |
| Video walkthroughs | `public/materials/games-hub/videos/` | `Roblox-Home.mp4` (hub) and `<module slug>/Roblox-<Game>-<Intro\|MG<n>\|Hints\|Finale>.mp4`. Discovered from disk on every render — dropping a file in is enough. Keep them ~720p H.264 (GitHub: 100 MB/file, Pages: ~1 GB site). |
| Guides | `public/materials/introduction/<lang>/Roblox_<Developer\|Teacher\|Student>_Guide[_<LANG>].<pdf\|docx>` | English has no suffix. Only existing files are offered (language dropdown, or a plain button for one language; "Coming soon" when none). |

`scripts/generate-zips.sh` skips `games-hub`. Guides placed in `introduction/<lang>/` also end up in the introductory-materials zip (that is how the script treats every file in that folder).

### Merge function — `mergeParts(moduleId, translationParts)`

Called in each `content.astro` page. Combines `modulePartsData[moduleId]` (structural) with the locale's `contentXX.parts` array (text). Returns `MergedPart[]` ready for rendering.

Key behaviors:
- Activity plan steps are **auto-numbered** from array index.
- In `DEV` mode: warns if material counts mismatch between assets and translation, and validates translation shape via Zod.
- Video `tracks` (subtitle VTT paths) come from assets only — never from translation files.

### Challenge mechanics — `src/data/challenge<XX>.ts`

Each module's interactive challenge keeps its **language-neutral game rules** in one file named after the module code: `challengeDC.ts`, `challengeAP.ts`, `challengeAT.ts`, `challengeDP.ts`, `challengeSE.ts`, `challengeMW.ts`, `challengeDM.ts`.

| Module | File | Contains |
|---|---|---|
| `dc` | `challengeDC.ts` | Zones, 32 posts (16 dealt per game), ranking |
| `ap` | `challengeAP.ts` | Part 2 clue → goal key (8 clues), part 3 motive/defend questions and dealing, ranking |
| `at` | `challengeAT.ts` | Password Lab rules (`evaluatePassword`: length, personal clues, common words, number of words, similarity to earlier passwords) |
| `dp` | `challengeDP.ts` | 24 activities (15 dealt), 10 profile items (6 dealt), zones and actions |
| `se` | `challengeSE.ts` | 21 scenarios (12 dealt), best action, trick and goal |
| `mw` | `challengeMW.ts` | 7 levels, answer keys and dealing (35 cases per game) |
| `dm` | `challengeDM.ts` | Branching structure of the 14 stories (moods, stars, points; 2 are `sensitive`) |

The page is `src/pages/learning-hub/<slug>/challenge.astro`; all displayed text is in `src/i18n/translations/<locale>/content<XX>.ts` under `challenge<XX>` and is matched to the mechanics by `id` (Digital Misuse by position). Numbers repeated in text (e.g. the 4 weak spots in *In Hacker's Mind*, 7 malware levels) must be changed in all five locales together.

### Challenge pages — shared frame and look

All seven challenges (`attacker-perspective`, `authentication`, `social-engineering`, `malware`, `digital-misuse`, `digital-citizenship`, `data-privacy`) share one frame and one set of styles, so they look and behave alike on desktop, phone and in dark mode.

- **`src/components/ChallengeShell.astro`** renders the page heading, the "result saved" notice, the "How it works" block, the two columns (game on the left, side column on the right) and the "Need to talk to someone?" box. A page passes `ns` (translation namespace, e.g. `challengeMW`) and `brand` (module id, e.g. `MW`) and fills three slots: the default slot (the game), `side` (score, progress, hints) and optionally `after` (overlays; they must live inside the shell's section to get the colour tokens). Extra attributes such as `data-*` or `id` are passed on to the section, so each script keeps its own root element. Options: `sticky` (keep the side column in view), `sideFirst` (on phones the side column sits above or below the game), `layoutId` (id of the two-column block, e.g. for making the game `inert` while a dialog is open).
- **`src/assets/scss/base/_challenge.scss`** holds the shared building blocks, all prefixed `ch-` so they never collide with a page's own game classes: `ch-card`, `ch-btn` (`--primary`, `--secondary`, `--safe`, `--danger`, `--info`, `--block`), `ch-meter`, `ch-stat`, `ch-note`, `ch-panel`, `ch-badge`, `ch-feedback` (`--ok`, `--bad`, `--info`, `--warn`), `ch-result` and `ch-overlay`. Every colour is derived from the single `--ch-brand` token (set by the shell from `--brand-XX`), so changing a module's colour in `_root.scss` recolours its whole challenge. Light and dark values live in the same file, so a challenge page needs no dark-mode rules for these parts.
- **What stays in each page:** the game markup specific to that challenge (e.g. the mock social profile in AP, the drag-and-drop board in DC and DP), its script, and a small scoped `<style>` for the game-only parts. Keep the ids and `data-*` attributes the script reads when you restyle a page; scripts also toggle visibility through the `hidden` attribute or class, which the shared styles respect.
- Elements created by a page's script do not get Astro's scope class, so their styles need `:global(...)`; for the same reason, selectors on the shell's `<section>` use `:global([data-…])`.
- `_dark.scss` still contains older per-page dark rules (using `!important`) for the game boards that keep their own markup (DC/DP board and cleanup step, DM story endings, AP mock profile, AT/SE/MW details). New challenge UI should use the `ch-` classes instead of adding rules there.

### Zod schema — `src/data/moduleParts.schema.ts`

`TranslationPartSchema` validates each element of `contentXX.parts` in dev/build. Extra fields are stripped silently (strip mode). Used only for early error detection — does not block rendering.

---

## Content Pages Pattern

Every learning module has pages at `src/pages/learning-hub/<slug>/`:

| File | Purpose |
|------|---------|
| `content.astro` | Main module page: aim/objectives/outcomes tabs, expandable parts with materials/video/activity-plan tabs, related modules list |
| `challenge.astro` | Interactive challenge embed |
| `game.astro` | Roblox game link + instructions + `.rbxl` download block (`GameDownload.astro`) (optional — not all modules have this) |

All content pages follow the same structure:
1. `useTranslations(Astro.currentLocale)` to get `t` and `v`.
2. `v<TranslationPart[]>('contentXX.parts')` to get locale translation array.
3. `mergeParts('xx', translationParts)` to get `MergedPart[]`.
4. Render using `DefaultLayout` + `PageHeader`.

CSS classes in `content.astro` use the `dc-*` prefix namespace. Module brand color is applied via CSS custom property `var(--brand-DC)` (or `--brand-AT`, `--brand-DP`, etc.) defined in `_modules.scss`.

---

## Key Components

| Component | Description |
|-----------|-------------|
| `DefaultLayout.astro` | Root shell: `<html lang>`, CSP header, font preload, sticky footer via CSS grid, skip-link target `#main-content`. |
| `Header.astro` | Site header with navigation and language switcher. |
| `Navigation.astro` | Main nav markup; keyboard logic lives in `utils/navigation.ts`. |
| `LanguageSwitcher.astro` | Renders locale links using `localizePath` for each supported locale. |
| `Hero.astro` | Home page hero with floating robot image and CTA buttons. |
| `PageHeader.astro` | Module page header: title, subtitle, colored underline, optional download buttons. |
| `Footer.astro` | Site footer with navigation links and partner logos. |
| `SiteMeta.astro` | `<head>` SEO meta tags (title, description, OG, author). |
| `LocalizedPageRoute.astro` | Dynamically loads and renders an English source page component for localized catch-all routes. |

---

## Navigation Keyboard Logic — `src/utils/navigation.ts`

Extracted from the component for testability. `initializeNavigation()` must be called on `DOMContentLoaded` and on every `astro:page-load` (view transitions). Uses `data-nav-bound` guard to prevent duplicate listener registration.

`matchesMenuItem` supports four match strategies via `data-nav-match` attribute: `root`, `section`, `prefix`, `exact` (default).

---

## SCSS Architecture

`src/assets/scss/index.scss` imports all partials. Key partials:

| File | Contents |
|------|---------|
| `_root.scss` | CSS variables: colors, spacing scale (`--space-xs` … `--space-2xl`), elevation shadows, border radii |
| `_modules.scss` | `--brand-DC`, `--brand-AP`, `--brand-AT`, `--brand-DP`, `--brand-SE`, `--brand-MW`, `--brand-DM` color tokens used by module pages |
| `_challenge.scss` | Shared look of the interactive challenges: `ch-*` classes and the `--ch-*` tokens derived from the module colour, including their dark-mode values |
| `_dark.scss` | Dark mode surface/border/fg tokens (`--dm-surface-*`, `--dm-border-*`, `--dm-fg*`) |
| `_general.scss` | Base typography, container, section spacing |
| `_button.scss` | `.button`, `.has-icon`, `.is-outline` button styles |
| `_font.scss` | `@font-face` for Atkinson Hyperlegible Next (preloaded in DefaultLayout) |

Module page component styles (e.g. `.dc-*` classes in `content.astro`) live inline in each page's `<style>` block, not in the global SCSS.

---

## Adding a New Module

1. Add a `ModuleId` literal to the union in `src/data/modules.ts`.
2. Add a `ModuleData` entry to the `modules` array.
3. Add a `PartDefinition[]` array under the new ID in `modulePartsData` in `src/data/moduleParts.ts`.
4. Create `src/pages/learning-hub/<slug>/content.astro` (copy an existing one and change the module ID).
5. Optionally add `challenge.astro` (build it on `ChallengeShell` and the `ch-` classes, see *Challenge pages — shared frame and look*) and `game.astro`.
6. Add translation content files (`contentXX.ts`) in each locale folder, following the existing structure.
7. Export the new translation from each locale's `index.ts`.
8. Add a `--brand-XX` CSS variable in `_modules.scss`.

---

## Adding or Editing Translations

- **UI text** (nav, buttons, labels): edit `src/i18n/translations/<locale>/shared.ts`.
- **Module content** (aim, objectives, outcomes, parts text): edit `src/i18n/translations/<locale>/contentXX.ts`.
- **Part title keys** follow the pattern `hub.moduleParts.<id>.p<N>Title` and are resolved via `t(part.titleKey)` — add them to `shared.ts` under `hub.moduleParts`.
- **Never put file paths or asset hrefs in translation files** — those belong in `modulePartsData`.
- English (`en`) is the fallback — if a key is missing in another locale, `t()` returns the English value automatically.

---

## Public Assets Convention

```
public/
├── fonts/               # Woff2 fonts (Atkinson Hyperlegible Next)
├── images/              # UI images, module posters, video thumbnails
│   ├── index/           # Home page illustrations
│   └── learning-hub/    # Module poster images
├── materials/           # Downloadable teaching materials
│   ├── <module-slug>/                 # digital-citizenship, attacker-perspective, authentication,
│   │   │                              # data-privacy, social-engineering, malware, digital-misuse
│   │   ├── part<N>/
│   │   │   ├── <kind>/[<lang>/]<file> # kind = worksheets, cards, sorting-cards, games, images,
│   │   │   │                          # posters, readings, schemas, situations
│   │   │   └── videos/
│   │   │       ├── <id>.Video.<Title>.mp4
│   │   │       └── subtitles/<lang>/<id>.VideoSubtitles.<Title>_<LANG>.vtt
│   │   └── teaching-guide/<lang>/<ModuleName>_Teaching[_<LANG>].docx
│   ├── introduction/<lang>/           # introductory materials, Roblox guides
│   └── games-hub/                     # Roblox place files and video walkthroughs
└── placeholder.txt / placeholder.vtt   # Used for not-yet-available assets
```

ZIP packages (`part<N>-<lang>.zip`, `teaching-guide-<lang>.zip`, `<module>-<lang>.zip`, `introduction-<lang>.zip`) are **not committed**: `scripts/generate-zips.sh` builds them at deploy time from the folder contents, so a stale file left in a folder ends up in the downloads.

### Material naming

```
<module>.<part>.<number>[a|b].<Type>.<Title_with_underscores>[_<LANG>].<ext>
e.g.  2.2.1.Scenario_cards.Identify_the_behaviour_CS.pdf
```

- IDs follow `<moduleNum>.<partNum>.<assetNum>` (e.g. `1.1.2`, `3.4.5`). An `a`/`b` suffix marks two related files sharing one topic (e.g. `5.1.3a` single image, `5.1.3b` set of images).
- `Type`: `Worksheet`, `Image` (single image), `Images` (set of images), `Scenario_cards`, `Solution_cards`, `Role_cards`, `Sorting_cards`, `Game_cards`, `Game_set`, `Cards`, `Schema`, `Poster`, `Reading`, `Situation`, `Video`, `VideoSubtitles`. The displayed type label (`kind` in the translation files) must agree with it — `Image` vs `Images` in particular.
- English has no language suffix; other languages end in `_CS`, `_NO`, `_LT`, `_DE`. A material with no translated versions sits directly in its kind folder; translated ones sit in one folder per language.
- Every material needs an entry in `modulePartsData` (`src/data/moduleParts.ts`) and a matching text entry (`// ID: x.y.z`) in all five locale files, in the same order.
