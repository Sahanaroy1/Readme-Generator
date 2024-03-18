// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  console.log(license);
  let badge = "";
  if (license === "MIT"){
     badge = "![badge](https://img.shields.io/badge/license-" + license + "-yellow)";
  } else if (license === "Apache 2.0") {
    badge = `"[![License](https://img.shields.io/badge/License-Apache_2.0-yellowgreen.svg)](https://opensource.org/licenses/Apache-2.0)"`;
    
  } else if (license === "GPL 3.0") {
    badge = "![badge](https://img.shields.io/badge/license-" + license + "-blue.svg)";  
   } else if (license === "BSD 3") {
    badge = "![badge](https://img.shields.io/badge/license-" + license + "-Clause-blue.svg)";
   } else{
    badge = "";
   }
   return badge;
   console.log(badge);
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink;

  switch(license) {
    case "MIT":
      licenseLink = "https://mit-license.org/";
      break;
    case "Apache":
      licenseLink = "https://opensource.org/licenses/Apache-2.0";
      break;
    case "GPL":
      licenseLink = "https://www.gnu.org/licenses/gpl-3.0";
      break;
    case "BSD":
      licenseLink = "https://opensource.org/licenses/BSD-3-Clause";
      break;
    default:
      licenseLink = "";
      break;
  }
  
  return licenseLink;
  console.log(licenseLink);
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  console.log(renderLicenseLink(license));
  let licenseSect = "";

  if (license != "None") {
    licenseSect += "Please see " + renderLicenseLink(license) + " to get detailed information for this license\n";
  }

  return licenseSect;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {

  
  return `<h1>${answers.projectTitle}</h1>
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
  <br />
  ${renderLicenseSection(answers.license)}
  
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
