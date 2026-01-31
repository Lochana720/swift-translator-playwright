const { test, expect } = require('@playwright/test');
const testCases = require('./data/testCases.json');

test.describe('Singlish → Sinhala Translator Tests', () => {

  for (const tc of testCases) {

    test(`${tc.id} | ${tc.type}`, async ({ page }) => {

      // Change URL to your app
      await page.goto('http://localhost:3000');

      const inputBox = page.locator('#inputText');
      const outputBox = page.locator('#outputText');

      await inputBox.fill(tc.input);

      if (tc.type === 'positive') {
        await expect(outputBox).toHaveText(tc.expected);
      }

      if (tc.type === 'negative') {
        await expect(outputBox).not.toHaveText(tc.expected);
      }

      if (tc.type === 'ui') {
        await expect(outputBox).toContainText(tc.expected);
      }
    });

  }

});

