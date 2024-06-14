import * as dbConnect from "./connectDb.js";

// Méthode pour afficher les informations de l'utilisateur

export async function getContact(data) {
	const obj = JSON.parse(await dbConnect.getDbContent());
	return obj[data];
}

export async function getAllContacts() {
	const obj = JSON.parse(await dbConnect.getDbContent());
	let list = "--------------\n";
	for (var key in obj) {
		list += `(${key}) ${obj[key].firstName} ${obj[key].lastName}\n`;
	}
	return list;
}
export async function updateContact(data, action, id = "") {
	if (action == "C") {
		const obj = JSON.parse(await dbConnect.getDbContent());
		const tempObj = obj
		const lastId = Object.keys(tempObj).pop();
		let id = Number(lastId) + 1;
		obj[id] = data;
		dbConnect.setDbContent(JSON.stringify(obj));
	}
	if (action == "U") {
		const obj = JSON.parse(await dbConnect.getDbContent());
		obj[id] = data;
		dbConnect.setDbContent(JSON.stringify(obj));
	}
} //Add a new Contact in the db or update it
export async function deleteContact(id) {
	const obj = JSON.parse(await dbConnect.getDbContent());
	delete obj[id];
	dbConnect.setDbContent(JSON.stringify(obj));
}
