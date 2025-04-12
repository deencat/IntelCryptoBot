import { test, expect } from '@playwright/test';

test.describe('Logs Page', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the logs page before each test
    await page.goto('/logs');
  });

  test('should display the logs page with title and description', async ({ page }) => {
    // Check that the page title and description are displayed
    await expect(page.getByRole('heading', { name: 'System Logs', exact: true })).toBeVisible();
    await expect(page.getByText('Monitor your system and trading activities')).toBeVisible();
  });

  test('should display log entries from mock data', async ({ page }) => {
    // Check that log entries are displayed
    const logEntries = page.locator('li');
    const count = await logEntries.count();
    expect(count).toBeGreaterThan(0);
    
    // Check that the first log entry has expected elements
    const firstLog = logEntries.first();
    await expect(firstLog.locator('span:has-text("ERROR")')).toBeVisible();
    await expect(firstLog.getByText('API Error:')).toBeVisible();
  });

  test('should filter logs by type', async ({ page }) => {
    // Select only ERROR logs in the filter
    await page.selectOption('select', 'ERROR');
    
    // Check that filtered logs are displayed and contain only error type
    const logEntries = page.locator('li');
    const count = await logEntries.count();
    expect(count).toBeGreaterThan(0);
    
    // Verify all visible log entries have ERROR type
    const errorTypes = await page.locator('li span:not(:has-text("ERROR"))').count();
    expect(errorTypes).toBe(0);
  });

  test('should search logs by text', async ({ page }) => {
    // Search for specific text
    await page.fill('input[placeholder="Search logs..."]', 'SOL');
    
    // Check that filtered logs contain the search term
    const logEntries = page.locator('li');
    const count = await logEntries.count();
    expect(count).toBeGreaterThan(0);
    
    // Check first visible log contains the search term (case insensitive)
    const logText = await logEntries.first().textContent();
    expect(logText?.toLowerCase()).toContain('sol');
  });

  test('should expand log details on click', async ({ page }) => {
    // Click on the first log entry
    await page.locator('li').first().click();
    
    // Check that the expanded details are visible
    await expect(page.getByText('Log Details')).toBeVisible();
    await expect(page.locator('code')).toBeVisible();
  });

  test('should toggle log expansion when clicking again', async ({ page }) => {
    // Click on the first log entry to expand
    await page.locator('li').first().click();
    
    // Verify it expanded
    await expect(page.getByText('Log Details')).toBeVisible();
    
    // Click again to collapse
    await page.locator('li').first().click();
    
    // Verify it collapsed
    await expect(page.getByText('Log Details')).not.toBeVisible();
  });

  test('should clear search when clicking the X button', async ({ page }) => {
    // Enter search text
    await page.fill('input[placeholder="Search logs..."]', 'test');
    
    // Click the X button
    await page.locator('button:has-text("✕")').click();
    
    // Verify search is cleared
    await expect(page.locator('input[placeholder="Search logs..."]')).toHaveValue('');
  });

  test('should change sort order', async ({ page }) => {
    // Check initial order (newest first)
    await expect(page.locator('select').nth(1)).toHaveValue('desc');
    
    // Change to oldest first
    await page.selectOption('select:nth-of-type(2)', 'asc');
    
    // Verify selection changed
    await expect(page.locator('select').nth(1)).toHaveValue('asc');
  });

  test('should be responsive', async ({ page }) => {
    // Test desktop view
    await page.setViewportSize({ width: 1280, height: 800 });
    await expect(page.locator('.flex-col.gap-4.md\\:flex-row')).toBeVisible();
    
    // Test mobile view
    await page.setViewportSize({ width: 480, height: 800 });
    await expect(page.locator('.flex-col.gap-4.md\\:flex-row')).toBeVisible();
  });
}); 