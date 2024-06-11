// Create the Input Interface in Command line
import { existsSync } from "fs";
import { Contact } from "./crud.js";
import readline from "node:readline";

export class UiCli {
	constructor(database) {
		this.database = database;
		this.rl = readline.createInterface({
			input: process.stdin,
			output: process.stdout,
		});
		this.firstName = "";
		this.lastName = "";
		this.company = "";
		this.role = "";
		this.phone = "";
		this.email = "";
		this.address = "";
	}

	_closeReadline() {
		this.rl.close();
	}

	_askData(question) {
		return new Promise((resolve) => {
			this.rl.question(question, (answer) => {
				resolve(answer);
			});
		});
	}

	async _getDatas() {
		this.firstName = await this._askData(`FirstName (${this.firstName}): `);
		this.lastName = await this._askData(`LasName: (${this.lastName})`);
		this.company = await this._askData(`company: (${this.company})`);
		this.role = await this._askData(`role: (${this.role})`);
		this.phone = await this._askData(`phone: (${this.phone})`);
		this.email = await this._askData(`email: (${this.email})`);
		this.address = await this._askData(`address: (${this.address})`);
		this.userInput()
	}

	_updateContact(answer) {
		this._getDatas();
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
			}
		);
	}
}
