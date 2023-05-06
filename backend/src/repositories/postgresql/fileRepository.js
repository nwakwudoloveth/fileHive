const { File } = require("../../models/file");
class FailedToSelectFiles extends Error {}
class FailedToInsertFile extends Error {}
class FailedToUpdateFile extends Error {}
class FailedToDeleteFile extends Error {}
class PostgresSQLFileRepository {
  /**
    @param {import('pg').Connection} conn
  */
  constructor(conn) {
    this.conn = conn;
  }
  // returns all files in the database
  async find() {
    const sql = "SELECT * FROM files;";
    try {
      const res = await this.conn.query(sql);
      return res.rows.map(
        (row) =>
          new File(
            row.name,
            row.size,
            row.uploadedAt,
            row.folder,
            row.extension
          )
      );
    } catch (err) {
      throw new FailedToSelectFiles(err.message);
    }
  }
  // creates a file
  async insert(file) {
    const { originalname, size, mimetype } = file;
    const text =
      "INSERT INTO files(name, size, extension) VALUES($1, $2, $3) RETURNING *";
    const values = [originalname, size, mimetype];
    try {
      const result = await this.conn.query(text, values);
      return result;
    } catch (err) {
      throw new FailedToInsertFile(err.message);
    }
  }
  // updates file name using id param
  async updateFile(id, name) {
    const text = "UPDATE files SET name = $1 WHERE id = $2";
    const values = [name, id];

    try {
      const result = await this.conn.query(text, values);
      return result;
    } catch (err) {
      throw new FailedToUpdateFile(err.message);
    }
  }

  // deletes file by id param
  async delete(id) {
    const text = " DELETE FROM files WHERE id = $1";
    const values = [id];

    try {
      const result = await this.conn.query(text, values);
    } catch (err) {
      new FailedToDeleteFile(err.message);
    }
  }
}
module.exports = {
  PostgresSQLFileRepository,
};
