import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/homePage.page";

test.describe("Login page tests", () => {
  let homePage: HomePage;
  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.openHome();
    await page.waitForLoadState();
  });

  test("Should sing in to created account", async ({ page }) => {
    expect(homePage.getLoginBtn()).toBeVisible();
    await homePage.fillUsername("standard_user");
    await homePage.fillPassword("secret_sauce");
    await homePage.getLoginBtn().click();
    await page.waitForURL("https://www.saucedemo.com/inventory.html");
  });

  test("Should show login error", async ({ page }) => {
    expect(homePage.getLoginBtn()).toBeVisible();
    await homePage.fillUsername("wrong_login");
    await homePage.fillPassword("wrong_pass");
    await homePage.getLoginBtn().click();
    expect(homePage.getLoginError()).toContainText(
      "Epic sadface: Username and password do not match any user in this service"
    );
  });
});
