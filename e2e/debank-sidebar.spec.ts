import { test, expect } from '@playwright/test';

test.describe('DeBank-Style Sidebar Navigation', () => {
  test('should display sidebar with IntelCryptoBot logo', async ({ page }) => {
    // Navigate to the homepage
    await page.goto('/');
    
    // Wait for page to load completely
    await page.waitForLoadState('networkidle');
    
    // Check that the logo and name are visible
    await expect(page.locator('.rounded-md.bg-orange-500')).toBeVisible();
    await expect(page.getByText('IntelCryptoBot')).toBeVisible();
  });
  
  test('should display all navigation items on desktop', async ({ page }) => {
    // Set viewport to desktop size
    await page.setViewportSize({ width: 1280, height: 800 });
    
    // Navigate to the homepage
    await page.goto('/');
    
    // Wait for page to load completely
    await page.waitForLoadState('networkidle');
    
    // Check that navigation items are visible
    await expect(page.getByText('Home')).toBeVisible();
    await expect(page.getByText('Portfolio')).toBeVisible();
    await expect(page.getByText('Trading')).toBeVisible();
    await expect(page.getByText('Analytics')).toBeVisible();
    await expect(page.getByText('Alerts')).toBeVisible();
    await expect(page.getByText('Transactions')).toBeVisible();
    await expect(page.getByText('Bookmarks')).toBeVisible();
    await expect(page.getByText('Settings')).toBeVisible();
    
    // Check that the New Trade button is visible
    await expect(page.getByText('New Trade')).toBeVisible();
  });
  
  test('should display only icons on mobile', async ({ page }) => {
    // Set viewport to mobile size
    await page.setViewportSize({ width: 480, height: 800 });
    
    // Navigate to the homepage
    await page.goto('/');
    
    // Wait for page to load completely
    await page.waitForLoadState('networkidle');
    
    // Check that navigation items text is not visible
    await expect(page.getByText('Home')).not.toBeVisible();
    await expect(page.getByText('Portfolio')).not.toBeVisible();
    
    // But icon containers should be visible
    await expect(page.locator('nav a')).toHaveCount(8);
    await expect(page.locator('nav a').first()).toBeVisible();
    
    // And New Trade text should not be visible
    await expect(page.getByText('New Trade')).not.toBeVisible();
    // But the button should still be there
    await expect(page.locator('a[href="/new-trade"]')).toBeVisible();
  });
  
  test('should highlight active navigation item', async ({ page }) => {
    // Navigate to the homepage first
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    // Check that Home nav item has the active class
    await expect(page.locator('nav a').first()).toHaveClass(/bg-gray-100/);
    
    // Navigate to another page (note: this will only work if the route exists)
    // We'll check classes rather than navigation to avoid errors if the page doesn't exist
    const portfolioLink = page.locator('nav a').filter({ hasText: 'Portfolio' });
    await expect(portfolioLink).not.toHaveClass(/bg-gray-100/);
  });
}); 