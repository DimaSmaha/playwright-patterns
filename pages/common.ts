import { Locator, Page, expect } from "@playwright/test";

export abstract class Common {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto(endpoint: string) {
    await this.page.goto(endpoint);
    await this.page.waitForLoadState();
  }

  get = (locator: string): Locator => this.page.locator(locator);
  getByDataTestId = (locator: string): Locator =>
    this.page.locator(`[data-test='${locator}']`);

  async checkUrl(url: string) {
    await expect(this.page).toHaveURL(url);
  }
}
