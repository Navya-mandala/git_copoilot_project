
import { test, expect } from '../fixtures/testFixture';
import loginData from '../test-data/loginData.json';

test('valid login should show account', async ({ loginPage, page }) => {
	await loginPage.login(loginData.validUser.email, loginData.validUser.password);
	// Assert account link is visible
	await expect(page.getByRole('link', { name: loginData.validUser.email })).toBeVisible();
	
});

test('invalid login should show error message', async ({ loginPage, page }) => {
	await loginPage.login(loginData.invalidUser.email, loginData.invalidUser.password);
	// Assert error message is visible
	await expect(page.locator('.validation-summary-errors')).toBeVisible();
	await expect(page.locator('.validation-summary-errors')).toContainText('Login was unsuccessful');
});
