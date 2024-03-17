// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {

  return `<h1 align="center">${answers.projectName} 👋</h1>
  
  ![badge](https://img.shields.io/badge/license-${answers.projectName}-brightgreen)<br />
  
  ## Description
  🔍 ${answers.projectName}
  
  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  💾 ${answers.projectName}
  
  ## Usage
  💻 ${answers.projectName}
  
  ## License
  ![badge](https://img.shields.io/badge/license-${answers.projectName}-brightgreen)
  <br />
  This application is covered by the ${answers.projectName} license. 
  
  ## Contributing
  👪 ${answers.projectName}
  
  ## Tests
  ✏️ ${answers.projectName}
  
  ## Questions
  ✋ ${answers.projectName}<br />
  <br />
  :octocat: Find me on GitHub: [${answers.projectName}](https://github.com/${answers.projectName})<br />
  <br />
  ✉️ Email me with any questions: ${answers.email}<br /><br />
  
  _This README was generated with ❤️ by [README-generator](https://github.com/jpd61/README-generator) 🔥🔥🔥_`;
}

module.exports = generateMarkdown;
