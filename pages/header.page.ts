import { expect, Locator, Page } from "@playwright/test";
import { Common } from "./common";

export class TopHeader extends Common {
  cartCounter = '[class="shopping_cart_badge"]';

  getCartCounter = () => this.get(this.cartCounter);
}
