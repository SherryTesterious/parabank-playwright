const { test, expect } = require('@playwright/test');
require('dotenv').config();

test('login with valid credentials', async ({ page }) => {
  await page.goto('/parabank/index.htm');
  await page.locator('input[name="username"]').fill(process.env.USERNAME);
  await page.locator('input[name="password"]').fill(process.env.USER_PASSWORD);
  await page.getByRole('button', { name: /log\s*in/i }).click();
  await expect(page).toHaveURL(/\/parabank\/overview.htm/); 
await expect(page.getByText('Welcome sherry test', { exact: true })).toBeVisible();
});

