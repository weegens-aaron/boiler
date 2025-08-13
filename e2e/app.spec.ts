import { test, expect } from '@playwright/test';

test.describe('Configuration Test App', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('has title and heading', async ({ page }) => {
    // Check page title
    await expect(page).toHaveTitle(/Quick Start/);

    // Check app heading
    await expect(page.locator('h1')).toContainText('Configuration Test App');
  });

  test('displays description text', async ({ page }) => {
    await expect(
      page.locator('text=This minimal app tests our production configuration'),
    ).toBeVisible();
  });

  test('counter functionality works', async ({ page }) => {
    // Initial state
    await expect(page.locator('text=Count: 0')).toBeVisible();

    // Increment
    await page.getByTestId('increment-button').click();
    await expect(page.locator('text=Count: 1')).toBeVisible();

    // Increment again
    await page.getByTestId('increment-button').click();
    await expect(page.locator('text=Count: 2')).toBeVisible();

    // Decrement
    await page.getByTestId('decrement-button').click();
    await expect(page.locator('text=Count: 1')).toBeVisible();

    // Reset
    await page.getByTestId('reset-button').click();
    await expect(page.locator('text=Count: 0')).toBeVisible();
  });

  test('multiple increments and decrements', async ({ page }) => {
    // Click increment 5 times
    for (let i = 0; i < 5; i++) {
      await page.getByTestId('increment-button').click();
    }
    await expect(page.locator('text=Count: 5')).toBeVisible();

    // Click decrement 3 times
    for (let i = 0; i < 3; i++) {
      await page.getByTestId('decrement-button').click();
    }
    await expect(page.locator('text=Count: 2')).toBeVisible();
  });

  test('error boundary catches errors', async ({ page }) => {
    // Trigger error
    await page.getByTestId('error-button').click();

    // Check error boundary UI appears
    await expect(page.locator('role=alert')).toBeVisible();
    await expect(page.locator('text=Something went wrong')).toBeVisible();
    await expect(page.locator('text=Please refresh the page or contact support.')).toBeVisible();
  });

  test('displays environment information', async ({ page }) => {
    await expect(page.locator('text=/Environment:/')).toBeVisible();
  });

  test('responsive design', async ({ page }) => {
    // Desktop view
    await page.setViewportSize({ width: 1280, height: 720 });
    await expect(page.locator('h1')).toBeVisible();

    // Tablet view
    await page.setViewportSize({ width: 768, height: 1024 });
    await expect(page.locator('h1')).toBeVisible();

    // Mobile view
    await page.setViewportSize({ width: 375, height: 667 });
    await expect(page.locator('h1')).toBeVisible();
  });

  test('keyboard navigation', async ({ page }) => {
    // Tab through interactive elements
    await page.keyboard.press('Tab'); // Focus first button
    await expect(page.getByTestId('increment-button')).toBeFocused();

    await page.keyboard.press('Tab'); // Focus second button
    await expect(page.getByTestId('decrement-button')).toBeFocused();

    await page.keyboard.press('Tab'); // Focus third button
    await expect(page.getByTestId('reset-button')).toBeFocused();

    // Press Enter to activate button
    await page.keyboard.press('Enter');
    // Reset button should reset counter to 0
    await expect(page.locator('text=Count: 0')).toBeVisible();
  });

  test('accessibility', async ({ page }) => {
    // Check for proper heading hierarchy
    const h1 = await page.locator('h1').count();
    expect(h1).toBe(1);

    const h2 = await page.locator('h2').count();
    expect(h2).toBeGreaterThan(0);

    // Check buttons have accessible text
    await expect(page.getByTestId('increment-button')).toHaveText('Increment');
    await expect(page.getByTestId('decrement-button')).toHaveText('Decrement');
    await expect(page.getByTestId('reset-button')).toHaveText('Reset');
    await expect(page.getByTestId('error-button')).toHaveText('Trigger Error');
  });

  test('screenshot comparison', async ({ page }) => {
    // Wait for fonts to load
    await page.waitForTimeout(1000);

    // Take screenshot of initial state
    await expect(page).toHaveScreenshot('app-initial.png', {
      fullPage: true,
      animations: 'disabled',
    });

    // Change state and take another screenshot
    await page.getByTestId('increment-button').click();
    await page.getByTestId('increment-button').click();
    await expect(page).toHaveScreenshot('app-counter-2.png', {
      fullPage: true,
      animations: 'disabled',
    });
  });
});
