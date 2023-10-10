const { expect } = require('@playwright/test');

exports.GoogleShearchPage = class GoogleShearchPage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.shearch = page.locator("#APjFqb");
    this.shearchButton = page.locator("div[class='lJ9FBc'] input[name='btnK']")

  }

  async goto() {
    await this.page.goto('https://www.google.com/');
  }
  async FillFierstTime() {
    await this.shearch.click();
    await this.shearch.fill('one');
    
  }
  async FillSecondtTime() {
    await this.shearch.click();
    await this.shearch.fill('two');
    
  }
  async SearchButton() {
    await this.shearchButton.click();
  }
  
};