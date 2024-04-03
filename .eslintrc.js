module.exports = {
  env: {
    // Defines the environments your code runs in
    browser: true,
    es2021: true,
    node: true,
    'cypress/globals': true, // Enables global variables available in Cypress tests
  },
  extends: [
    // Base ESLint rules
    'eslint:recommended',
    // Add other configurations or plugins as needed, for example, if using React:
    // 'plugin:react/recommended',
    // Cypress specific rules
    'plugin:cypress/recommended',
  ],
  parserOptions: {
    ecmaVersion: 12, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
  },
  plugins: [
    'cypress', // Enables ESLint plugin for Cypress
  ],
  rules: {
    // Add custom rules or override existing rules here
    // Example: 'no-unused-vars': 'warn',
  },
  overrides: [
    {
      // Specific overrides for test files
      files: ['**/cypress/**/*.js'],
      rules: {
        // Rules specific to Cypress test files
        'no-unused-expressions': 'off', // Example override, adjust as needed
      },
    },
  ],
};
