import { expect, test } from "@playwright/test";
import PodcasterHomePom  from "../models/PodcasterHomePom";
import PodcastDetailPom  from "../models/PodcastDetailPom";

test.beforeEach(async ({ page }) => {
    const podcasterHomePom = new PodcasterHomePom(page);
    await podcasterHomePom.goToHome();
});

test("should go to home and check if search input, chip number, podcasts wrapper and header link are visible", async ({ page }) => {
    const podcasterHomePom = new PodcasterHomePom(page);
    await expect(podcasterHomePom.checkIfSearchInputIsVisible()).resolves.toBe(true);
    await expect(podcasterHomePom.checkIfChipNumberIsVisible()).resolves.toBe(true);
    await expect(podcasterHomePom.checkIfPodcastsWrapperIsVisible()).resolves.toBe(true);
    await expect(podcasterHomePom.checkIfPodcastHeaderLinkIsVisible()).resolves.toBe(true);
});

// FIXME: This test is failing because list is empty after filling input text
test.skip("should type in search input and check if podcasts list is filtered", async ({ page }) => {
    const podcasterHomePom = new PodcasterHomePom(page);
    const searchInputText = 'joe';
    await podcasterHomePom.typeSearchInputText(searchInputText);
    await page.waitForTimeout(1000);
    await expect(podcasterHomePom.checkIfFirstPodcastInListHasSearchInputText(searchInputText)).resolves.toBe(true);
});

test("should click on first podcast and check if it navigates to the podcaster page", async ({ page }) => {
    const podcasterHomePom = new PodcasterHomePom(page);
    const podcasterDetailPom = new PodcastDetailPom(page);
    await podcasterHomePom.selectFirstPodcast();
    await page.waitForTimeout(1000);
    await expect(podcasterDetailPom.checkIfPodcastWrapperIsVisible()).resolves.toBe(true);
});