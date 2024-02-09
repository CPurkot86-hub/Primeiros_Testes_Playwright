import { expect, test } from "@playwright/test"

test('login com sucesso', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await expect(await page.title()).toBe('Swag Labs');

  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');

  await page.locator('[data-test="login-button"]').click();

  await page.pause()

});
