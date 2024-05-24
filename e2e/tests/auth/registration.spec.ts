import { test, expect } from '@playwright/test';

test.describe('Registrate', () => {

    test('a new user', async ({ page }) => {
        await page.goto('http://localhost:5173/registration');

        await page.getByLabel('E-Mail').fill('hans.sowa@polygons.at');
        await page.getByLabel('Password').fill('gG1234%&');
        await page.getByRole('button', { name: 'Registrieren'}).click();

        await expect(page.getByText('Benutzer:in wurde erfolgreich registriert')).toBeVisible();
    });
});