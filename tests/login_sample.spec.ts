import { test, expect } from '@playwright/test';

test('login functionality', async ({ page }) => {
  // Open the website
  await page.goto('https://demowebshop.tricentis.com/');

  // Click on login link
  await page.getByRole('link', { name: 'Log in' }).click();

  // Enter email and password
  await page.getByLabel('Email:').fill('testuser@example.com');
  await page.getByLabel('Password:').fill('Password123!');

  // Click login button
  await page.getByRole('button', { name: 'Log in' }).click();

});
