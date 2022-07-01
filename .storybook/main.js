// .storybook/main.js

const path = require('path');

// Export a function. Accept the base config as the only param.

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    'storybook-addon-sass-postcss',
  ],
  "framework": "@storybook/react",
}