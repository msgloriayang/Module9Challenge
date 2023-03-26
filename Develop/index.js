// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      message: "What's the project title?",
      name: 'title',
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return 'Please enter a project title.';
        }
      },
    },
  ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // TODO: implement function
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log(answers);
        // TODO: call writeToFile function and pass in answers
}

// Function call to initialize app
init();
