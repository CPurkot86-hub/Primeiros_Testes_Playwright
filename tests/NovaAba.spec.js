import { expect, test } from "@playwright/test"

test('Mudando de tab', async ({ page, context }) => {
  await page.goto('https://the-internet.herokuapp.com/windows');
  const pagePromise = context.waitForEvent('page');
  await page.getByText('Click Here').click()

  const newPage = await pagePromise;
  await newPage.waitForLoadState();
  console.log(await newPage.title());
  await page.pause()
})

test('Abrindo link em nova tab', async ({page, context}) => {
    await page.goto('https://playwright.dev/');

    const pagePromise = context.waitForEvent('page');
    //await page.keyboard.down('Control');
    //await page.getByText('Get started').click();
    //await page.keyboard.up('Control');

    await page.getByText('Get started').click({button: 'middle'})
    
    const newPage = await pagePromise;
    await newPage.waitForLoadState();
    await newPage.bringToFront();
    console.log(await newPage.title());
    await page.pause()
})