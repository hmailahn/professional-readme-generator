

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  const licenseBadge = data.licenseType
  if (licenseBadge != 'None') {
    badge = ""
  }
  else if (licenseBadge === 'Apache') {
    badge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  } else if (licenseBadge === 'GNU GPL v3') {
    badge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
  } else if (licenseBadge === 'MIT') {
    badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  } else if (licenseBadge === 'ISC') {
    badge = "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)"
  } else if (licenseBadge === 'Eclipse Public License v1.0') {
    badge = "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)"
  } else if (licenseBadge === 'Mozilla Public License 2.0') {
    badge = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)" 
  };
  return badge
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  const licenseLink = data.licenseType
  if (licenseType != 'None') {
    link = ""
  }
  else if (licenseLink === 'Apache') {
    link = "https://www.apache.org/licenses/LICENSE-2.0"
  } else if (licenseLink === 'GNU GPL v3') {
    link = "https://choosealicense.com/licenses/gpl-3.0/"
  } else if (licenseLink === 'MIT') {
    link = "https://choosealicense.com/licenses/mit/"
  } else if (licenseLink === 'ISC') {
    link = "https://choosealicense.com/licenses/isc/"
  } else if (licenseLink === 'Eclipse Public License v1.0') {
    link = "https://opensource.org/licenses/EPL-1.0"
  } else if (licenseLink === 'Mozilla Public License 2.0') {
    link = "https://opensource.org/licenses/MPL-2.0"
  };
  return link
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data, link) { 
return `
This project is covered under the ${licenseType} license. If you would like more information about this license here: ${link}`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data, badge) {
  return `
  ${renderLicenseBadge(badge)}
  # ${data.title}

  ## Table of Contents:
  1. [Description](#Description)
  2. [Installation](#Installation)
  3. [Usage](#Usage)
  4. [License](#License)
  5. [Credits](#Credits)
  6. [Tests](#Tests)
  7. [Questions](#Questions)

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Credits
  Contributors and Githubs:
  ${data.credits}

  ## Tests 
  ${data.tests}

  ## License
  ${renderLicenseSection}


  ## Questions
  Reach me at https://github.com/${data.github}
  and: ${data.email}

`;
}

module.exports = generateMarkdown;
