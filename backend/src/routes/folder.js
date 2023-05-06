const express = require("express");
const folderRouter = express.Router();

/**
  @param {import('./types').IRequest} req
  @param {import('./types').IReponse} res
 */

//handles get request
async function getFoldersHandler(req, res) {
  const folders = await req.repositories.folderRepository.find();
  res.status(200).json({ folders: folders });
  console.log(res);
}
//handles post request
async function postFoldersHandler(req, res) {
  const { name } = req.body;
  const folder = await req.repositories.folderRepository.insert({
    name,
  });

  res.status(201).json({ folder: folder });
}
//handles patch request
async function patchFolderHandler(req, res) {
  const { name } = req.body;
  const { id } = req.params;
  const folder = await req.repositories.folderRepository.update(id, name);
  res.status(200).json({ folder: folder });
}
// handles delete request
async function deleteFolderHandler(req, res) {
  const { id } = req.params;
  const folder = await req.repositories.folderRepository.delete(id);
  res.status(200).json({ folder: folder });
}

// router request methods
folderRouter.get("/", getFoldersHandler);
folderRouter.post("/", postFoldersHandler);
folderRouter.patch("/:id", patchFolderHandler);
folderRouter.delete("/:id", deleteFolderHandler);

module.exports = { folderRouter };
