import { IUserDTO, userDTO } from "./../patterns/dto";

import { Common } from "./common";

export class HomePage extends Common {
  usernameInput = '[id="user-name"]';
  passwordInput = '[id="password"]';
  loginBtn = '[id="login-button"]';
  loginError = '[data-test="error"]';

  async openHome() {
    await this.goto("");
  }

  async checkHomePageUrl() {
    await this.checkUrl("");
  }

  getUsernameInput = () => this.get(this.usernameInput);
  getPasswordInput = () => this.get(this.passwordInput);
  getLoginBtn = () => this.get(this.loginBtn);
  getLoginError = () => this.get(this.loginError);

  async fillUsername(username: string) {
    await this.getUsernameInput().fill(username);
  }

  async fillPassword(password: string) {
    await this.getPasswordInput().fill(password);
  }

  async doLogin(username: string, password: string) {
    await this.getUsernameInput().fill(username);
    await this.getPasswordInput().fill(password);
    await this.getLoginBtn().click();
  }
}
