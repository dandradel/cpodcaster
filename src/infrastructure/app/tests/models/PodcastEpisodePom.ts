import { expect, type Locator, type Page } from '@playwright/test'

class PodcastEpisodePom {
  readonly page: Page
  readonly episodeName: Locator
  readonly episodeDescription: Locator
  readonly audioPodcast: Locator

  constructor(page: Page) {
    this.page = page
    this.episodeName = page.getByTestId('episode-name-testid')
    this.episodeDescription = page.getByTestId('episode-description-testid')
    this.audioPodcast = page.getByTestId('audio-podcast-testid')
  }

  async verifyEpisodeName() {
    await expect(this.episodeName).toBeVisible()
  }
  async verifyEpisodeDescription() {
    await expect(this.episodeDescription).toBeVisible()
  }
  async verifyAudioPodcast() {
    await expect(this.audioPodcast).toBeVisible()
  }
  async clickAudioPodcast() {
    await this.audioPodcast.click()
  }
}

export default PodcastEpisodePom
