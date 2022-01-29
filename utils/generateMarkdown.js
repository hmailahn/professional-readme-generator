

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(licenseType) {
if (!licenseType){ 
  return '';
} else {
  license = licenseType.split(' ').join(' ');
  return `![License for README](https://img.shields.io/badge/license-${license}-green/)`;
}

}



// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data, link) {
  
  licenseLink = data.licenseType;
  if (licenseLink != 'None') {
    link = "";
    return link;
  }
  else if (licenseLink === 'Apache') {
    link = "https://www.apache.org/licenses/LICENSE-2.0"
    return link;
  } else if (licenseLink === 'GNU GPL v3') {
    link = "https://choosealicense.com/licenses/gpl-3.0/"
    return link;
  } else if (licenseLink === 'MIT') {
    link = "https://choosealicense.com/licenses/mit/"
    return link;
  } else if (licenseLink === 'ISC') {
    link = "https://choosealicense.com/licenses/isc/"
    return link;
  } else if (licenseLink === 'Mozilla Public License 2.0') {
    link = "https://opensource.org/licenses/MPL-2.0"
    return link;
  };
  return link
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(licenseType) { 
  license = licenseType.split(' ').join(' ');
return `
This project is covered under the ${license} license. If you would like more information about this license here: `
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data, badge) {
  return `
  ${renderLicenseBadge(data.licenseType)}
  
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
  ${renderLicenseSection(data.licenseType)}
  ${renderLicenseLink(data.licenseType)}


  ## Questions
  Reach me at https://github.com/${data.github}
  and: ${data.email}

`;
}

module.exports = generateMarkdown;
