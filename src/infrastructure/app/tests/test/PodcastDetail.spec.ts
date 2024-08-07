import { expect, test } from "@playwright/test";
import PodcasterHomePom  from "../models/PodcasterHomePom";
import PodcastDetailPom  from "../models/PodcastDetailPom";
import PodcastEpisodePom  from "../models/PodcastEpisodePom";

test.beforeEach(async ({ page }) => {
    const podcasterHomePom = new PodcasterHomePom(page);
    await podcasterHomePom.goToHome();
});

test("should go to home, click first podcast then check if image, name, description, episodes counter and episodes wrapper are visible", async ({ page }) => {
    const podcasterHomePom = new PodcasterHomePom(page);
    const podcastDetailPom = new PodcastDetailPom(page);
    await podcasterHomePom.selectFirstPodcast();
    await page.waitForTimeout(1000);
    await expect(podcastDetailPom.checkIfPodcastWrapperIsVisible()).resolves.toBe(true);
    await expect(podcastDetailPom.checkIfPodcastEpisodesCounterIsVisible()).resolves.toBe(true);
    await expect(podcastDetailPom.checkIfPodcastEpisodesWrapperIsVisible()).resolves.toBe(true);
});

test("should click on last podcast episode and check if it navigates to the episode page", async ({ page }) => {
    const podcasterHomePom = new PodcasterHomePom(page);
    const podcastDetailPom = new PodcastDetailPom(page);
    const podcastEpisodePom = new PodcastEpisodePom(page);
    await podcasterHomePom.selectFirstPodcast();
    await page.waitForTimeout(1000);
    await podcastDetailPom.clickLastPodcastEpisode();
    await page.waitForTimeout(1000);
    await expect(podcastEpisodePom.checkIfEpisodeWrapperIsVisible()).resolves.toBe(true);
});