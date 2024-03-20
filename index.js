//included the packages
const inquirer = require('inquirer');
const fs = require('fs');


const generateMarkdown = require('./utils/generateMarkdown.js');

// Included the array of questions from question.js file for user input
const questions = require('./utils/questions.js');;


//To write README file
function writeToFile(answers){

    fs.writeFile('README.md', answers, err =>{
        if(err) {
            console.log(err);
        }else{
            console.log("Successfully added Readme file!");
        }
    })
};


// To initialize app
function init() {
    inquirer
.prompt(questions)
.then((answers) =>{

    const markdown = generateMarkdown(answers);
   
    writeToFile(markdown);
});
}

// To call initialize app
init();
