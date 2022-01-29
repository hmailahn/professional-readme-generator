

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
function renderLicenseLink(licenseType) {
  
  license = licenseType.split(' ').join(' ');
  if (!licenseType) {
    return '';
    
  }
  else if (license === 'Apache') {
    return `https://www.apache.org/licenses/LICENSE-2.0`
  
  } else if (license === 'GNU GPL v3') {
    return `https://choosealicense.com/licenses/gpl-3.0/`
  
  } else if (license === 'MIT') {
    return `https://choosealicense.com/licenses/mit/`
 
  } else if (license === 'ISC') {
    return `https://choosealicense.com/licenses/isc/`
  
  } else if (license === 'Mozilla Public License 2.0') {
    return `https://opensource.org/licenses/MPL-2.0`
   
  };
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(licenseType) { 
  license = licenseType.split(' ').join(' ');
  if (!licenseType) {
      return '';
  } else {
return `
This project is covered under the ${license} license. If you would like more information about this license click here: `
}
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
