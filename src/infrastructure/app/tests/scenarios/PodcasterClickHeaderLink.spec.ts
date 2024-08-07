import { test } from '@playwright/test'
import PodcasterHomePage from '../pages/PodcasterHomePage'

test('User load page and pick a Podcast, then click on header Podcaster link to return home', async ({
  page,
}) => {
  const podcasterHomePage = new PodcasterHomePage(page)

  await podcasterHomePage.goto()
  await podcasterHomePage.selectPodcast()

  await podcasterHomePage.clickPodcasterHeaderLink()
  await podcasterHomePage.verifySearchInputText()
  await podcasterHomePage.verifySearchChipNumber()
  await podcasterHomePage.verifyPodcastsWrapper()
})
