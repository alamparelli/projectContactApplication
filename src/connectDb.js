export class DbConnection {
	constructor(db, contactCard) {
		this.db = db;
		this.contactCard = contactCard; //JsonObject to Manipulate
	}

	getContact() {}
	getAllContacts() {}
	updateContact() {} //Add a new Contact in the db
	deleteContact() {} //Delete a contact
}
