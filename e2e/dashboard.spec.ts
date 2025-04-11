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
  
  test('should display active positions', async ({ page }) => {
    // Navigate to the dashboard
    await page.goto('http://localhost:3000');
    
    // Check if active positions component is visible
    await expect(page.locator('text=Active Positions')).toBeVisible();
    
    // Check if the positions table is present
    await expect(page.locator('table')).toBeVisible();
    
    // Check if there are some position rows
    const positionRows = page.locator('table tbody tr');
    await expect(positionRows).toHaveCount(2);
    
    // Check for wallet connect button
    await expect(page.locator('button:has-text("Connect Wallet")')).toBeVisible();
  });

  test('should toggle wallet connection when clicking connect button', async ({ page }) => {
    // Navigate to the dashboard
    await page.goto('http://localhost:3000');
    
    // Click connect wallet button
    await page.locator('button:has-text("Connect Wallet")').click();
    
    // Check that disconnect button appears
    await expect(page.locator('button:has-text("Disconnect")')).toBeVisible();
    
    // Check that a wallet address is displayed
    const addressElement = page.locator('div.bg-green-900/30');
    await expect(addressElement).toBeVisible();
    
    // Click disconnect button
    await page.locator('button:has-text("Disconnect")').click();
    
    // Check that connect wallet button reappears
    await expect(page.locator('button:has-text("Connect Wallet")')).toBeVisible();
  });
  
  test('should display performance charts and allow tab switching', async ({ page }) => {
    // Navigate to the dashboard
    await page.goto('http://localhost:3000');
    
    // Check if performance charts component is visible
    await expect(page.locator('text=Performance Charts')).toBeVisible();
    
    // Check if chart tabs are visible
    await expect(page.locator('button:has-text("Equity Curve")')).toBeVisible();
    await expect(page.locator('button:has-text("Daily P&L")')).toBeVisible();
    await expect(page.locator('button:has-text("Drawdown")')).toBeVisible();
    
    // Click on P&L tab
    await page.locator('button:has-text("Daily P&L")').click();
    
    // Click on Drawdown tab
    await page.locator('button:has-text("Drawdown")').click();
    
    // Click back to Equity Curve tab
    await page.locator('button:has-text("Equity Curve")').click();
  });
  
  test('should display risk metrics', async ({ page }) => {
    // Navigate to the dashboard
    await page.goto('http://localhost:3000');
    
    // Check if risk metrics component is visible
    await expect(page.locator('text=Risk Metrics')).toBeVisible();
    
    // Check if risk metrics elements are visible
    await expect(page.locator('text=Current Exposure')).toBeVisible();
    await expect(page.locator('text=Current Drawdown')).toBeVisible();
    await expect(page.locator('text=Value at Risk')).toBeVisible();
    await expect(page.locator('text=Risk Limits')).toBeVisible();
  });
}); 