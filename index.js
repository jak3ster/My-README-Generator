// // TODO: Include packages needed for this application

// // TODO: Create an array of questions for user input
// const questions = [];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();

// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README

const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const emailValidator = require('email-validator');

const generateMarkdown = require('./utils/generateMarkdown');

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?',
        validate: (value) => {
            if (value) { return true } else { return 'Please enter your project title.' }
        },
    },
    {
        type: 'input',
        name: 'repo',
        message: 'What is the repository name of your project?',
        validate: (value) => {
            if (value) { return true } else { return 'Please enter your repository name.' }
        },
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description of your project?',
        validate: (value) => {
            if (value) { return true } else { return 'Please enter description.' }
        },
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter instructions for installation',
        validate: (value) => {
            if (value) { return true } else { return 'Please enter instructions.' }
        },
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the usage information?',
        validate: (value) => {
            if (value) { return true } else { return 'Please enter usage information.' }
        },
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'What are contribution guidelines?',
        validate: (value) => {
            if (value) { return true } else { return 'Please enter your contribution guidelines.' }
        },
    },
    {
        type: 'input',
        name: 'test',
        message: 'What are the test instructions?',
        validate: (value) => {
            if (value) { return true } else { return 'Please enter your test instructions.' }
        },
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project?',
        choices: ["MIT", "ISC", "GNU GPLv3"],
        validate: (value) => {
            if (value) { return true } else { return 'Please choose a license.' }
        },
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
        validate: (value) => {
            if (value) { return true } else { return 'Please enter your username.' }
        },
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        validate: (value) => {
            if (emailValidator.validate(value)) {
                return true
            } else { return 'Please enter a valid email address' }
        },
    }
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log('README file successfully created!');
        }
    })
};

// function to initialize program
function init() {
    inquirer.prompt(questions).then(function (data) {
        writeToFile("README.md", generateMarkdown(data));
    })
};

// function call to initialize program
init();