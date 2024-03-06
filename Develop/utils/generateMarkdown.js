function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }

  return `[![License](https://img.shields.io/badge/License-${license}-blue.svg)](https://opensource.org/licenses/${license})`;
}

// Function that returns the license link
function renderLicenseLink(license) {
  if (!license) {
    return '';
  }

  return `[License](https://opensource.org/licenses/${license})`;
}

// Function that returns the license section of README
function renderLicenseSection(license) {
  if (!license) {
    return '';
  }

  return `This application is covered under the ${license} license.`;
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
${renderLicenseBadge(data.license)}
${renderLicenseLink(data.license)}
${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
For questions about the project, feel free to reach out to me via [GitHub](https://github.com/${data.github}) or email at ${data.email}.
  `;
}

module.exports = generateMarkdown;