// function to generate markdown for README

function generateMarkdown(response) {
  return `
  
  ## Project Name
  ${response.title}

  ## GitHub Information
  ${response.github}
  ${response.repo}

  ## Developer Contact Information
  ${response.developer}
  
  ## About
  ${response.description}
  ${response.use}
  ${response.installation}
  ${response.contribution}
  ${response.test}
`;
}

module.exports = generateMarkdown;
