// Created to show the license badge selected by user
function renderLicenseBadge(license) {

  let badge = "";
  if (license === "MIT"){
    badge =  `![MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
  } else if (license === "Apache 2.0") {
    badge = `![Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`;  
  } else if (license === "GPL 3.0") {
    badge =  `![GPL 3.0](https://img.shields.io/badge/License-GPL%20v3-blue.svg)`;  
   } else if (license === "BSD 3") {
    badge = `![BSD 3](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)`;
   } else{
    badge = "";
   }
   return badge;
}

// Created to select the link of the license by user input
function renderLicenseLink(license) {
  let licenseLink = "";
  switch(license) {

    case "MIT":
      licenseLink = "https://mit-license.org/" ;
      break;
    case "Apache 2.0":
      licenseLink = "https://opensource.org/licenses/Apache-2.0";
      break;
    case "GPL 3.0":
      licenseLink = "https://www.gnu.org/licenses/gpl-3.0";
      break;
    case "BSD 3":
      licenseLink = "https://opensource.org/licenses/BSD-3-Clause";
      break;
    default:
      licenseLink = "";
      break;
  }
  return licenseLink;
}

// Created to show the link of the license on the readme 
function renderLicenseSection(license) {

  let licenseSect = "";

  if (license != "None") {
    licenseSect += "The code is available under " + renderLicenseLink(license) + " license." ;
  }
  return licenseSect;
}

// To generate the readme 
function generateMarkdown(answers) {

  
  return `
  ## ${answers.projectTitle}
  ${renderLicenseBadge(answers.license)}
 
  
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

  ${renderLicenseSection(answers.license)}
  
  ## Contributing
  👪 ${answers.contributing}
  
  ## Tests
  ✏️ ${answers.tests}
  
  ## Questions
  ${answers.questions}

  :octocat: Find me on GitHub: ${answers.username}

  ✉️ Email me with any questions: ${answers.email}
`;
}

module.exports = generateMarkdown;
