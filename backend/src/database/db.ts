const Database = require("better-sqlite3");
const { join } = require("node:path");
const { readFileSync } = require("node:fs");

const db = new Database(join(__dirname, "../bookaneers.sqlite"));
console.log(db);
const schemaPath = join(__dirname, "schema.sql");
const schema = readFileSync(schemaPath, "utf-8");
db.exec(schema);

module.exports = db;
