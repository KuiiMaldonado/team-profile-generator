const Employee = require('./employee');

class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
        if(typeof gitHub !== "string" || !gitHub.trim().length) {
            throw new Error("Expected parameter 'github' to be a non-empty string");
        }
        super(name, id, email);
        this.gitHub = gitHub;
    }

    getGitHub() {
        return this.gitHub;
    }

    getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer;