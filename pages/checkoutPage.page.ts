import { TopHeader } from "./header.page";
import { expect, Locator, Page } from "@playwright/test";

export class CheckoutPage extends TopHeader {
  firstNameInput = '[data-test="firstName"]';
  lastNameInput = "lastName";
  postalCode = "postalCode";

  openCheckout = () => this.goto("/checkout-step-one.html");
  getFirstNameInput = () => this.get(this.firstNameInput);
  getLastNameInput = () => this.getByDataTestId(this.lastNameInput);
  getPostalCodeInput = () => this.getByDataTestId(this.postalCode);
}
