// Create the Input Interface in Command line
import { existsSync } from "fs";
import { Contact } from "./crud.js";
import readline from "node:readline";

export class UiCli {
	constructor(database) {
		this.database = database;
		this.rl = this._createInterface();
	}

	_createInterface() {
		//initialise instance
		const rl = readline.createInterface({
			input: process.stdin,
			output: process.stdout,
		});
		return rl;
	}

	_updateContact(answer) {
		return answer;
	}

	_deleteContact(answer) {
		return answer;
	}

	_listContact(answer, type = null) {
		if (type == "all") {
			return "answerall";
		}
		return answer;
	}

	userInput() {
		this.rl.question(
			`-------------\nWhat Would you like to do?\n- Create (C)\n- Update (U)\n- Delete (D)\n- List (L)\n- List all (A)\n>> `,
			(answer) => {
				answer = answer.toUpperCase();
				switch (answer) {
					case "C":
						console.log(this._updateContact(answer));
						break;
					case "U":
						console.log(this._updateContact(answer));
						break;
					case "D":
						console.log(this._deleteContact(answer));
						break;
					case "L":
						console.log(this._listContact(answer));
						break;
					case "A":
						console.log(this._listContact(answer, "all"));
						break;
					default:
						console.log(`${answer} not valid! Nothing done`);
						break;
				}
				this.rl.close();
			}
		);
	}
}
