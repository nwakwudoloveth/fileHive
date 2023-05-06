//create a folder class

class Folder {
  /** 
@param {string} name
@param {Date} createdAt
@param {string|null} folder

*/
  constructor(name, createdAt, folder) {
    this.name = name;
    //this.size = size;
    this.createdAt = createdAt;
    this.folder = folder;
  }

  createFolder() {}
  copyFolder() {}
  deleteFolder() {}
  moveFolder() {}
  renameFolder() {}
}

module.exports = {
  Folder,
};
