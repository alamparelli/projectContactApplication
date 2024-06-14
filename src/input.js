// Create the Input Interface in Command line
import { existsSync } from "fs";
import * as crudOps from "./crud.js";
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
			firstName: "",
			lastName: "",
			company: "",
			role: "",
			phone: "",
			email: "",
			address: "",
		};
	}

	_closeReadline() {
		this.rl.close();
	}

	_timeOut() {
		return new Promise(resolve => setTimeout(resolve, 250));
	}

	async _loopMenu() {
		await this._timeOut();
		this.userInput();
	}

	async _askData(question) {
		// constructor for questions
		return new Promise((resolve, reject) => {
			this.rl.question(question, (answer) => {
				resolve(answer);
			});
		});
	}

	async _aquireDatas() {
		//need to take in count if only enter is pressed so if value == "" nothing to do | needed for update
		//add Validation
		this.contact.firstName = await this._askData(
			`FirstName (${this.contact.firstName}): `
		);
		this.contact.lastName = await this._askData(
			`LasName (${this.contact.lastName}): `
		);
		this.contact.company = await this._askData(
			`company (${this.contact.company}): `
		);
		this.contact.role = await this._askData(
			`role (${this.contact.role}): `
		);
		this.contact.phone = await this._askData(
			`phone (${this.contact.phone}): `
		);
		this.contact.email = await this._askData(
			`email (${this.contact.email}): `
		);
		this.contact.address = await this._askData(
			`address (${this.contact.address}): `
		);
		this._loopMenu();
	}

	_syncDatas(data) {
		//this.id = data.id;
		this.contact.firstName = data.firstName;
		this.contact.lastName = data.lastName;
		this.contact.company = data.company;
		this.contact.role = data.role;
		this.contact.phone = data.phone;
		this.contact.email = data.email;
		this.contact.address = data.address;
	}

	async _updateContact(answer) {
		if (answer == "C") {
			this.contact = {};
			await this._aquireDatas();
			await crudOps.updateContact(this.contact, answer, "");
			//console.log(this.contact);
		}
		if (answer == "U") {
			crudOps.getAllContacts().then((value) => console.log(value));
			this._timeOut();
			const searchId = await this._askData(
				"Which user you want to Update (Id)? "
			);
			await crudOps.getContact(searchId).then((value) => {
				this._syncDatas(value);
			});
			await this._aquireDatas();
			await crudOps.updateContact(this.contact, answer, searchId);
		}
	}

	async _deleteContact() {
		crudOps.getAllContacts().then((value) => console.log(value));
		this._timeOut();
		const searchId = await this._askData(
			"Which user you want to delete (Id)? "
		);
		await crudOps.deleteContact(searchId);
		this._loopMenu();
	}

	async _listContact(answer) {
		if (answer == "A") {
			console.clear();
			crudOps.getAllContacts().then((value) => console.log(value));
			this._loopMenu();
		}
		if (answer == "L") {
			console.clear();
			await crudOps.getAllContacts().then((value) => console.log(value));
			let searchId = await this._askData(
				`Please Select the Contact (Id): `
			);
			console.clear();
			await crudOps.getContact(searchId).then((value) => {
				console.log(
					`--------------\n(${searchId}) ${value.firstName} ${value.lastName}\nCompany : ${value.company}\nRole : ${value.role}\nPhone : ${value.phone}\nemail : ${value.email}\nAddress : ${value.address}`
				);
			});
			this._loopMenu();
		}
	}

	async userInput() {
		console.log("--------------------------");
		console.log("What Would you like to do?");
		console.log("- (C)reate");
		console.log("- (U)pdate");
		console.log("- (D)elete");
		console.log("- (L)ist");
		console.log("- List all (A)");
		console.log("- Quit (Q)");
		this.rl.question(`>>`, async (answer) => {
			answer = answer.toUpperCase();
			switch (answer) {
				case "C":
					await this._updateContact(answer);
					break;
				case "U":
					await this._updateContact(answer);
					break;
				case "D":
					await this._deleteContact();
					break;
				case "L":
					await this._listContact(answer);
					break;
				case "A":
					await this._listContact(answer);
					break;
				case "Q":
					console.log("Bye...\n");
					this._closeReadline();
					break;
				default:
					console.clear();
					console.log(`${answer} not valid answer! Nothing done`);
					this._loopMenu();
					break;
			}
		});
	}
}
