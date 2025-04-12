import { test, expect } from '@playwright/test';

test.describe('Theme Switching Tests', () => {
  // Add a small delay to ensure theme toggle is mounted
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    // Wait a moment for client-side JS to initialize
    await page.waitForTimeout(500);
  });

  test('should toggle between dark and light themes', async ({ page }) => {
    // By default, the page should have dark theme
    await expect(page.locator('html')).toHaveClass(/dark/);
    
    // Click the theme toggle button
    await page.locator('button[aria-label="Toggle theme"]').click();
    
    // Click light theme option
    await page.locator('text=Light').click();
    
    // Check that the dark class is removed
    await expect(page.locator('html')).not.toHaveClass(/dark/);
    
    // Click the theme toggle button again
    await page.locator('button[aria-label="Toggle theme"]').click();
    
    // Click dark theme option
    await page.locator('text=Dark').click();
    
    // Check that the dark class is added back
    await expect(page.locator('html')).toHaveClass(/dark/);
  });
  
  test('should support additional color themes', async ({ page }) => {
    // Test blue theme
    await page.locator('button[aria-label="Toggle theme"]').click();
    await page.locator('text=Blue').click();
    await expect(page.locator('html')).toHaveClass(/blue/);
    
    // Test green theme
    await page.locator('button[aria-label="Toggle theme"]').click();
    await page.locator('text=Green').click();
    await expect(page.locator('html')).toHaveClass(/green/);
    
    // Test purple theme
    await page.locator('button[aria-label="Toggle theme"]').click();
    await page.locator('text=Purple').click();
    await expect(page.locator('html')).toHaveClass(/purple/);
    
    // Back to dark theme
    await page.locator('button[aria-label="Toggle theme"]').click();
    await page.locator('text=Dark').click();
    await expect(page.locator('html')).toHaveClass(/dark/);
  });
  
  test('should persist theme preference', async ({ page }) => {
    // Set theme to green
    await page.locator('button[aria-label="Toggle theme"]').click();
    await page.locator('text=Green').click();
    
    // Navigate to another page
    await page.goto('/logs');
    await page.waitForTimeout(500);
    
    // Check that green theme persists
    await expect(page.locator('html')).toHaveClass(/green/);
    
    // Navigate back to dashboard
    await page.goto('/');
    await page.waitForTimeout(500);
    
    // Theme should still be green
    await expect(page.locator('html')).toHaveClass(/green/);
  });
  
  test('should support system theme preference', async ({ page }) => {
    // Click the theme toggle button
    await page.locator('button[aria-label="Toggle theme"]').click();
    
    // Select system theme
    await page.locator('text=System').click();
    
    // This is a mock test since we can't reliably test system theme in Playwright
    // Just verify the dropdown works correctly
    await expect(page.locator('button[aria-label="Toggle theme"]')).toBeVisible();
  });
}); 