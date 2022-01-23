// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');


// TODO: Create an array of questions for user input
// const questions = [];

projectDetails = [];

const promptUser = projectDetails => {
    ///if there's no 'projects arrway property, create on
    
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
            message: 'What is your email address?'
        }
    ]);
};

promptUser()
.then(projectDetails => {
    const readMeFile = generateMarkdown(projectDetails)
    fs.writeFile('./readMeOutput.md', readMeFile, err => {
        if (err) throw new Error(err);
        console.log('Page created! Check out readMeOutput in this directory to see it!');
        console.log(projectDetails)
        console.log(projectDetails.title) 
    })
})

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) { }


//1/23 4:49pm - 
// -table of contents confirm-
//      -take out input for table of contents 
//      -work on table of contents function in generateMarkdown
//      -add to string for read me
//      -figure out how link table of contents
// -work on readme string output
//      -start placing readme string output
//      -add in date in string output
//      -fix functions to write string output onto readme file
//-License (generateMarkdown file)
//      -Create a function that returns a license badge based on which license is passed in
//          -If there is no license, return an empty string 
//      -Create a function that returns the license link
//          -If there is no license, return an empty string