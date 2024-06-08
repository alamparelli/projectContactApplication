import { DbConnection } from "./connectDb.js";

export class Contact {
	constructor(firstName, lastName, company, role, phone, email, address) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.company = company;
		this.role = role;
		this.phone = phone;
		this.email = email;
		this.address = address;
	}

	// Méthode pour afficher les informations de l'utilisateur
	getContact() {}
	getAllContacts() {}

	addContact() {} //Add a new Contact in the db
	deleteContact() {} //Delete a contact

	//Update if exist, create if not exist
	updateFirstName() {}
	updateLastName() {}
	updateCompany() {}
	updateRole() {}
	updatePhone() {}
	updateEmail() {
		this.email = nouvelEmail;
	}
	updateAddress() {}
}
