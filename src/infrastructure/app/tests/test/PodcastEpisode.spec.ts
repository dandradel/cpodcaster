import { expect, test } from "@playwright/test";
import PodcasterHomePom  from "../models/PodcasterHomePom";
import PodcastDetailPom  from "../models/PodcastDetailPom";
import PodcastEpisodePom  from "../models/PodcastEpisodePom";

test.beforeEach(async ({ page }) => {
    const podcasterHomePom = new PodcasterHomePom(page);
    await podcasterHomePom.goToHome();
});

test("should navigate to podcast episode page and check if episode wrapper is visible", async ({ page }) => {
    const podcasterHomePom = new PodcasterHomePom(page);
    const podcastDetailPom = new PodcastDetailPom(page);
    const podcastEpisodePom = new PodcastEpisodePom(page);
    await podcasterHomePom.selectFirstPodcast();
    await page.waitForTimeout(1000);
    await podcastDetailPom.clickLastPodcastEpisode();
    await page.waitForTimeout(1000);
    await expect(podcastEpisodePom.checkIfEpisodeWrapperIsVisible()).resolves.toBe(true);
});

test("should click on podcast image and check if it navigates to the podcast detail page", async ({ page }) => {
    const podcasterHomePom = new PodcasterHomePom(page);
    const podcastDetailPom = new PodcastDetailPom(page);
    const podcastEpisodePom = new PodcastEpisodePom(page);

    await podcasterHomePom.selectFirstPodcast();
    await page.waitForTimeout(1000);
    await podcastDetailPom.clickLastPodcastEpisode();
    await page.waitForTimeout(1000);
    await expect(podcastEpisodePom.checkIfEpisodeWrapperIsVisible()).resolves.toBe(true);
    await podcastDetailPom.clickPodcastCardImg();
    await page.waitForTimeout(1000);
    await expect(podcastDetailPom.checkIfPodcastEpisodesWrapperIsVisible()).resolves.toBe(true);
});

test("should click on podcaster header link and check if home page is visible", async ({ page }) => {
    const podcasterHomePom = new PodcasterHomePom(page);
    await podcasterHomePom.selectFirstPodcast();
    await page.waitForTimeout(1000);
    await podcasterHomePom.clickPodcasterHeaderLink();
    await page.waitForTimeout(1000);
    await expect(podcasterHomePom.checkIfPodcastsWrapperIsVisible()).resolves.toBe(true);
});

// TODO: Impossible to test audio playing with Playwright
test.skip("should navigate to episode then click on audio button play and check if audio is playing", async ({ page }) => {
    const podcasterHomePom = new PodcasterHomePom(page);
    const podcastDetailPom = new PodcastDetailPom(page);
    const podcastEpisodePom = new PodcastEpisodePom(page);
    await podcasterHomePom.selectFirstPodcast();
    await page.waitForTimeout(1000);
    await podcastDetailPom.clickLastPodcastEpisode();
    await page.waitForTimeout(1000);
    await podcastEpisodePom.clickAudioButtonPlay();
    await page.waitForTimeout(1000);
    await expect(podcastEpisodePom.checkIfAudioIsPlaying()).resolves.toBe(true);
});
