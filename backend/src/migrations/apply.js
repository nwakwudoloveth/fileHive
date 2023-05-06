// 1. read all the sql files from the migrations folder ✅
// 2. establish connection to the database.
// 3. execute sql against the database.

// Needs: fs, pg

const fs = require("fs");
const path = require("path");
// TODO: establish connection to the database.
async function apply(client) {
  console.log(__dirname);
  for (let file of fs.readdirSync(__dirname)) {
    if (!file.endsWith(".sql")) {
      //  console.log(file);
      //return;
      continue;
    }
    const sql = fs.readFileSync(path.join(__dirname, `${file}`), "utf8");
    //console.log(sql);
    try {
      const res = await client.query(sql);
      // console.log(res);
    } catch (err) {
      console.log(err);
    }
  }
}
module.exports = {
  apply,
};
// operations: rollback, apply
