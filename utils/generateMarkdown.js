const generateTableContents = confirmTableContent => {
  if (!confirmTableContent) {
      return '';
  } else {
  return `
  # Table of Contents
  1. Project Description
  2. Installation
  3. Usage
  4. License
  5. Credits
  6. Tests
  7. Questions/Reach Me`
}
};


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
function generateMarkdown(data) {
  return `# ${data.title}
  ## ${generateTableContents}

  ## ${data.description}

  ## ${data.description}

  ## ${data.description}

  ## ${data.description}

  ## ${data.description}

  ## ${data.description}

  ## ${data.description}

  ## ${data.description}

  ## ${data.description}

  

`;
}

module.exports = generateMarkdown;
