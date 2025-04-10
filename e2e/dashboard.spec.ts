import { test, expect } from '@playwright/test';

test.describe('Dashboard Tests', () => {
  test('should display the dashboard with system status', async ({ page }) => {
    // Navigate to the dashboard
    await page.goto('http://localhost:3000');
    
    // Check if title is correct
    await expect(page).toHaveTitle(/IntelCryptoBot/);
    
    // Check if sidebar exists
    await expect(page.locator('aside')).toBeVisible();
    
    // Check if system status component is visible
    await expect(page.locator('text=System Status')).toBeVisible();
    
    // Check if at least one status indicator is visible
    await expect(page.locator('text=Bot Status')).toBeVisible();
  });

  test('should display KPI cards', async ({ page }) => {
    // Navigate to the dashboard
    await page.goto('http://localhost:3000');
    
    // Check if KPI components are visible
    await expect(page.locator('text=Total Pn L')).toBeVisible();
    await expect(page.locator('text=Account Equity')).toBeVisible();
    await expect(page.locator('text=Current Exposure')).toBeVisible();
    await expect(page.locator('text=Drawdown')).toBeVisible();
  });

  test('should display alerts panel', async ({ page }) => {
    // Navigate to the dashboard
    await page.goto('http://localhost:3000');
    
    // Check if alerts panel is visible
    await expect(page.locator('text=Recent Alerts')).toBeVisible();
    
    // Check if at least one alert is visible
    await expect(page.locator('text=API Error')).toBeVisible();
  });
}); 