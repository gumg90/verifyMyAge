/**
 * @type {Cypress.PluginConfig}
 */
const AllureWriter = require("@shelex/cypress-allure-plugin/writer");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");

module.exports = async (on, config) => {
    await preprocessor.addCucumberPreprocessorPlugin(on, config);
    on("file:preprocessor", browserify.default(config));
    AllureWriter(on, config);
    return config;
};