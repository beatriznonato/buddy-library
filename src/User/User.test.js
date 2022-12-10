import User from './User.js';

describe('User class test', () => {
    const user = new User();
    test('check that the User instance is done correctly', () => {
        expect(user instanceof User).toBe(true);
    });

    test('user registration with valid CPF', () => {
        expect(user.dataValidate('04408876902', "CPF")).toBe('Uhu! Registration with valid cpf!');
    });

    test('user registration with invalid CPF', () => {
        expect(() => user.dataValidate('044', "CPF")).toThrow('Too bad, registration with invalid CPF!');
    });

    test('user registration with correct EMAIL', () => {
        expect(user.dataValidate('bianonato@gmail.com', "EMAIL")).toBe('Huh! email created successfully!');
        expect(user.email).toBe('bianonato@gmail.com');
    });

    test('user with wrong email', () => {
        expect(() => user.dataValidate('bia_nonato@gmail.co', "EMAIL")).toThrow('Too bad, wrong email.');
    });

    test('user with valid phone number', () => {
        expect(user.dataValidate('11947092533', "PHONE")).toBe('Huh! correct phone number');
    });

    test('user with wrong phone number', () => {
        expect(() => user.dataValidate('1194ss92533', "PHONE")).toThrow('Too bad, wrong phone number.');
    });

    test('user with non-existent data', () => {
        expect(user.dataValidate('1993', "YEAR")).toBe('Too bad, non-existent data!');
    });
})
