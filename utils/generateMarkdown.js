

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(data) {
//   if (data.licenseType.choices)
// }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  # Table of Contents:
  1. [Description](#description)
  2. [Installation](#install)
  3. [Usage](#usage)
  4. [License](#license)
  5. [Credits](#credits)
  6. [Testss](#tests)
  7. [Questions/Reach-Me](#questions)

  # <a id="description">
  Description
  </a>

  ${data.description}

  # <a id="install">
  Installation
  </a>

  ${data.installation}

  # <a id="usage">
  Usage
  </a>

  ${data.usage}

  # <a id="credits">
  Credits
  </a>

  ${data.credits}

  # <a id="tests">
  Tests </a>
  ${data.tests}

  # <a id="license"> 
  License
  </a>

  ${data.licenseType}


  # <a id="questions">
  Questions/Reach-Me
  </a>
  Reach me at https://github.com/${data.github}
  and: ${data.email}

`;
}

module.exports = generateMarkdown;
