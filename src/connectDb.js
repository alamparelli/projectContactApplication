import { existsSync, writeFile } from "fs";
import { readFile } from "fs/promises";

const DB = process.env.LOCAL_JSONFILE;

export function dbExist() {
	if (!existsSync(DB)) {
		//test if localfile exist
		writeFile(DB, "{}", "utf-8", (res, err) => {
			//create the empty db local file
			if (err) {
				console.error(`env variable LOCAL_JSONFILE do not exist!`);
			}
		});
		console.error("db did not existed, file created");
	}
}

export function getDbContent() {
	return readFile(DB, { encoding: "utf8" });
}

export function setDbContent(data) {
	writeFile(DB, data, (error) => {
		if (error) {
			console.error(error);
			throw error;
		}
	});
}
