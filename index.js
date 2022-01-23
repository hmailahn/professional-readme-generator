// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
// const questions = [];

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'projectTitle',
            message: 'What is the title of your Project? (required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of the project (Required)',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('You need to enter a project description!');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmTableContent',
            message: 'Would you like to provide a table of contents?',
            default: true
        },
        {
            type: 'input',
            name: 'tableContent',
            message: 'Add table of contents:',
            when: ({ confirmTableContent }) => confirmTableContent
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Provide a description on how a user would install your project:'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions and examples for use: (required)',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('You need to enter an usage description!');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmCredits',
            message: 'Would you like to add any contributors?',
            default: false
        },
        {
            type: 'input',
            name: 'credits',
            message: 'Provide contributors name:',
            when: ({ confirmCredits }) => confirmCredits
        },
        {
            type: 'input',
            name: 'contributorsGitHub',
            message: 'Provide contributors github username:',
            when: ({ confirmCredits }) => confirmCredits
        },
        {
            type: 'confirm',
            name: 'testsConfirm',
            message: 'Would you like to write any tests for your application and how to run it?',
            default: false
        },
        {
            type: 'checkbox',
            name: 'licenseType',
            message: 'Select a license for your project:',
            choices: ['MIT', 'Apache', 'GPL', 'Affero GPL', 'Artistic License 2.0', 'Mozilla Public License Version 2.0', 'Eclipse Public License v1.0']
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your github username?',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('You need to enter your github username!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
            
        }
        

    ])
}



// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
