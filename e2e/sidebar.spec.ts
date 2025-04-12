import { test, expect } from '@playwright/test';

test.describe('Sidebar Navigation', () => {
  test('should display expanded sidebar on desktop', async ({ page }) => {
    // Set viewport to desktop size
    await page.setViewportSize({ width: 1280, height: 800 });
    
    // Navigate to home page
    await page.goto('/');
    
    // Wait for page to load completely
    await page.waitForLoadState('networkidle');
    
    // Check that sidebar is visible by looking for specific elements
    await expect(page.getByText('Dashboard')).toBeVisible();
    await expect(page.getByText('Logs')).toBeVisible();
    await expect(page.getByText('Settings')).toBeVisible();
  });
  
  test('should collapse sidebar when toggle button is clicked', async ({ page }) => {
    // Set viewport to desktop size
    await page.setViewportSize({ width: 1280, height: 800 });
    
    // Navigate to home page
    await page.goto('/');
    
    // Wait for page to load completely
    await page.waitForLoadState('networkidle');
    
    // Click the collapse button (using more specific selector)
    await page.locator('button[aria-label="Collapse sidebar"]').click();
    
    // Verify sidebar is collapsed (text labels should be hidden)
    await expect(page.getByText('Dashboard')).not.toBeVisible();
    await expect(page.getByText('Logs')).not.toBeVisible();
    await expect(page.getByText('Settings')).not.toBeVisible();
    
    // Check for the icon elements directly
    await expect(page.locator('span').filter({ hasText: '📊' }).first()).toBeVisible();
  });
  
  test('should auto-collapse on mobile and show toggle button', async ({ page }) => {
    // Set viewport to mobile size
    await page.setViewportSize({ width: 480, height: 800 });
    
    // Navigate to home page
    await page.goto('/');
    
    // Wait for page to load completely
    await page.waitForLoadState('networkidle');
    
    // Verify sidebar is collapsed on mobile
    await expect(page.getByText('Dashboard', { exact: true })).not.toBeVisible();
    
    // Verify mobile toggle button is visible
    await expect(page.locator('button:has-text("≡")')).toBeVisible();
  });
  
  test('should expand sidebar when mobile toggle is clicked', async ({ page }) => {
    // Set viewport to mobile size
    await page.setViewportSize({ width: 480, height: 800 });
    
    // Navigate to home page
    await page.goto('/');
    
    // Wait for page to load completely
    await page.waitForLoadState('networkidle');
    
    // Click the mobile toggle button
    await page.locator('button:has-text("≡")').click();
    
    // Wait for animation to complete
    await page.waitForTimeout(300);
    
    // Verify sidebar is expanded
    await expect(page.getByText('Dashboard', { exact: true })).toBeVisible();
  });
  
  test('should navigate between pages', async ({ page }) => {
    // Navigate to home page
    await page.goto('/');
    
    // Wait for page to load completely
    await page.waitForLoadState('networkidle');
    
    // Navigate to logs page
    await page.getByRole('link', { name: /Logs/ }).click();
    
    // Wait for navigation to complete
    await page.waitForURL(/\/logs/);
    
    // Verify logs page content is visible (use a more specific selector)
    await expect(page.locator('h1', { hasText: 'System Logs' })).toBeVisible();
    
    // Navigate to settings page
    await page.getByRole('link', { name: /Settings/ }).click();
    
    // Wait for navigation to complete
    await page.waitForURL(/\/settings/);
    
    // Verify settings page content is visible
    await expect(page.getByText('API Credentials')).toBeVisible();
  });
}); 