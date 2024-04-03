# Skedda Tests
<h1 align="center">Web Automation with Cypress</h1>

## Links

- [Repo](https://github.com/marmiou/skedda-tests "Automation with Cypress framework")

## Prerequisites

Tests are developed with node version: v16.20.2 and npm 8.19.4.

### For Windows Users
Please ensure you have Git Bash installed to run the commands as described in this guide. Git Bash provides a Bash emulation used to run Git from the command line as well as to execute Unix commands. This will enable you to use the same commands provided for macOS (and Linux) without modification.

To install Git Bash, download and install Git for Windows from [git-scm.com](https://git-scm.com/download/win). During installation, select the option to "Use Git and optional Unix tools from the Windows Command Prompt" if you wish to run Git commands from Windows Command Prompt or PowerShell as well.

## Installation

Clone the repo from GitHub:
#### `git clone git@github.com:marmiou/skedda-tests.git`

To install dependencies:
#### `yarn install`

## Available Commands

To open the Cypress application:
#### `yarn run cypress open`

To run the tests via the Cypress app:
#### `yarn run cypress open`

Or, to run a specific test via the CLI:
#### `yarn cypress run --spec cypress/e2e/ListsFeature.cy.js --reporter mochawesome`

Or, to run all e2e tests:
#### `yarn cypress run --spec "cypress/e2e/**/*.cy.js" --reporter mochawesome`
#### `yarn cy:run --spec "cypress/e2e/**/*.cy.js" --reporter mochawesome`

Reports of the run can be found under the directory:
#### `mochawesome/reports`

## Built With

- JavaScript
- Node
- Yarn
- Cypress
- Mochawesome reporter

## Author

**Markella Efthymiou**
- [GitHub Profile](https://github.com/marmiou/ "Markella Efthymiou")
- [Email](mailto:efthymioumarkella@gmail.com?subject=Hi "Hi!")

## 🤝 Support

Contributions and issues are welcome!

Give a ⭐️ if you like this project!
