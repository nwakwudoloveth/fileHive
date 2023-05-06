class File {
  /**
    Creates a new file data object
    @param {string} name
    @param {integer} size
    @param {Date} uploadedAt
    @param {string|null} folder
    @param {string} extension
  */
  constructor(name, size, uploadedAt, folder, extension) {
    this.name = name;
    this.size = size;
    this.uploadedAt = uploadedAt;
    this.folder = folder;
    this.extension = extension;
  }

  uploadFile() {}
  copyFile() {}
  delete() {}
  moveFile() {}
  renameFile() {}
}

module.exports = {
  File,
};
