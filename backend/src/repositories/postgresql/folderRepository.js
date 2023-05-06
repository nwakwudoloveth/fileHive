const { Folder } = require("../../models/folder");
class FailedToSelectFolders extends Error {}
class FailedToInsertFolders extends Error {}
class FailedToUpdateFolder extends Error {}
class FailedToDeleteFolder extends Error {}
class PostgresSQLFolderRepository {
  /**
    @param {import('pg').Connection} conn
  */
  constructor(conn) {
    this.conn = conn;
  }
  // returns folders
  async find() {
    const sql = "SELECT * FROM folders";
    console.log(sql);
    try {
      const res = await this.conn.query(sql);
      return res.rows.map(
        (row) => new Folder(row.name, row.createdAt, row.folder)
      );
    } catch (err) {
      throw new FailedToSelectFolders(err.message);
    }
  }
  // creates folder
  async insert(folder) {
    const { name } = folder;
    const text = "INSERT INTO folders(name ) VALUES($1) RETURNING *";
    const values = [name];
    try {
      const result = await this.conn.query(text, values);
      return result;
    } catch (err) {
      throw new FailedToInsertFolders(err.message);
    }
  }
  // updates folder with id param and name body
  async update(id, name) {
    const text = "UPDATE folders SET name = $1 WHERE id = $2";
    const values = [name, id];
    try {
      const result = await this.conn.query(text, values);
      return result;
    } catch (err) {
      throw new FailedToUpdateFolder(err.message);
    }
  }
  // deletes a folder
  async delete(id) {
    const text = "DELETE FROM folders WHERE id = $1";
    const values = [id];
    try {
      const result = await this.conn.query(text, values);
    } catch (err) {
      new FailedToDeleteFolder(err.message);
    }
  }
}
module.exports = {
  PostgresSQLFolderRepository,
};
