// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  function renderLicenseBadge(license) {
    if (license === "MIT") {
      return license = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]"
    } else if (license === "Apache 2.0") {
      return license = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]"
    } else return ""
  
  }  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  function renderLicenseLink(license) {
    if (license === "MIT") {
      return license = "(https://opensource.org/licenses/MIT)"
    } else if (license === "Apache 2.0") {
      return license = "(https://opensource.org/licenses/Apache-2.0)"
    } else return ""
  }  
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseSection(data.license)}
_____________________________________________________  
## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [Test](#test)
  - [Questions](#questions)
  - [License](#license)
______________________________________________________

## Description

${data.description}

## Installation

${data.installation}

## Usage

${data.usage}

## Credits

${data.contributing}

## Test

${data.test}

## Questions

For additional information, please visit my GitHub site or send me an email at the address below.  
  
GitHub Username: ${data.userName}  
GitHub Link: https://github.com/${data.userName}  
Email Address: ${data.email}  

## License

${renderLicenseLink(data.license)}
`;
}

module.exports = generateMarkdown;
