import { existsSync, writeFile } from "fs";
import { readFile } from "fs/promises";
import { connect } from "http2";

const DB = process.env.LOCAL_JSONFILE

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

function dbGetContent(){
	const connection = new Promise((resolve, reject) => {
		let content = readFile(DB, { encoding: 'utf8' })
		resolve(content)
		});
		
	return connection;
}

export function getContact() {}
export function getAllContacts() {
	return dbGetContent();
}
export function updateContact() {} //Add a new Contact in the db or update it
export function deleteContact() {} 
