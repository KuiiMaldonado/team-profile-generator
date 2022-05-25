const Intern = require('../lib/intern');

describe('Intern', () => {
    describe('Initialization', () => {
        it('Should create an object with name, id and email if provided arguments', () => {
            const engineer = new Intern('Cuitlahuac', 1, 'cuitlahuac.maldonado@gmail.com', 'LaSalle');

            expect(engineer.name).toEqual('Cuitlahuac');
            expect(engineer.id).toEqual(1);
            expect(engineer.email).toEqual('cuitlahuac.maldonado@gmail.com');
            expect(engineer.school).toEqual('LaSalle');
        });

        it("Should throw an error if provided no argument", () => {
            const cb = () => new Intern();

            expect(cb).toThrow();
        });

        it("Should throw an error if 'name' is not a string", () => {
            const cb = () => new Intern(5, 1, 'cuitlahuac.maldonado@gmail.com', 'LaSalle');
            const err = new Error("Expected parameter 'name' to be a non-empty string");

            expect(cb).toThrowError(err);
        });

        it("Should throw an error if 'id' is not a number", () => {
            const cb = () => new Intern("Cuitlahuac", "uno", 'cuitlahuac.maldonado@gmail.com', 'LaSalle');
            const err = new Error("Expected parameter 'id' to be a non-negative number");

            expect(cb).toThrowError(err);
        });

        it("Should throw an error if 'email' is not a string", () => {
            const cb = () => new Intern("Cuitlahuac", 1, 5, 'LaSalle');
            const err = new Error("Expected parameter 'email' to be a non-empty string");

            expect(cb).toThrowError(err);
        });

        it("Should throw an error if 'school' is not a string", () => {
            const cb = () => new Intern("Cuitlahuac", 1, 'cuitlahuac.maldonado@gmail.com', 51);
            const err = new Error("Expected parameter 'school' to be a non-empty string");

            expect(cb).toThrowError(err);
        });
    });

    describe('Object methods', () => {
        it('Should return the name of the employee object', () => {
            const engineer = new Intern('Cuitlahuac', 1, 'cuitlahuac.maldonado@gmail.com', 'LaSalle');

            expect(engineer.getName()).toEqual('Cuitlahuac');
        });

        it('Should return the id of the employee object', () => {
            const engineer = new Intern('Cuitlahuac', 1, 'cuitlahuac.maldonado@gmail.com', 'LaSalle');

            expect(engineer.getId()).toEqual(1);
        });

        it('Should return the email of the employee object', () => {
            const engineer = new Intern('Cuitlahuac', 1, 'cuitlahuac.maldonado@gmail.com', 'LaSalle');

            expect(engineer.getEmail()).toEqual('cuitlahuac.maldonado@gmail.com');
        });

        it('Should return the github of the employee object', () => {
            const engineer = new Intern('Cuitlahuac', 1, 'cuitlahuac.maldonado@gmail.com', 'LaSalle');

            expect(engineer.getSchool()).toEqual('LaSalle');
        });

        it('Should return the role of the employee object', () => {
            const engineer = new Intern('Cuitlahuac', 1, 'cuitlahuac.maldonado@gmail.com', 'LaSalle');

            expect(engineer.getRole()).toEqual('Intern');
        });
    });
});