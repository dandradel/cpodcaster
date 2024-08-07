import { type Locator, type Page } from '@playwright/test'

class PodcastDetailPom {
  readonly page: Page
  readonly podcastCard: Locator
  readonly episodesTable: Locator
  readonly podcastEpisodesCounter: Locator
  readonly lastPodcastEpisode: Locator
  readonly podcastCardImg: Locator

  constructor(page: Page) {
    this.page = page
    this.podcastCard = page.getByTestId('podcast-wrapper-testid')
    this.episodesTable = page.getByTestId('episodes-wrapper-testid')
    this.podcastEpisodesCounter = page.getByTestId('episodes-wrapper-testid').locator('div').filter({ hasText: 'Episodes:' })
    this.lastPodcastEpisode =  page.getByRole('cell').last();
    this.podcastCardImg = page.getByTestId('podcast-image-testid')
  }

  async checkIfPodcastWrapperIsVisible(): Promise<boolean> {
    return this.podcastCard.isVisible()
  }

  async checkIfPodcastEpisodesCounterIsVisible() {
    return await this.podcastEpisodesCounter.isVisible()
  }

  async checkIfPodcastEpisodesWrapperIsVisible() {
    return await this.episodesTable.isVisible()
  }

  async clickLastPodcastEpisode() {
    await this.lastPodcastEpisode.last().click()
  }

  async clickPodcastCardImg() {
    await this.podcastCardImg.click()
  }
}

export default PodcastDetailPom
