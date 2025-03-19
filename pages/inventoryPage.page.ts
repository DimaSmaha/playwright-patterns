import { TopHeader } from "./header.page";
import { expect, Locator, Page } from "@playwright/test";

export class InventoryPage extends TopHeader {
  backpackTitle = '[id="item_4_title_link"]';
  backpackDescription =
    'a[id="item_4_title_link"]~[class="inventory_item_desc"]';
  backpackAddToCartBtn = '[id="add-to-cart-sauce-labs-backpack"]';
  backpackRemoveFromCartBtn = '[id="remove-sauce-labs-backpack"]';

  getBackpackTitle = () => this.get(this.backpackTitle);
  getBackpackDescription = () => this.get(this.backpackDescription);
  getBackpackAddToCartBtn = () => this.get(this.backpackAddToCartBtn);
  getBackpackRemoveFromCartBtn = () => this.get(this.backpackRemoveFromCartBtn);

  async checkInventoryPageUrl() {
    await this.checkUrl("https://www.saucedemo.com/inventory.html");
  }
}
