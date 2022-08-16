const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

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
    return option === 'Finish my team';
}

async function init() {

    const engineersArray = [];
    const internsArray = [];

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
                const intern = new Intern(internName, internID, internEmail, school);
                internsArray.push(intern);
            }
        }
    }
    const employeesArray = [manager, ...engineersArray, ...internsArray];
    generateHTML(employeesArray);
}

function generateHTML(employeesArray) {
    let employees = '';
    let specific;

    for (let i = 0; i < employeesArray.length; i++) {

        if (employeesArray[i].getRole() === 'Manager')
            specific = 'Office number: ' + employeesArray[i].getOfficeNumber();
        else if (employeesArray[i].getRole() === 'Engineer')
            specific = 'GitHub: ' + employeesArray[i].getGitHub();
        else if (employeesArray[i].getRole() === 'Intern')
            specific = 'School: ' + employeesArray[i].getSchool();

        let employeeString = `<div class="col-3 text-center">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">${employeesArray[i].getName()}</h4>
                            <h5 class="card-title">${employeesArray[i].getRole()}</h5>
                        </div>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${employeesArray[i].getId()}</li>
                        <li class="list-group-item">Email: ${employeesArray[i].getEmail()}</li>
                        <li class="list-group-item">${specific}</li>
                    </ul>
                </div>\n`
        employees = String.prototype.concat(employees, employeeString);
    }
    const data = `<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Team Manager</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css"/>
    </head>
    <body>
        <div class="container banner">
            <div class="row">
                <div class="col-12 text-center">
                    <h1>My Team</h1>
                </div>
            </div>
        </div>
        <div class="conatiner">
            <div class=" card-row row d-flex flex-wrap justify-content-around">
                ${employees}
            </div>
        </div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    </body>
</html>`

    fs.writeFile('./dist/index.html', data, err => {

    });
}

init().then(() => console.log('Thanks for using this app'));