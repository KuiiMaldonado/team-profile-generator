const inquirer = require('inquirer');
const fs = require('fs');

const inputIsNaN = (x) => {
    if(isNaN(x)) {
        return 'Input must be a (positive) number';
    }
    else
        return true;
}

function getManagerInfo(){
    inquirer.prompt([
        {
            type: "input",
            message: "What's the team manager's name?",
            name:'name',
        },
        {
            type: "input",
            message: "What's the team manager's id?",
            name:'id',
            validate: inputIsNaN,
        },
        {
            type: "input",
            message: "What's the team manager's email?",
            name:'email',
        },
        {
            type: "input",
            message: "What's the team manager's office number?",
            name:'officeNumber',
            validate: inputIsNaN,
        },
    ]).then(response => {
        console.log(response);
    });
}

getManagerInfo();