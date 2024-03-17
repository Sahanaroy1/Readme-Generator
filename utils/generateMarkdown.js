// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT"){
    `<img src="https://img.shields.io/badge/License-MIT-yellow.svg">`
  } else if (license === "Apache 2.0") {
   `<img src=" https://img.shields.io/badge/License-Apache_2.0-blue.svg">`
  } else if (license === "GPL 3.0") {
    `<img src=" https://img.shields.io/badge/License-GPLv3-blue.svg">`
   } else if (license === "BSD 3") {
    `<img src=" https://img.shields.io/badge/License-BSD_3--Clause-blue.svg">`
   } else{
    `<p>No Liscense found</p>`
   }
   
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {

  return `<h1>${answers.projectTitle}</h1>
  renderLicenseBadge(${answers.license})
  <br />
  <br />
  
  ## Description
  🔍 ${answers.description}
  
  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  💾 ${answers.installation}
  
  ## Usage
  💻 ${answers.usage}
  
  ## License
  ![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)
  <br />
  This application is covered by the ${answers.license} license. 
  
  ## Contributing
  👪 ${answers.contributing}
  
  ## Tests
  ✏️ ${answers.tests}
  
  ## Questions
  ${answers.questions}<br />
  <br />
  :octocat: Find me on GitHub: <a href="https://github.com/${answers.username}" target="_blank">${answers.username}</a><br />
  <br />
  ✉️ Email me with any questions: <a href="mailto:${answers.email}" target="_blank">${answers.email}</a><br /><br />
`;
}

module.exports = generateMarkdown;
