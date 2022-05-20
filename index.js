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

    return await inquirer.prompt([
        {
            type: "input",
            message: "What's the employee name?",
            name: 'name',
        },
        {
            type: "input",
            message: "What's the employee id?",
            name: 'id',
            validate: inputIsNaN,
        },
        {
            type: "input",
            message: "What's the employee email?",
            name: 'email',
        },
        {
            type: "input",
            message: "What's the team manager's office number?",
            name: 'officeNumber',
            validate: inputIsNaN,
            when: isManager,
        },
        {
            type: "input",
            message: "What's the engineer's github username?",
            name: 'github',
            when: isEngineer,
        },
        {
            type: "input",
            message: "What's the intern's school?",
            name: 'school',
            when: isIntern,
        },
    ]);
}

async function menu() {
    return await inquirer.prompt([
        {
            type: 'list',
            message: 'Please select an option: ',
            name: 'menuOption',
            choices: ['Add engineer', 'Add intern', 'Finish my team'],
        },
    ]);
}

async function getManagerInfo() {
    return await getEmployeeInfo(true, false, false);
}

async function getEngineerInfo() {
    return await getEmployeeInfo(false, true, false);
}

async function getInternInfo() {
    return await getEmployeeInfo(false, false, true);
}

function isTeamFinished(option) {
    if(option === 'Finish my team')
        return true;
    else
        return false;
}

async function init() {

    const engineersArray = [];
    const internsArray = [];
    //Ask for manager's data
    const managerInfo = await getManagerInfo();
    const {name:managerName, id:managerID, email:managerEmail, officeNumber} = managerInfo;
    const manager = new Manager(managerName, managerID, managerEmail, officeNumber);

    while (true) {
        const option = await menu();
        if(isTeamFinished(option.menuOption))
            break;
        else {
            if (option.menuOption === 'Add engineer') {
                const engineerInfo = await getEngineerInfo();
                const {name:engineerName, id:engineerID, email:engineerEmail, github} = engineerInfo;
                const engineer = new Engineer(engineerName, engineerID, engineerEmail, github);
                engineersArray.push(engineer);
            }
            else {
                const internInfo = await getInternInfo();
                const {name:internName, id:internID, email:internEmail, school} = internInfo;
                const intern = new Intern(internName, internID, internInfo, school);
                internsArray.push(intern);
            }
        }
    }
    const employeesArray = [manager, ...engineersArray, ...internsArray];
    console.log(employeesArray);
}

init().then(() => console.log('Thanks for using this app'));