import { test } from '@playwright/test'
import PodcasterHomePage from '../pages/PodcasterHomePage'
import PodcastDetailPage from '../pages/PodcastDetailPage'
import PodcastEpisodePage from '../pages/PodcastEpisodePage'

test('User load page and pick a Podcast, then click an Episode, click on audio podcast', async ({
  page,
}) => {
  const podcasterHomePage = new PodcasterHomePage(page)

  await podcasterHomePage.goto()
  await podcasterHomePage.verifySearchInputText()
  await podcasterHomePage.verifySearchChipNumber()
  await podcasterHomePage.selectPodcast()

  const podcastDetailPage = new PodcastDetailPage(page)
  await podcastDetailPage.verifyPodcastCard()
  await podcastDetailPage.verifyPodcastEpisodesCounter()
  await podcastDetailPage.verifyPodcastEpisodesWrapper()
  await podcastDetailPage.clickPodcastEpisode()

  const podcastEpisodePage = new PodcastEpisodePage(page)
  await podcastEpisodePage.verifyEpisodeName()
  await podcastEpisodePage.verifyEpisodeDescription()
  await podcastEpisodePage.verifyAudioPodcast()
  await podcastEpisodePage.clickAudioPodcast()
})
