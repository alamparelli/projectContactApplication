// Create the Input Interface in Command line
import { existsSync } from "fs";
import { Contact } from "./crud.js";
import readline from "node:readline";

export class UiCli {
	constructor(database) {
		this.database = database;
        this.alive = true;
	}
    
    _createInterface(){
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
          });
        return rl
    }

    userInput(){
        let rl = this._createInterface()
        rl.question(`User Input? `, answer => {
            console.log(`This is user Input: ${answer}!`);
            rl.close()
        });
    }
}
