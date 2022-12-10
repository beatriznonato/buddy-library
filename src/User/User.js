export default class User {
	#cpf;
	constructor(name, email, cpf, phone, address) {
		this.name = name;
		this.email = email;
		this.#cpf = cpf;
		this.phone = phone;
		this.address = address;
	}
	
	get cpf(){
		return this.#cpf;
	}
	
	set cpf(cpf) {
		return this.#cpf = cpf;
	}
	
	dataValidate(keyValue, keyType) {
		switch (keyType) {
			case "CPF":
			let regex = /([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/;
			if (regex.test(keyValue)) {
				this.#cpf = keyValue;
				return 'Uhu! Registration with valid cpf!';
			} else {
				throw new Error('Too bad, registration with invalid CPF!')
			}
			case 'EMAIL': 
			let emailRegex = /^[a-z0-9.]+@[a-z0-9]+.[a-z]+.([a-z]+)?$/i;
			if (emailRegex.test(keyValue)) {
				this.email = keyValue;
				return 'Huh! email created successfully!'
			} else {
				throw new Error('Too bad, wrong email.')
			}
			case 'PHONE':
			let phoneRegex = /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/;
			if (phoneRegex.test(keyValue)) {
				this.phone = keyValue;
				return 'Huh! correct phone number'
			} else {
				throw new Error('Too bad, wrong phone number.')
			}
			default:
                return 'Too bad, non-existent data!';
		}
	}
}
