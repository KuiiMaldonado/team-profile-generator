const Employee = require('./employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, 'Intern', email);
        this.school = school;
    }
}