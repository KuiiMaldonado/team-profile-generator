const Engineer = require('../lib/engineer');

describe('Engineer', () => {
    describe('Initialization', () => {
        it('Should create an object with name, id and email if provided arguments', () => {
            const engineer = new Engineer('Cuitlahuac', 1, 'cuitlahuac.maldonado@gmail.com', 'kuiimaldonado');

            expect(engineer.name).toEqual('Cuitlahuac');
            expect(engineer.id).toEqual(1);
            expect(engineer.email).toEqual('cuitlahuac.maldonado@gmail.com');
            expect(engineer.gitHub).toEqual('kuiimaldonado');
        });

        it("Should throw an error if provided no argument", () => {
            const cb = () => new Engineer();

            expect(cb).toThrow();
        });

        it("Should throw an error if 'name' is not a string", () => {
            const cb = () => new Engineer(5, 1, 'cuitlahuac.maldonado@gmail.com', 'kuiimaldonado');
            const err = new Error("Expected parameter 'name' to be a non-empty string");

            expect(cb).toThrowError(err);
        });

        it("Should throw an error if 'id' is not a number", () => {
            const cb = () => new Engineer("Cuitlahuac", "uno", 'cuitlahuac.maldonado@gmail.com', 'kuiimaldonado');
            const err = new Error("Expected parameter 'id' to be a non-negative number");

            expect(cb).toThrowError(err);
        });

        it("Should throw an error if 'email' is not a string", () => {
            const cb = () => new Engineer("Cuitlahuac", 1, 5, 'kuiimaldonado');
            const err = new Error("Expected parameter 'email' to be a non-empty string");

            expect(cb).toThrowError(err);
        });

        it("Should throw an error if 'github' is not a string", () => {
            const cb = () => new Engineer("Cuitlahuac", 1, 'cuitlahuac.maldonado@gmail.com', 51);
            const err = new Error("Expected parameter 'github' to be a non-empty string");

            expect(cb).toThrowError(err);
        });
    });

    describe('Object methods', () => {
        it('Should return the name of the employee object', () => {
            const engineer = new Engineer('Cuitlahuac', 1, 'cuitlahuac.maldonado@gmail.com', 'kuiimaldonado');

            expect(engineer.getName()).toEqual('Cuitlahuac');
        });

        it('Should return the id of the employee object', () => {
            const engineer = new Engineer('Cuitlahuac', 1, 'cuitlahuac.maldonado@gmail.com', 'kuiimaldonado');

            expect(engineer.getId()).toEqual(1);
        });

        it('Should return the email of the employee object', () => {
            const engineer = new Engineer('Cuitlahuac', 1, 'cuitlahuac.maldonado@gmail.com', 'kuiimaldonado');

            expect(engineer.getEmail()).toEqual('cuitlahuac.maldonado@gmail.com');
        });

        it('Should return the github of the employee object', () => {
            const engineer = new Engineer('Cuitlahuac', 1, 'cuitlahuac.maldonado@gmail.com', 'kuiimaldonado');

            expect(engineer.getGitHub()).toEqual('kuiimaldonado');
        });

        it('Should return the role of the employee object', () => {
            const engineer = new Engineer('Cuitlahuac', 1, 'cuitlahuac.maldonado@gmail.com', 'kuiimaldonado');

            expect(engineer.getRole()).toEqual('Engineer');
        });
    });
});