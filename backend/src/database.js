// factory pattern for building objects
const { Client } = require("pg");
const {
  PostgresSQLFileRepository,
} = require("./repositories/postgresql/fileRepository");

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
    user: userName,
    password: password,
  });

  try {
    await client.connect();
  } catch (err) {
    throw FailedToConnectToDatabase(err.message);
  }
  const fileRepository = new PostgresSQLFileRepository(client);
  return {
    client,
    fileRepository,
  };
}

module.exports = {
  initializeDatabase,
};
