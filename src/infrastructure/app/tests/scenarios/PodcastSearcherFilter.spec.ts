import { test, expect } from '@playwright/test'
import PodcasterHomePage from '../pages/PodcasterHomePage'

test('User load page, type on the search input and filter podcasts', async ({ page }) => {
  const podcasterHomePage = new PodcasterHomePage(page)
  const searchInputText = 'The Joe Budden Podcast'
  await podcasterHomePage.goto()
  await podcasterHomePage.verifySearchInputText()
  await podcasterHomePage.verifySearchChipNumber()
  await podcasterHomePage.typeSearchInputText(searchInputText)
  expect(await page.locator('h6', { hasText: searchInputText })).toBeVisible()
  await podcasterHomePage.selectPodcast()
})
