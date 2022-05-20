const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./manager');
const Engineer = require('./engineer');
const Intern = require('./intern');

const inputIsNaN = (x) => {
    if(isNaN(x)) {
        return 'Input must be a (positive) number';
    }
    else
        return true;
}

async function getEmployeeInfo(isManager, isEngineer, isIntern){

    const result = await inquirer.prompt([
        {
            type: "input",
            message: "What's the employee name?",
            name:'name',
        },
        {
            type: "input",
            message: "What's the employee id?",
            name:'id',
            validate: inputIsNaN,
        },
        {
            type: "input",
            message: "What's the employee email?",
            name:'email',
        },
        {
            type: "input",
            message: "What's the team manager's office number?",
            name:'officeNumber',
            validate: inputIsNaN,
            when: isManager,
        },
        {
            type: "input",
            message: "What's the engineer github",
            name:'github',
            when: isEngineer,
        },
        {
            type: "input",
            message: "What's the intern's school",
            name:'school',
            when: isIntern,
        },
    ]);
    console.log('Termina async');
    return result;
}

async function getManagerInfo() {
    const employeeInfo = await getEmployeeInfo(true, false, false);
    return employeeInfo;
}

async function init() {
    const managerInfo = await getManagerInfo();
    const {name, id, email, officeNumber} = managerInfo;
    const manager = new Manager(name, id, email, officeNumber);
    console.log(manager);
}

init();