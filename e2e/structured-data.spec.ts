import { expect, test } from '@playwright/test'
import { LOCALES, MODULES, localized } from './pages'

// schema.org data in every module page: the module as a Course, each part as a
// LearningResource, each lesson video as a VideoObject with the fields Google requires
// (name, description, thumbnailUrl, uploadDate) plus contentUrl and duration.
// eslint-disable-next-line @typescript-eslint/no-explicit-any -- JSON-LD from the page, read field by field below
type Item = Record<string, any>

const read = async (page: import('@playwright/test').Page): Promise<Item[]> =>
  JSON.parse((await page.locator('script[type="application/ld+json"]').textContent()) ?? '[]')

for (const module of MODULES) {
  test(`structured data: ${module}`, async ({ page, request }) => {
    // reads every video file's headers: slower when three browsers run at once
    test.slow()
    await page.goto(`/learning-hub/${module}/content/`)
    const items = await read(page)
    const course = items.find((item) => item['@type'] === 'Course')!
    const parts = items.filter((item) => item['@type'] === 'LearningResource')
    const shownParts = await page.locator('details.mc-module').count()

    expect(course.name).toBeTruthy()
    expect(course.url).toMatch(new RegExp(`/learning-hub/${module}/content/$`))
    expect(parts).toHaveLength(shownParts)
    expect(course.hasPart.map((ref: Item) => ref['@id'])).toEqual(parts.map((part) => part['@id']))

    for (const part of parts) {
      expect(part.name, 'part name').toBeTruthy()
      expect(part.isPartOf['@id']).toBe(course['@id'])
      // the address of a part leads to that part on the page
      const anchor = new URL(part.url).hash.slice(1)
      await expect(page.locator(`details#${anchor}`)).toHaveCount(1)
    }

    const videos = parts.map((part) => part.video).filter(Boolean)
    expect(videos).toHaveLength(await page.locator('details.mc-module video').count())
    for (const video of videos) {
      for (const field of ['name', 'description', 'thumbnailUrl', 'uploadDate', 'contentUrl', 'duration']) {
        expect(video[field], `video ${field}`).toBeTruthy()
      }
      expect(video.uploadDate).toMatch(/^\d{4}-\d{2}-\d{2}$/)
      expect(video.duration).toMatch(/^PT\d+M\d+S$/)
      expect(video.subtitleLanguage.length).toBeGreaterThan(0)
      // the files named there exist
      for (const url of [video.thumbnailUrl, video.contentUrl]) {
        const response = await request.head(new URL(url).pathname)
        expect(response.status(), url).toBe(200)
      }
    }
  })
}

test('structured data follows the page language', async ({ page }) => {
  for (const locale of LOCALES) {
    await page.goto(localized(locale, '/learning-hub/malware/content/'))
    const items = await read(page)
    const course = items.find((item) => item['@type'] === 'Course')!
    expect(course.inLanguage).toBe(locale)
    expect(course.url).toContain(localized(locale, '/learning-hub/malware/content/'))
    expect(course.name).toBe(await page.locator('h1').textContent())
    // narration stays English, subtitles cover the page language
    const video = items.find((item) => item.video)!.video
    expect(video.inLanguage).toBe('en')
    expect(video.subtitleLanguage).toContain(locale)
  }
})
