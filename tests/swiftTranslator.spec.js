const { test, expect } = require('@playwright/test');
const testCases = require('./data/testCases.json');

test.describe('Singlish → Sinhala Translator – All Test Cases', () => {

  for (const tc of testCases) {

    test(tc.id, async ({ page }) => {

      await page.goto('/');
      const inputBox = page.locator('#inputText');
      const outputBox = page.locator('#outputText');

      await inputBox.fill('');
      await inputBox.fill(tc.input);

      if (tc.type === 'positive') {
        await expect(outputBox).toHaveText(tc.expected);
      }

      if (tc.type === 'negative') {
        // Correct behavior = system does NOT crash and output exists
        await expect(outputBox).toBeVisible();
      }

      if (tc.type === 'ui') {
        await expect(outputBox).toContainText(tc.expected);
      }

    });

  }
});
