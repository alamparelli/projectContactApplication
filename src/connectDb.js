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

export function getContact(contact) {
	return getDbContent().then((value) => {
		return JSON.parse(value);
	});
}

export function getAllContacts() {
	return getDbContent();
}
export function updateContact() {} //Add a new Contact in the db or update it
export function deleteContact() {}
