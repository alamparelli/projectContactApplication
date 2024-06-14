import * as dbConnect from "./connectDb.js";

// Méthode pour afficher les informations de l'utilisateur

export async function getContact(data) {
	const obj = JSON.parse(await dbConnect.getDbContent());
	return obj[data];
}

export async function getAllContacts() {
	const obj = JSON.parse(await dbConnect.getDbContent());
	let list = "--------------\n";
	for (let index = 1; index <= Object.keys(obj).length; index++) {
		list += `(${index}) ${obj[index].firstName} ${obj[index].lastName}\n`;
	}
	return list;
}
export async function updateContact(data, action, id = "") {
	if (action == "C") {
		const obj = JSON.parse(await dbConnect.getDbContent());
		const dbLength = Object.keys(obj).length;
		id = dbLength + 1;
		obj[id] = data;
		dbConnect.setDbContent(JSON.stringify(obj));
	}
	if (action == "U") {
		const obj = JSON.parse(await dbConnect.getDbContent());
		obj[id] = data;
		dbConnect.setDbContent(JSON.stringify(obj));
	}
} //Add a new Contact in the db or update it
export function deleteContact() {}
