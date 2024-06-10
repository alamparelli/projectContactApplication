export class DbConnection {
	constructor(contactCard) {
		this.contactCard = contactCard; //JsonObject to Manipulate
		this.db = process.env.LOCAL_JSONFILE;
	}

	getContact() {}
	getAllContacts() {}
	updateContact() {} //Add a new Contact in the db or update it
	deleteContact() {} 
}
