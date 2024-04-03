const { defineConfig } = require('cypress');
const path = require('path');
const fs = require('fs');
const { merge } = require('mochawesome-merge');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  video: true,
  reporterOptions: {
    reportDir: 'reports/mochawesome/',
    overwrite: false,
    html: false,
    json: true,
    screenshotsFolder: 'reports/mochawesome/screenshots',
  },
  e2e: {
    baseUrl: 'https://todolistme.net/',
    watchForFileChanges: false,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on, config);
      on('after:run', async () => {
        const reportDir = path.join(__dirname, config.reporterOptions.reportDir);
        const jsonReportPattern = path.join(reportDir, '*.json');

        // Check if JSON report files exist
        if (fs.existsSync(jsonReportPattern)) {
          // Perform custom report merging and generation
          const mergedReport = await merge({ reportDir });
          await merge.create(mergedReport, {
            reportDir,
            inlineAssets: true,
          });
        } else {
          console.log('No JSON report files found to merge.');
        }
      });
    },
  },
});
