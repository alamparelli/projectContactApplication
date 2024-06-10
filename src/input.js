// Create the Input Interface in Command line
import { existsSync } from "fs";
import { Contact } from "./crud.js";
import readline from "node:readline";

export class UiCli {
	constructor(database) {
		this.database = database;
	}

	_createInterface() {
		//initialise instance
		const rl = readline.createInterface({
			input: process.stdin,
			output: process.stdout,
		});
		return rl;
	}

	_updateContact(answer) {}

	_deleteContact(answer) {}

	_listContact(answer) {}

	userInput() {
		let rl = this._createInterface();
		rl.question(
			`-------------\nWhat Would you like to do?\n- Create (C)\n- Update (U)\n- Delete (D)\n- List (L)\n- List all (A)\n>> `,
			(answer) => {
				answer = answer.toUpperCase();
				switch (answer) {
					case "C":
						console.log(`${answer} is the right one`);
						break;
					case "U":
						console.log(`${answer} is the right one`);
						break;
					case "D":
						console.log(`${answer} is the right one`);
						break;
					case "L":
						console.log(`${answer} is the right one`);
						break;
					case "A":
						console.log(`${answer} is the right one`);
						break;
					default:
						console.log(`${answer} is not a valid one`);
						break;
				}
				rl.close();
			}
		);
	}
}
