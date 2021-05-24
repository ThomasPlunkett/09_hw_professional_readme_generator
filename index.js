// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
// What are the questions that I need?
// GitHub username, Email, Project name, Short description of project, What kind of license, how to install, how to test, what do users need to know, and contributing.
const questions = [
    inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your GitHub username?',
      message: 'github?',
    },
    {
        type: 'input',
        message: 'What is your email?',
        message: 'email',
    },
    {
        type: 'input',
        message: 'What is your Project name?',
        message: 'project',
    },
    {
        type: 'input',
        message: 'Hw would you describe your project?',
        message: 'description',
    },
    {
        type: 'list',
        message: 'What kind of license do you want?',
        message: 'license',
        choices: ['MIT', 'Apache', 'None']
    },
    {
        type: 'input',
        message: 'How is your project installed?',
        message: 'installation',
    },
    {
        type: 'input',
        message: 'How is your project tested?',
        message: 'test',
    },
    {
        type: 'input',
        message: 'What do users need to know about your project?',
        message: 'information',
    },
    {
        type: 'input',
        message: 'Who is contributing to your project?',
        message: 'contributions',
    },
  ])
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            const readMeContent = generateMarkdown(answers);
            console.log('Generating ReadMe...');
            fs.writeFile('DynamicReadMe.md', readMeContent, (err) =>
                err ? console.error(err) : console.log("success"))
        });

}


// Function call to initialize app
init();
