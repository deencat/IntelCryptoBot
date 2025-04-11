import { test, expect } from '@playwright/test';

test.describe('Settings Page', () => {
  test('navigates to settings page from dashboard', async ({ page }) => {
    // Start from the homepage
    await page.goto('http://localhost:3000');
    
    // Click on the Settings link in the sidebar
    await page.click('text=Settings');
    
    // Verify we're on the settings page
    await expect(page).toHaveURL(/settings/);
    await expect(page.locator('h1')).toHaveText('Settings');
  });

  test('API Key Management component renders correctly', async ({ page }) => {
    await page.goto('http://localhost:3000/settings');
    
    // Verify API tab is active by default
    await expect(page.locator('button:has-text("API Credentials")')).toHaveClass(/bg-blue-600/);
    
    // Check core elements of the API Key Management component
    await expect(page.locator('text=API Key Management')).toBeVisible();
    await expect(page.locator('text=DeepSeek AI API')).toBeVisible();
    await expect(page.locator('text=OpenRouter API')).toBeVisible();
    
    // Test API key input masking
    const deepseekInput = page.locator('input[name="deepseekApiKey"]');
    await expect(deepseekInput).toHaveAttribute('type', 'password');
    
    // Click show button and verify input type changes
    await page.click('text=Show', { hasText: true });
    await expect(deepseekInput).toHaveAttribute('type', 'text');
  });

  test('Model Selection component renders correctly', async ({ page }) => {
    await page.goto('http://localhost:3000/settings');
    
    // Switch to Model Selection tab
    await page.click('text=Model Selection');
    
    // Verify tab switch
    await expect(page.locator('button:has-text("Model Selection")')).toHaveClass(/bg-blue-600/);
    
    // Check core elements
    await expect(page.locator('h2:has-text("Model Selection")')).toBeVisible();
    await expect(page.locator('text=Enable Ensemble Strategy')).toBeVisible();
    await expect(page.locator('text=Deep Q-Network (DQN)')).toBeVisible();
    await expect(page.locator('text=Proximal Policy Optimization (PPO)')).toBeVisible();
    await expect(page.locator('text=Transformer-Based Model')).toBeVisible();
    
    // Test ensemble mode toggle
    const ensembleCheckbox = page.locator('input[type="checkbox"]');
    await ensembleCheckbox.check();
    await expect(page.locator('text=Adjust the weight of each model')).toBeVisible();
    
    // Verify sliders appear in ensemble mode
    await expect(page.locator('input[type="range"]')).toHaveCount(3);
  });

  test('ML Strategy Config component renders correctly', async ({ page }) => {
    await page.goto('http://localhost:3000/settings');
    
    // Switch to Strategy Configuration tab
    await page.click('text=Strategy Configuration');
    
    // Verify tab switch
    await expect(page.locator('button:has-text("Strategy Configuration")')).toHaveClass(/bg-blue-600/);
    
    // Check core elements
    await expect(page.locator('text=ML Strategy Configuration')).toBeVisible();
    await expect(page.locator('text=Reward Function Type')).toBeVisible();
    await expect(page.locator('text=Maximum Drawdown Limit')).toBeVisible();
    await expect(page.locator('text=Position Sizing Method')).toBeVisible();
    
    // Test selecting different reward function
    const rewardTypeSelect = page.locator('select[name="rewardType"]');
    await rewardTypeSelect.selectOption('sortino');
    
    // Test slider interaction
    const drawdownSlider = page.locator('input[name="maxDrawdownLimit"]');
    await drawdownSlider.fill('20'); // Set value to 20
    await expect(page.locator('text=20%')).toBeVisible();
  });
}); 