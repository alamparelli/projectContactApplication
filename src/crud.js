import * as dbConnect from "./connectDb.js";

// Méthode pour afficher les informations de l'utilisateur
export function getContact(data) {
	return dbConnect.getContact(data) 
}
export function getAllContacts() {
	return dbConnect.getAllContacts();
}

export function addContact() {} //Add a new Contact in the db
export function deleteContact() {} //Delete a contact


