const Employee = require('../lib/employee');

describe('Employee', () => {
    describe('Initialization', () => {
        it('Should create an object with name, id and email if provided arguments', () => {
            const employee = new Employee('Cuitlahuac', 1, 'cuitlahuac.maldonado@gmail.com');

            expect(employee.name).toEqual('Cuitlahuac');
            expect(employee.id).toEqual(1);
            expect(employee.email).toEqual('cuitlahuac.maldonado@gmail.com');
        });

        it("Should throw an error if provided no argument", () => {
            const cb = () => new Employee();

            expect(cb).toThrow();
        });

        it("Should throw an error if 'name' is not a string", () => {
           const cb = () => new Employee(5, 1, 'cuitlahuac.maldonado@gmail.com');
           const err = new Error("Expected parameter 'name' to be a non-empty string");

           expect(cb).toThrowError(err);
        });

        it("Should throw an error if 'id' is not a number", () => {
            const cb = () => new Employee("Cuitlahuac", "uno", 'cuitlahuac.maldonado@gmail.com');
            const err = new Error("Expected parameter 'age' to be a non-negative number");

            expect(cb).toThrowError(err);
        });

        it("Should throw an error if 'email' is not a string", () => {
            const cb = () => new Employee("Cuitlahuac", 1, 5);
            const err = new Error("Expected parameter 'email' to be a non-empty string");

            expect(cb).toThrowError(err);
        });
    });

    describe('Object methods', () => {
        it('Should return the name of the employee object', () => {
            const employee = new Employee('Cuitlahuac', 1, 'cuitlahuac.maldonado@gmail.com');

            expect(employee.getName()).toEqual('Cuitlahuac');
        });

        it('Should return the id of the employee object', () => {
            const employee = new Employee('Cuitlahuac', 1, 'cuitlahuac.maldonado@gmail.com');

            expect(employee.getId()).toEqual(1);
        });

        it('Should return the email of the employee object', () => {
            const employee = new Employee('Cuitlahuac', 1, 'cuitlahuac.maldonado@gmail.com');

            expect(employee.getEmail()).toEqual('cuitlahuac.maldonado@gmail.com');
        });

        it('Should return the role of the employee object', () => {
            const employee = new Employee('Cuitlahuac', 1, 'cuitlahuac.maldonado@gmail.com');

            expect(employee.getRole()).toEqual('Employee');
        });
    });
});