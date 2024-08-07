import { type Locator, type Page } from '@playwright/test'

class PodcastEpisodePom {
  readonly page: Page
  readonly episodeCard: Locator

  constructor(page: Page) {
    this.page = page
    this.episodeCard = page.getByTestId('episode-wrapper-testid')
  }

  async checkIfEpisodeWrapperIsVisible(): Promise<boolean> {
    return await this.episodeCard.isVisible()
  }

  async clickAudioButtonPlay() {
    await this.page.locator('button').first().click()
  }

  async checkIfAudioIsPlaying(): Promise<boolean> {
    return await this.page.locator('audio').first().isVisible()
  }
}

export default PodcastEpisodePom
