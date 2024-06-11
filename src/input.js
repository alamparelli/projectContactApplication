// Create the Input Interface in Command line
import { existsSync } from "fs";
import { Contact } from "./crud.js";
import readline from "node:readline";
import { error } from "console";

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
		return new Promise((resolve, reject) => {
			this.rl.question(question, (answer) => {
				resolve(answer);
			});
		});
	}

	async _aquireDatas() {
		this.firstName = await this._askData(`FirstName (${this.firstName}):`);
		this.lastName = await this._askData(`LasName: (${this.lastName})`);
		this.company = await this._askData(`company: (${this.company})`);
		this.role = await this._askData(`role: (${this.role})`);
		this.phone = await this._askData(`phone: (${this.phone})`);
		this.email = await this._askData(`email: (${this.email})`);
		this.address = await this._askData(`address: (${this.address})`);
		console.clear();
		this.userInput();
	}

	_retrieveData(data) {
		//from localdb
		//search data in db and assign it to class variables
		console.clear();
		console.log("_retrieveData");
		this.userInput();
	}

	_retrieveAllDatas() {
		//from localdb
		//search data in db and list all ID - firsName - LastName
		console.clear();
		console.log("_retrieveAllDatas");
		this.userInput();
	}

	async _updateContact(answer) {
		if (answer == "C") {
			await this._aquireDatas();
		}
		if (answer == "U") {
			const user = await this._askData(
				"Which user you want to update (Id, FirstName or LastName)? "
			);
			console.clear();
			console.log(user);
			//this._retrieveData();
			this.userInput();
		}
	}

	async _deleteContact() {
		const user = await this._askData(
			"Which user you want to delete (Id, FirstName or LastName)? "
		);
		console.clear();
		console.log(user);
		//this._retrieveData();
		this.userInput();
	}

	_listContact(answer) {
		if (answer == "A") {
			this._retrieveAllDatas();
		}
		if (answer == "L") {
			this._retrieveData();
		}
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
						console.log(this._deleteContact());
						break;
					case "L":
						console.log(this._listContact(answer));
						break;
					case "A":
						console.log(this._listContact(answer));
						break;
					default:
						console.clear();
						console.log(`${answer} not valid! Nothing done`);
						this.userInput();
						break;
				}
			}
		);
	}
}
