const Employee = require('./employee');

class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
        super(name, id, 'Engineer', email);
        this.gitHub = gitHub;
    }
}