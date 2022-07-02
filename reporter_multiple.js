const report = require("multiple-cucumber-html-reporter");
report.generate({
  jsonDir: "reports/", // ** Path of .json file **//
  reportPath: "./reports/cucumber-htmlreport.html",
  // jsonFile:'cucumber.json',
  metadata: {
    browser: {
      name: "API",
      version: "N/A",
    },
    device: "Macbook Pro 15.6 inch",
    platform: {
      name: "MACOS",
      version: "Montery",
    },
  },
  displayDuration: true,
  durationInMS: true,
  displayReportTime: true,
  customStyle:"reports/customizedreport.css",
});
