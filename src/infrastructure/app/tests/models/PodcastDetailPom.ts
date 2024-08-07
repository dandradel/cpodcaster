import { expect, type Locator, type Page } from '@playwright/test'

class PodcastDetailPom {
  readonly page: Page
  readonly postcastWrapper: Locator
  readonly podcastCardImg: Locator
  readonly podcastName: Locator
  readonly podcastDescription: Locator
  readonly podcastCard: Locator
  readonly podcastEpisodesCounter: Locator
  readonly podcastEpisodesWrapper: Locator
  readonly podcastEpisode: Locator

  constructor(page: Page) {
    this.page = page
    this.podcastCard = page.getByTestId('podcast-wrapper-testid')
    this.podcastCardImg = page.getByTestId('podcast-image-testid')
    this.podcastName = page.getByTestId('podcast-name-testid')
    this.podcastDescription = page.getByTestId('podcast-description-testid')
    this.podcastEpisodesCounter = page.getByTestId('episodes-number-testid')
    this.podcastEpisodesWrapper = page.getByTestId('episodes-wrapper-testid')
    this.podcastEpisode = page.getByTestId('episodes-tableRow-testid')
  }

  async checkIfPodcastWrapperIsVisible(): Promise<boolean> {
    return this.podcastCard.isVisible()
  }

  async verifyPodcastEpisodesCounter() {
    await expect(this.podcastEpisodesCounter).toBeVisible()
  }
  async verifyPodcastEpisodesWrapper() {
    await expect(this.podcastEpisodesWrapper).toBeVisible()
  }
  async clickPodcastEpisode() {
    await this.podcastEpisode.last().click()
  }
  async clickPodcastCardImg() {
    await this.podcastCardImg.click()
  }
}

export default PodcastDetailPom
