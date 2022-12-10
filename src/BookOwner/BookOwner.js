import User from '../User/User.js';

export default class BookOwner extends User {
    constructor(name, email, cpf, phone, address, codeD) {
        super(name, email, cpf, phone, address)
        
        this.codeD = codeD;
    }
}
