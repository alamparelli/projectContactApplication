import * as dbConnect from "./connectDb.js";

// Méthode pour afficher les informations de l'utilisateur
export function getContact(data) {
	return dbConnect.getContact(data) 
}
export function getAllContacts() {
	return dbConnect.getAllContacts();
}

export function addContact(data) { 
	return dbConnect.updateContact(data, "C");
} 

export function updateContact(data) { 
	return dbConnect.updateContact(data, "U");
}

export function deleteContact() {} //Delete a contact


