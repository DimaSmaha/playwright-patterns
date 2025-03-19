import { PageFactory } from "./pageFactory";
import { expect, Page } from "@playwright/test";
import { IUserDTO } from "./dto";

export class Facade {
  page: Page;
  pageFactory: PageFactory;
  constructor(page: Page) {
    this.page = page;
    this.pageFactory = new PageFactory(page);
  }

  async loginAndCheckItemIsVisible(userDTO: IUserDTO) {
    await this.pageFactory.homePage.doLoginDTO(userDTO);
    await expect(
      this.pageFactory.inventoryPage.getBackpackDescription()
    ).toBeVisible();
  }
}
