const { test, expect } = require('@playwright/test');
const { GoogleShearchPage } = require('../Page/GoogleShearchPage');

test('getting started should contain table of contents', async ({ page }) => {
    
    const googleShearchPage = new GoogleShearchPage(page);
  await googleShearchPage.goto();
  await googleShearchPage.FillFierstTime();
  await googleShearchPage.FillSecondtTime();
  await googleShearchPage.SearchButton();
  await expect(page.locator("(//a[@class='k8XOCe R0xfCb VCOFK s8bAkb'])[1]")).toBeVisible();
  page.close();
  
});

