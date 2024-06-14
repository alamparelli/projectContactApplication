import { existsSync, writeFile } from "fs";
import { readFile } from "fs/promises";

const DB = process.env.LOCAL_JSONFILE;

export function dbExist(db) {
	if (!existsSync(DB)) {
		//test if localfile exist
		writeFile(DB, "", "utf-8", (res, err) => {
			//create the empty db local file
			if (err) {
				console.error(`env variable LOCAL_JSONFILE do not exist!`);
			}
		});
		console.error("db did not existed, file created");
	}
}

function getDbContent() {
	return readFile(DB, { encoding: "utf8" });
}

function setDbContent(data) {
	writeFile(DB, data, (error) => {
		if (error) {
			console.error(error);
			throw error;
		}
	});
}

async function getContactIndex(data) {
	const obj = JSON.parse(await getDbContent());
	data = obj.find((record) => record.id === data);
	return data;
}

export async function getContact(data) {
	const obj = JSON.parse(await getDbContent());
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
	const obj = JSON.parse(await getDbContent());
	let list = "--------------\n";
	for (let index = 0; index < obj.length; index++) {
		list += `(${obj[index].id}) ${obj[index].firstName} ${obj[index].lastName}\n`;
	}
	return list;
	//return obj;
}
export async function updateContact(data, action) {
	if (action == "C") {
		const obj = JSON.parse(await getDbContent());
		const dbLength = Object.keys(obj).length;
		data.id = String(dbLength + 1);
		obj[dbLength] = data;
		setDbContent(JSON.stringify(obj));
	}
	if (action == "U") {
		const obj = JSON.parse(await getDbContent());
		const dataToReplace = obj.find((record) => record.id === data.id);
		console.log(dataToReplace)
		console.log(data)
		Object.assign(obj, data)
		// not able to replace ID
		setDbContent(JSON.stringify(obj));
	}
} //Add a new Contact in the db or update it
export function deleteContact() {}
