
// required modules

const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

const generateMarkdown = require("./utils/generateMarkdown.js")

// array of questions for user

const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
    },
    {
        type: "input",
        name: "github",
        message: "What is your GitHub username?"

    },
    {
        type: "input",
        name: "repo",
        message: "What is the name of your GitHub repository?"
    },
    {
        type: "input",
        name: "developer",
        message: "What is your email address?"
    },
    {
        type: "input",
        name: "description",
        message: "Please write a brief description of your project."
    },
    {
        type: "input",
        name: "use",
        message: "Please describe instructions or examples of project usage."
    },
    {
        type: "input",
        name: "installation",
        message: "Please describe steps needed to install project."
    },
    {
        type: "input",
        name: "contribution",
        message: "Please describe guidelines for developer contributions to your project, if applicable."
    },
    {
        type: "input",
        name: "test",
        message: "Please provide tests written for your application together with instructions for use, if applicable."
    },
    ];

// function to write README to file

function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// function to initialize program

function init() {
    inquirer.prompt(questions) 
    // then function (promise function)
    .then(response => {
    //call function writeToFile
        writeToFile("ReadMe.md", generateMarkdown({...response}));
    })
}

// function call to initialize program
init();
