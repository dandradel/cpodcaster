import { type Locator, type Page } from '@playwright/test'

class PodcasterHomePom {
  readonly page: Page
  readonly podcasterHeaderLink: Locator
  readonly getSearchInputText: Locator
  readonly podcastCoverWrapper: Locator
  readonly searchChipNumber: Locator
  readonly podcastsWrapper: Locator
  readonly firstPodcast: Locator

  constructor(page: Page) {
    this.page = page
    this.podcasterHeaderLink = page.getByRole('link', { name: 'Podcaster' });
    this.getSearchInputText = page.getByLabel('Filter podcasts...');
    this.searchChipNumber = page.getByTestId('search-chip-number-testid');
    this.podcastsWrapper = page.getByTestId('podcasts-wrapper-testid');
    this.firstPodcast = page.locator('.podcast__image').first();
  }

  async goToHome() {
    await this.page.goto('http://localhost:3000/')
    // Wait for the page to load
    await this.page.waitForTimeout(1000);
  }

  async checkIfSearchInputIsVisible() {
    return await this.getSearchInputText.isVisible()
  }

  async checkIfChipNumberIsVisible() {
    return await this.searchChipNumber.isVisible()
  }

  async selectFirstPodcast() {
    await this.firstPodcast.click()
  }

  async typeSearchInputText(text: string) {
    await this.getSearchInputText.fill(text)
  }

  async checkIfPodcastsWrapperIsVisible() {
    return await this.podcastsWrapper.isVisible()
  }

  async checkIfPodcastHeaderLinkIsVisible() {
    return await this.podcasterHeaderLink.isVisible()
  }

  async clickPodcasterHeaderLink() {
    await this.podcasterHeaderLink.click()
  }

  async checkIfFirstPodcastInListHasSearchInputText(text: string) {
    return await this.page.getByTestId('podcasts-wrapper-testid').locator('div').filter({ hasText: text }).first().isVisible()
  }
}

export default PodcasterHomePom
