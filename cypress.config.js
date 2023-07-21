const { defineConfig } = require("cypress");
const context = require("./config/context.json")
require("dotenv").config()

module.exports = defineConfig({
  reporter: 'mochawesome',
  e2e: {
    baseUrl: context[process.env.CONTEXT].baseUrl,
    specPattern: `**/${process.env.CONTEXT}/*.cy.js`,
    video: false,
    screenshotOnRunFailure: true,
    async setupNodeEvents(on, config) {
      return require("./config/plugin")(on, config);
    },
  },
});
