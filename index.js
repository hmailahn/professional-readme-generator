// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');


// TODO: Create an array of questions for user input
// const questions = [];



const promptUser = () => {
    ///if there's no 'projects arrway property, create on

    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your Project?',
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
            message: 'Provide a description of the project:',
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
            type: 'input',
            name: 'installation',
            message: 'Provide a description on how a user would install your project:'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions and examples for use for your project:',
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
            type: 'input',
            name: 'credits',
            message: 'Provide any contributors name and github:',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Are there tests for your application?',
        },
        {
            type: 'list',
            name: 'licenseType',
            message: 'Select a license for your project:',
            choices: ['Apache', 'GNU GPL v3', 'MIT', 'ISC', 'Eclipse Public License v1.0', 'Mozilla Public License 2.0', 'None']
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
            console.log(projectDetails);

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
//      -work on table of contents only displaying selected options --- considering doing this by breaking up things into different functions on if they should apppear?
//-License (generateMarkdown file)
//      -Create a function that returns a license badge based on which license is passed in
//          -If there is no license, return an empty string
//      -Create a function that returns the license link
//          -If there is no license, return an empty string