import { test } from '@playwright/test'
import PodcasterHomePage from '../pages/PodcasterHomePage'
import PodcastDetailPage from '../pages/PodcastDetailPage'

test('User load page and pick a Podcast, then click an Episode then click PodcastCard to return', async ({
  page,
}) => {
  const podcasterHomePage = new PodcasterHomePage(page)

  await podcasterHomePage.goto()
  await podcasterHomePage.selectPodcast()

  const podcastDetailPage = new PodcastDetailPage(page)
  await podcastDetailPage.clickPodcastEpisode()
  await podcastDetailPage.clickPodcastCardImg()
  await podcastDetailPage.verifyPodcastEpisodesWrapper()
})
