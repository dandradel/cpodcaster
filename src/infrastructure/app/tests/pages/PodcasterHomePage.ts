import { expect, type Locator, type Page } from '@playwright/test'

class PodcasterHomePage {
  readonly page: Page
  readonly podcasterHeaderLink: Locator
  readonly getSearchInputText: Locator
  readonly podcastCoverWrapper: Locator
  readonly searchChipNumber: Locator
  readonly podcastsWrapper: Locator

  constructor(page: Page) {
    this.page = page
    this.podcasterHeaderLink = page.locator('a', { hasText: 'Podcaster' })
    this.getSearchInputText = page.locator('label', { hasText: 'Filter podcasts...' })
    this.podcastCoverWrapper = page.getByTestId('podcastCover-wrapper-testid')
    this.searchChipNumber = page.getByTestId('search-chip-number-testid')
    this.podcastsWrapper = page.getByTestId('podcasts-wrapper-testid')
  }

  async goto() {
    await this.page.goto('http://localhost:3000/')
  }
  async verifySearchInputText() {
    await expect(this.getSearchInputText).toBeVisible()
  }
  async verifySearchChipNumber() {
    await expect(this.searchChipNumber).toBeVisible()
  }
  async selectPodcast() {
    await this.podcastCoverWrapper.first().click()
  }
  async typeSearchInputText(text: string) {
    await this.getSearchInputText.type(text)
  }
  async verifyPodcastsWrapper() {
    await expect(this.podcastsWrapper).toBeVisible()
  }
  async clickPodcasterHeaderLink() {
    await this.podcasterHeaderLink.click()
  }
}

export default PodcasterHomePage
