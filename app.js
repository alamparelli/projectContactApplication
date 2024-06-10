import "dotenv/config";
import { UiCli } from "./src/input.js";
import { existsSync, writeFile } from "fs";

const localDb = process.env.LOCAL_JSONFILE;

if (!existsSync(process.env.LOCAL_JSONFILE)) {
	//test if localfile exist
	writeFile(process.env.LOCAL_JSONFILE, "", "utf-8", (res, err) => {
		//create the empty db local file
		if (err) {
			console.error(`env variable LOCAL_JSONFILE do not exist!`);
		}
	});
	console.error("db did not existed, file created");
}

const app = new UiCli(localDb);
app.userInput();
