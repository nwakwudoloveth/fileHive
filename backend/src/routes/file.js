const express = require("express");
const fileRouter = express.Router();
const { upload } = require("../aws");

/**
 * 
  
  @param {import('./types').IRequest} req
  @param {import('./types').IReponse} res
 */
// handles get request
async function getFilesHandler(req, res) {
  const files = await req.repositories.fileRepository.find();

  res.status(200).json({ files: files });
  console.log(res);
}

// handles post request
// async function postFileHandler(req, res) {
//   const { name, size, folder, extension } = req.body;

//   const file = await req.repositories.fileRepository.insert({
//     name,
//     size,
//     folder,
//     extension,
//   });
//   res.status(201).json({ file: file.rows[0] });
// }

async function postFileHandler(req, res) {
  const { originalname, size, mimetype } = req.file;
  console.log(originalname);
  console.log(req.file);
  try {
    const file = await req.repositories.fileRepository.insert({
      originalname,
      size,
      mimetype,
    });
    res.status(201).json({ file: file.rows[0] });
  } catch (err) {
    console.error(err);
  }
}

//handles patch request
async function patchFileHandler(req, res) {
  const { name } = req.body;
  const { id } = req.params;
  const file = await req.repositories.fileRepository.updateFile(id, name);
  res.status(200).json({ file: file });
}
//handles delete request
async function deleteFileHandler(req, res) {
  const { id } = req.params;
  const file = await req.repositories.fileRepository.delete(id);
  res.status(200).json({ file: file });
}

//route request methods
fileRouter.get("/", getFilesHandler);
fileRouter.post("/", upload.single("file"), postFileHandler);
fileRouter.patch("/:id", patchFileHandler);
fileRouter.delete("/:id", deleteFileHandler);

module.exports = { fileRouter };
