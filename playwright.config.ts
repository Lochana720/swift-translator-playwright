import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  timeout: 30 * 1000,

  fullyParallel: false, // safer for student projects

  forbidOnly: !!process.env.CI,

  retries: 0,

  reporter: [
    ['html', { open: 'never' }],
    ['list']
  ],

  use: {
    headless: true,
    baseURL: 'http://localhost:3000',
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    }
  ],
});
