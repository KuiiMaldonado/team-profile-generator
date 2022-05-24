const Manager = require('../lib/manager');

describe('Manager', () => {
    describe('Initialization', () => {
        it('Should create an object with name, id and email if provided arguments', () => {
            const manager = new Manager('Cuitlahuac', 1, 'cuitlahuac.maldonado@gmail.com', 51);

            expect(manager.name).toEqual('Cuitlahuac');
            expect(manager.id).toEqual(1);
            expect(manager.email).toEqual('cuitlahuac.maldonado@gmail.com');
            expect(manager.officeNumber).toEqual(51);
        });

        it("Should throw an error if provided no argument", () => {
            const cb = () => new Manager();

            expect(cb).toThrow();
        });

        it("Should throw an error if 'name' is not a string", () => {
            const cb = () => new Manager(5, 1, 'cuitlahuac.maldonado@gmail.com', 51);
            const err = new Error("Expected parameter 'name' to be a non-empty string");

            expect(cb).toThrowError(err);
        });

        it("Should throw an error if 'id' is not a number", () => {
            const cb = () => new Manager("Cuitlahuac", "uno", 'cuitlahuac.maldonado@gmail.com', 51);
            const err = new Error("Expected parameter 'age' to be a non-negative number");

            expect(cb).toThrowError(err);
        });

        it("Should throw an error if 'email' is not a string", () => {
            const cb = () => new Manager("Cuitlahuac", 1, 5, 51);
            const err = new Error("Expected parameter 'email' to be a non-empty string");

            expect(cb).toThrowError(err);
        });

        it("Should throw an error if 'officeNumber' is not a number", () => {
            const cb = () => new Manager("Cuitlahuac", 1, 'cuitlahuac.maldonado@gmail.com', "cincuenta");
            const err = new Error("Expected parameter 'officeNUmber' to be a non-negative number");

            expect(cb).toThrowError(err);
        });
    });

    describe('Object methods', () => {
        it('Should return the name of the employee object', () => {
            const manager = new Manager('Cuitlahuac', 1, 'cuitlahuac.maldonado@gmail.com', 51);

            expect(manager.getName()).toEqual('Cuitlahuac');
        });

        it('Should return the id of the employee object', () => {
            const manager = new Manager('Cuitlahuac', 1, 'cuitlahuac.maldonado@gmail.com', 51);

            expect(manager.getId()).toEqual(1);
        });

        it('Should return the email of the employee object', () => {
            const manager = new Manager('Cuitlahuac', 1, 'cuitlahuac.maldonado@gmail.com', 51);

            expect(manager.getEmail()).toEqual('cuitlahuac.maldonado@gmail.com');
        });

        it('Should return the role of the employee object', () => {
            const manager = new Manager('Cuitlahuac', 1, 'cuitlahuac.maldonado@gmail.com', 51);

            expect(manager.getRole()).toEqual('Manager');
        });
    });
});