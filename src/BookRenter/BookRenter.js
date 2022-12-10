import User from '../User/User.js';

export default class BookRenter extends User {
    constructor(name, email, cpf, phone, address, codeL) {
        super(name, email, cpf, phone, address)
        
        this.codeL = codeL;
    } 
}