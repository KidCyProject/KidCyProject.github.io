import { getModuleMaterialCount, getModuleVideoCount, modulePartsData } from './moduleParts'
import type { LanguagePackage } from './moduleParts'

const challengePages = import.meta.glob('../pages/learning-hub/*/challenge.astro')
const gamePages = import.meta.glob('../pages/learning-hub/*/game.astro')

function hasChallengeFile(slug: string): boolean {
  return Object.keys(challengePages).some(k => k.includes(`/${slug}/`))
}

function hasGameFile(slug: string): boolean {
  return Object.keys(gamePages).some(k => k.includes(`/${slug}/`))
}

export type ModuleId = 'dc' | 'ap' | 'at' | 'dp' | 'se' | 'mw' | 'dm'

/** Teaching guide package, one zip per language. */
export type TeachingGuideAsset = LanguagePackage

export interface ModuleData {
  id: ModuleId
  slug: string
  color: string
  materials: number
  videos: number
  challenges: number
  games: number
  teachingGuide: TeachingGuideAsset
  /** "Download All Materials" package, one zip per language. */
  materialsPackage: LanguagePackage
}

export const modules: ModuleData[] = [
  {
    id: 'dc',
    slug: 'digital-citizenship',
    color: '#22C55E',
    materials: getModuleMaterialCount('dc'),
    videos: getModuleVideoCount('dc'),
    challenges: hasChallengeFile('digital-citizenship') ? 1 : 0,
    games: hasGameFile('digital-citizenship') ? 1 : 0,
    teachingGuide: {
      languages: [
        { lang: 'en', href: '/materials/digital-citizenship/teaching-guide/teaching-guide-en.zip' },
        { lang: 'cs', href: '/materials/digital-citizenship/teaching-guide/teaching-guide-cs.zip' },
        { lang: 'no', href: '/materials/digital-citizenship/teaching-guide/teaching-guide-no.zip' },
        { lang: 'lt', href: '/materials/digital-citizenship/teaching-guide/teaching-guide-lt.zip' },
        { lang: 'de', href: '/materials/digital-citizenship/teaching-guide/teaching-guide-de.zip' },
      ],
    },
    materialsPackage: {
      languages: [
        { lang: 'en', href: '/materials/digital-citizenship/digital-citizenship-en.zip' },
        { lang: 'cs', href: '/materials/digital-citizenship/digital-citizenship-cs.zip' },
        { lang: 'no', href: '/materials/digital-citizenship/digital-citizenship-no.zip' },
        { lang: 'lt', href: '/materials/digital-citizenship/digital-citizenship-lt.zip' },
        { lang: 'de', href: '/materials/digital-citizenship/digital-citizenship-de.zip' },
      ],
    },
  },
  {
    id: 'ap',
    slug: 'attacker-perspective',
    color: '#8850DF',
    materials: getModuleMaterialCount('ap'),
    videos: getModuleVideoCount('ap'),
    challenges: hasChallengeFile('attacker-perspective') ? 1 : 0,
    games: hasGameFile('attacker-perspective') ? 1 : 0,
    teachingGuide: {
      languages: [
        { lang: 'en', href: '/materials/attacker-perspective/teaching-guide/teaching-guide-en.zip' },
        { lang: 'cs', href: '/materials/attacker-perspective/teaching-guide/teaching-guide-cs.zip' },
        { lang: 'no', href: '/materials/attacker-perspective/teaching-guide/teaching-guide-no.zip' },
        { lang: 'lt', href: '/materials/attacker-perspective/teaching-guide/teaching-guide-lt.zip' },
        { lang: 'de', href: '/materials/attacker-perspective/teaching-guide/teaching-guide-de.zip' },
      ],
    },
    materialsPackage: {
      languages: [
        { lang: 'en', href: '/materials/attacker-perspective/attacker-perspective-en.zip' },
        { lang: 'cs', href: '/materials/attacker-perspective/attacker-perspective-cs.zip' },
        { lang: 'no', href: '/materials/attacker-perspective/attacker-perspective-no.zip' },
        { lang: 'lt', href: '/materials/attacker-perspective/attacker-perspective-lt.zip' },
        { lang: 'de', href: '/materials/attacker-perspective/attacker-perspective-de.zip' },
      ],
    },
  },
  {
    id: 'at',
    slug: 'authentication',
    color: '#F59E0B',
    materials: getModuleMaterialCount('at'),
    videos: getModuleVideoCount('at'),
    challenges: hasChallengeFile('authentication') ? 1 : 0,
    games: hasGameFile('authentication') ? 1 : 0,
    teachingGuide: {
      languages: [
        { lang: 'en', href: '/materials/authentication/teaching-guide/teaching-guide-en.zip' },
        { lang: 'cs', href: '/materials/authentication/teaching-guide/teaching-guide-cs.zip' },
        { lang: 'no', href: '/materials/authentication/teaching-guide/teaching-guide-no.zip' },
        { lang: 'lt', href: '/materials/authentication/teaching-guide/teaching-guide-lt.zip' },
        { lang: 'de', href: '/materials/authentication/teaching-guide/teaching-guide-de.zip' },
      ],
    },
    materialsPackage: {
      languages: [
        { lang: 'en', href: '/materials/authentication/authentication-en.zip' },
        { lang: 'cs', href: '/materials/authentication/authentication-cs.zip' },
        { lang: 'no', href: '/materials/authentication/authentication-no.zip' },
        { lang: 'lt', href: '/materials/authentication/authentication-lt.zip' },
        { lang: 'de', href: '/materials/authentication/authentication-de.zip' },
      ],
    },
  },
  {
    id: 'dp',
    slug: 'data-privacy',
    color: '#14B8A6',
    materials: getModuleMaterialCount('dp'),
    videos: getModuleVideoCount('dp'),
    challenges: hasChallengeFile('data-privacy') ? 1 : 0,
    games: hasGameFile('data-privacy') ? 1 : 0,
    teachingGuide: {
      languages: [
        { lang: 'en', href: '/materials/data-privacy/teaching-guide/teaching-guide-en.zip' },
        { lang: 'cs', href: '/materials/data-privacy/teaching-guide/teaching-guide-cs.zip' },
        { lang: 'no', href: '/materials/data-privacy/teaching-guide/teaching-guide-no.zip' },
        { lang: 'lt', href: '/materials/data-privacy/teaching-guide/teaching-guide-lt.zip' },
        { lang: 'de', href: '/materials/data-privacy/teaching-guide/teaching-guide-de.zip' },
      ],
    },
    materialsPackage: {
      languages: [
        { lang: 'en', href: '/materials/data-privacy/data-privacy-en.zip' },
        { lang: 'cs', href: '/materials/data-privacy/data-privacy-cs.zip' },
        { lang: 'no', href: '/materials/data-privacy/data-privacy-no.zip' },
        { lang: 'lt', href: '/materials/data-privacy/data-privacy-lt.zip' },
        { lang: 'de', href: '/materials/data-privacy/data-privacy-de.zip' },
      ],
    },
  },
  {
    id: 'se',
    slug: 'social-engineering',
    color: '#D946EF',
    materials: getModuleMaterialCount('se'),
    videos: getModuleVideoCount('se'),
    challenges: hasChallengeFile('social-engineering') ? 1 : 0,
    games: hasGameFile('social-engineering') ? 1 : 0,
    teachingGuide: {
      languages: [
        { lang: 'en', href: '/materials/social-engineering/teaching-guide/teaching-guide-en.zip' },
        { lang: 'cs', href: '/materials/social-engineering/teaching-guide/teaching-guide-cs.zip' },
        { lang: 'no', href: '/materials/social-engineering/teaching-guide/teaching-guide-no.zip' },
        { lang: 'lt', href: '/materials/social-engineering/teaching-guide/teaching-guide-lt.zip' },
        { lang: 'de', href: '/materials/social-engineering/teaching-guide/teaching-guide-de.zip' },
      ],
    },
    materialsPackage: {
      languages: [
        { lang: 'en', href: '/materials/social-engineering/social-engineering-en.zip' },
        { lang: 'cs', href: '/materials/social-engineering/social-engineering-cs.zip' },
        { lang: 'no', href: '/materials/social-engineering/social-engineering-no.zip' },
        { lang: 'lt', href: '/materials/social-engineering/social-engineering-lt.zip' },
        { lang: 'de', href: '/materials/social-engineering/social-engineering-de.zip' },
      ],
    },
  },
  {
    id: 'mw',
    slug: 'malware',
    color: '#93CC16',
    materials: getModuleMaterialCount('mw'),
    videos: getModuleVideoCount('mw'),
    challenges: hasChallengeFile('malware') ? 1 : 0,
    games: hasGameFile('malware') ? 1 : 0,
    teachingGuide: {
      languages: [
        { lang: 'en', href: '/materials/malware/teaching-guide/teaching-guide-en.zip' },
        { lang: 'cs', href: '/materials/malware/teaching-guide/teaching-guide-cs.zip' },
        { lang: 'no', href: '/materials/malware/teaching-guide/teaching-guide-no.zip' },
        { lang: 'lt', href: '/materials/malware/teaching-guide/teaching-guide-lt.zip' },
        { lang: 'de', href: '/materials/malware/teaching-guide/teaching-guide-de.zip' },
      ],
    },
    materialsPackage: {
      languages: [
        { lang: 'en', href: '/materials/malware/malware-en.zip' },
        { lang: 'cs', href: '/materials/malware/malware-cs.zip' },
        { lang: 'no', href: '/materials/malware/malware-no.zip' },
        { lang: 'lt', href: '/materials/malware/malware-lt.zip' },
        { lang: 'de', href: '/materials/malware/malware-de.zip' },
      ],
    },
  },
  {
    id: 'dm',
    slug: 'digital-misuse',
    color: '#EF4444',
    materials: getModuleMaterialCount('dm'),
    videos: getModuleVideoCount('dm'),
    challenges: hasChallengeFile('digital-misuse') ? 1 : 0,
    games: hasGameFile('digital-misuse') ? 1 : 0,
    teachingGuide: {
      languages: [
        { lang: 'en', href: '/materials/digital-misuse/teaching-guide/teaching-guide-en.zip' },
        { lang: 'cs', href: '/materials/digital-misuse/teaching-guide/teaching-guide-cs.zip' },
        { lang: 'no', href: '/materials/digital-misuse/teaching-guide/teaching-guide-no.zip' },
        { lang: 'lt', href: '/materials/digital-misuse/teaching-guide/teaching-guide-lt.zip' },
        { lang: 'de', href: '/materials/digital-misuse/teaching-guide/teaching-guide-de.zip' },
      ],
    },
    materialsPackage: {
      languages: [
        { lang: 'en', href: '/materials/digital-misuse/digital-misuse-en.zip' },
        { lang: 'cs', href: '/materials/digital-misuse/digital-misuse-cs.zip' },
        { lang: 'no', href: '/materials/digital-misuse/digital-misuse-no.zip' },
        { lang: 'lt', href: '/materials/digital-misuse/digital-misuse-lt.zip' },
        { lang: 'de', href: '/materials/digital-misuse/digital-misuse-de.zip' },
      ],
    },
  },
]

export const moduleCount = modules.length
export const challengeCount = modules.filter(m => m.challenges > 0).length
export const gameCount = modules.filter(m => m.games > 0).length
export const partCount = modules.reduce((sum, m) => sum + (modulePartsData[m.id]?.length ?? 0), 0)
export const materialCount = modules.reduce((sum, m) => sum + m.materials, 0)
export const videoCount = modules.reduce((sum, m) => sum + m.videos, 0)

export function getModule(id: ModuleId): ModuleData | undefined {
  return modules.find(m => m.id === id)
}

// Introductory materials shared by all modules, one package per language:
// public/materials/introduction/introduction-<lang>.zip (built by scripts/generate-zips.sh)
export const introMaterials: LanguagePackage = {
  languages: [
    { lang: 'en', href: '/materials/introduction/introduction-en.zip' },
    { lang: 'cs', href: '/materials/introduction/introduction-cs.zip' },
    { lang: 'no', href: '/materials/introduction/introduction-no.zip' },
    { lang: 'lt', href: '/materials/introduction/introduction-lt.zip' },
    { lang: 'de', href: '/materials/introduction/introduction-de.zip' },
  ],
}
