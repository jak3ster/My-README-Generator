// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license.license == "None") {
    return "";
  }
  return '\n' + `![License Badge](https://img.shields.io/github/license/${license.github}/${license.repo})\n`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license.license == "None") {
    return "";
  }
  return `Licensed under the [${license.license} license](LICENSE).\n`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license.license == "None") {
    return "";
  }
  return `\n## License\nCopyright (c) [${license.github}](https://github.com/${license.github}). All rights reserved.\n`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let badge = renderLicenseBadge(data);
  let link = renderLicenseLink(data);
  let section = renderLicenseSection(data);
  let content =
    `# ${data.title}\n` +
    badge +
    `## Description

${data.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Contribution](#contribution)
* [Tests](#tests)
* [Questions](#questions)
* [License](#license)

## Installation

${data.installation}

## Usage

${data.usage}

## Contribution

${data.contribution}

## Tests

${data.test}

## Questions

* Checkout my [GitHub profile](https://github.com/${data.github})

* Any additional questions or feed back, feel free to [send an email](mailto:${data.email}).\n` +
    section +
    link;

  return content;
}

module.exports = generateMarkdown;
