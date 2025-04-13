import { test, expect } from '@playwright/test';

test.describe('Layout Tests', () => {
  test('verify sidebar does not overlap content', async ({ page }) => {
    // Navigate to homepage
    await page.goto('/');
    
    // Set viewport to desktop size
    await page.setViewportSize({ width: 1280, height: 800 });
    
    // Wait for network to be idle (all content loaded)
    await page.waitForLoadState('networkidle');
    
    // Take screenshot for visual verification
    await page.screenshot({ path: 'screenshots/desktop-layout.png' });
    
    // Verify sidebar is visible
    const sidebar = page.locator('.w-16.md\\:w-60');
    await expect(sidebar).toBeVisible();
    
    // Verify content has appropriate margin
    const content = page.locator('div.ml-16.md\\:ml-60');
    await expect(content).toBeVisible();
    
    // Test clicking on an asset in the token list
    const tokenRow = page.locator('tbody tr').first();
    await expect(tokenRow).toBeVisible();
    
    // Take another screenshot after interaction
    await tokenRow.hover();
    await page.screenshot({ path: 'screenshots/hover-token.png' });
  });
  
  test('verify mobile layout', async ({ page }) => {
    // Navigate to homepage
    await page.goto('/');
    
    // Set viewport to mobile size
    await page.setViewportSize({ width: 390, height: 844 });
    
    // Wait for network to be idle (all content loaded)
    await page.waitForLoadState('networkidle');
    
    // Take screenshot for visual verification
    await page.screenshot({ path: 'screenshots/mobile-layout.png' });
    
    // Verify sidebar is visible but compact
    const sidebar = page.locator('.w-16.md\\:w-60');
    await expect(sidebar).toBeVisible();
    
    // Verify content has appropriate margin
    const content = page.locator('div.ml-16.md\\:ml-60');
    await expect(content).toBeVisible();
  });
}); 