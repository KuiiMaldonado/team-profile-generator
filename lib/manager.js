const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        if(isNaN(officeNumber) || officeNumber < 0) {
            throw new Error("Expected parameter 'officeNUmber' to be a non-negative number");
        }
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;