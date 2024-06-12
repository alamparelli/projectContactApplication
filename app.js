import "dotenv/config";
import { UiCli } from "./src/input.js";
import { existsSync, writeFile } from "fs";
import { dbExist } from "./src/connectDb.js";

const localDb = process.env.LOCAL_JSONFILE;
const app = new UiCli(localDb);

console.clear()
dbExist()
app.userInput();
