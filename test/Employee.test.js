const Employee = require('../lib/employee');

describe('Employee', () => {
    describe('Initialization', () => {
        it('Should create an object with name, id and email if provided arguments', () => {
            const employee = new Employee('Cuitlahuac', 1, 'cuitlahuac.maldonado@gmail.com');

            expect(employee.name).toEqual('Cuitlahuac');
            expect(employee.id).toEqual(1);
            expect(employee.email).toEqual('cuitlahuac.maldonado@gmail.com');
        });
    });
});