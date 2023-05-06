// factory pattern for building objects
const { Client } = require("pg");
const {
  PostgresSQLFileRepository,
} = require("./repositories/postgresql/fileRepository");
const {
  PostgresSQLFolderRepository,
} = require("./repositories/postgresql/folderRepository");

class FailedToConnectToDatabase extends Error {}

/**
  @param {string} host
  @param {string} port
  @param {string} database
  @param {string} userName
  @param {string} password

  @return {Promise<{import('./repositories/postgresql/types').IRepositories}>} 
*/
async function initializeDatabase(host, port, database, userName, password) {
  const client = new Client({
    host: host,
    port: port,
    database: database,
    userName: userName,
    password: password,
  });

  try {
    await client.connect();
  } catch (err) {
    throw FailedToConnectToDatabase(err.message);
  }
  const fileRepository = new PostgresSQLFileRepository(client);
  const folderRepository = new PostgresSQLFolderRepository(client);
  return {
    client,
    fileRepository,
    folderRepository,
  };
}

module.exports = {
  initializeDatabase,
};
