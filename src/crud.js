import * as dbConnect from "./connectDb.js";

// Méthode pour afficher les informations de l'utilisateur

export async function getContact(data) {
	const obj = JSON.parse(await dbConnect.getDbContent());
	if (obj.find((record) => record.id === data)) {
		data = obj.find((record) => record.id === data);
	}
	if (obj.find((record) => record.lastName === data)) {
		data = obj.find((record) => record.lastName === data);
		//to be converted in Regex
	}
	return data;
}

export async function getAllContacts() {
	const obj = JSON.parse(await dbConnect.getDbContent());
	let list = "--------------\n";
	for (let index = 0; index < obj.length; index++) {
		list += `(${obj[index].id}) ${obj[index].firstName} ${obj[index].lastName}\n`;
	}
	return list;
	//return obj;
}
export async function updateContact(data, action) {
	if (action == "C") {
		const obj = JSON.parse(await dbConnect.getDbContent());
		const dbLength = Object.keys(obj).length;
		data.id = String(dbLength + 1);
		obj[dbLength] = data;
		dbConnect.setDbContent(JSON.stringify(obj));
	}
	if (action == "U") {
		const obj = JSON.parse(await dbConnect.getDbContent());
		const dataToReplace = obj.find((record) => record.id === data.id);
		console.log(dataToReplace)
		console.log(data)
		Object.assign(obj, data)

		dbConnect.setDbContent(JSON.stringify(obj));
	}
} //Add a new Contact in the db or update it
export function deleteContact() {}

