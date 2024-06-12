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

function setDbContent() {}

export async function getContact(data) {
	const value = await getDbContent();
	const obj = JSON.parse(value);
	if (obj.find((record) => record.id === data)) {
		data =  obj.find((record) => record.id === data);
	}
	if (obj.find((record) => record.lastName === data)) {
		data =  obj.find((record) => record.lastName === data);
		//to be converted in Regex
	}
	return `--------------\n(${data.id}) ${data.firstName} ${data.lastName}\nCompany : ${data.company}\nRole : ${data.role}\nPhone : ${data.phone}\nemail : ${data.email}\nAddress : ${data.address}`
}

export async function getAllContacts() {
	const value = await getDbContent();
	const obj = JSON.parse(value);
	let list = "--------------\n";
	for (let index = 0; index < obj.length; index++) {
		list += `${obj[index].id} - ${obj[index].firstName} ${obj[index].lastName}\n`;
	}
	return list
}
export function updateContact() {} //Add a new Contact in the db or update it
export function deleteContact() {}
