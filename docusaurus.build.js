// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const baseConfig = require('./docusaurus.config');

/** @type {import('@docusaurus/types').Config} */
const config = {
  ...baseConfig,
  baseUrl: '/knot-docs/',
};

module.exports = config;
