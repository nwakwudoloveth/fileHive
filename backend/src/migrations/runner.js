// 1. read all the sql files from the migrations folder ✅
// 2. establish connection to the database.
// 3. execute sql against the database.
require("dotenv").config({ debug: process.env.DEBUG, path: "./.env" });
const { apply } = require("./apply");
const { initializeDatabase } = require("../database");

// TODO: establish connection to the database.
async function run() {
  const { HOST, PORT, DATABASE_NAME, USER_NAME, PASSWORD } = process.env;
  // console.log(process.env.HOST);
  const { client } = await initializeDatabase(
    HOST,
    PORT,
    DATABASE_NAME,
    USER_NAME,
    PASSWORD
  );
  console.log({ HOST, PORT, DATABASE_NAME, USER_NAME, PASSWORD });
  await apply(client);
  process.on("SIGINT", () => {
    client.end();
  });
}

run().then(() => {
  process.exit(0);
});
// operations: rollback, apply
