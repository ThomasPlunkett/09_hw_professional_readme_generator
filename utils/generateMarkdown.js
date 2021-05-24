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

`;
}

module.exports = generateMarkdown;
