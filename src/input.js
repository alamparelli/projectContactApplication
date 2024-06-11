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
		this.contact = {
			id : "",
			firstName : "",
			lastName : "",
			company : "",
			role : "",
			phone : "",
			email : "",
			address : ""
		}

	}

	_closeReadline() {
		this.rl.close();
	}

	_askData(question) {
		return new Promise((resolve, reject) => {
			console.clear();
			this.rl.question(question, (answer) => {
				resolve(answer);
			});
		});
	}

	async _aquireDatas() {
		this.contact.firstName = await this._askData(`FirstName (${this.contact.firstName}):`);
		this.contact.lastName = await this._askData(`LasName: (${this.contact.lastName})`);
		this.contact.company = await this._askData(`company: (${this.contact.company})`);
		this.contact.role = await this._askData(`role: (${this.contact.role})`);
		this.contact.phone = await this._askData(`phone: (${this.contact.phone})`);
		this.contact.email = await this._askData(`email: (${this.contact.email})`);
		this.contact.address = await this._askData(`address: (${this.contact.address})`);
		console.log(this.contact)
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
		console.log("--------------------------");
		console.log("What Would you like to do?");
		console.log("- (C)reate");
		console.log("- (U)pdate");
		console.log("- (D)elete");
		console.log("- (L)ist");
		console.log("- List all (A)");
		this.rl.question(`>>`, (answer) => {
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
		});
	}
}
