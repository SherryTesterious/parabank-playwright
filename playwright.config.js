require ('dotenv').config();

/** @type {import('@playwright/test').PlaywrightTestConfig} */

const config ={
  use: {
    baseURL: process.env.BASE_URL || 'https://parabank.parasoft.com',
    screenshot: 'only-on-failure',  
    video: 'on-first-retry',        
    trace: 'on-first-retry'          
  },
  retries:1,
  reporter: [
    ['list'],
    ['html', { open: 'on-failure', outputFolder: 'playwright-report' }]
  ]
};

module.exports = config;


// off - do not record videos
// on
// retain-on-failure (only keep videos for failed tests)
// on-first-retry (record video only when a test fails and is retried once)