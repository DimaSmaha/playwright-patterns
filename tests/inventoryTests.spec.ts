import { InventoryPage } from "./../pages/inventoryPage.page";
import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/homePage.page";
import { userDTO } from "../patterns/dto";

test.describe("Inventory page tests", () => {
  let homePage: HomePage;
  let inventoryPage: InventoryPage;
  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    inventoryPage = new InventoryPage(page);
    await homePage.openHome();
    await homePage.doLogin(userDTO.username, userDTO.password);
  });

  test("Check backpack name", async () => {
    await inventoryPage.checkInventoryPageUrl();
    expect(inventoryPage.getBackpackTitle()).toBeVisible();
    expect(inventoryPage.getBackpackTitle()).toContainText(
      "Sauce Labs Backpack"
    );
    expect(inventoryPage.getBackpackDescription()).toContainText(
      "carry.allTheThings()"
    );
  });

  test("User adds backpack to the cart", async () => {
    await inventoryPage.checkInventoryPageUrl();
    expect(inventoryPage.getBackpackTitle()).toBeVisible();
    await inventoryPage.getBackpackAddToCartBtn().click();
    expect(inventoryPage.getBackpackRemoveFromCartBtn()).toBeVisible();
    expect(inventoryPage.getCartCounter()).toContainText("1");
  });

  test("User adds  and  removes backpack to the cart", async () => {
    await inventoryPage.getBackpackAddToCartBtn().click();
    expect(inventoryPage.getBackpackRemoveFromCartBtn()).toBeVisible();
    await inventoryPage.getBackpackRemoveFromCartBtn().click();
    expect(inventoryPage.getBackpackRemoveFromCartBtn()).not.toBeVisible();
    expect(inventoryPage.getBackpackAddToCartBtn()).toBeVisible();
    expect(inventoryPage.getCartCounter()).not.toBeVisible();
  });
});
