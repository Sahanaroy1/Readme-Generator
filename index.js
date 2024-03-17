// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = require('./utils/questions.js');;



// TODO: Create a function to write README file
function writeToFile(answers){

    fs.writeFile('README.md', answers, err =>{
        if(err) {
            console.log(err);
        }else{
            console.log("Successfully added Readme file!");
        }
    })
};


// TODO: Create a function to initialize app
function init() {
    inquirer
.prompt(questions)
.then((answers) =>{

    const markdown = generateMarkdown(answers);
   
    writeToFile(markdown);
});
}

// Function call to initialize app
init();
