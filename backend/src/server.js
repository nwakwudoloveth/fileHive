require("dotenv").config({ debug: process.env.DEBUG, path: "./.env" });
const express = require("express");
const multerS3 = require("multer-s3");
const { initializeDatabase } = require("./database");
const { upload } = require("./aws");
const app = express();
const swaggerUi = require("swagger-ui-express");
const fs = require("fs");
const yaml = require("yaml");
const { fileRouter, folderRouter } = require("./routes");
const apiSpec = fs.readFileSync("docs/api.yaml", "utf8");
const PORT = 3001;
const swaggerDocument = yaml.parse(apiSpec);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Make repostories collection available on the request context
app.use(async (req, res, next) => {
  const { HOST, PORT, DATABASE_NAME, USER_NAME, PASSWORD } = process.env;
  try {
    const repositories = await initializeDatabase(
      HOST,
      PORT,
      DATABASE_NAME,
      USER_NAME,
      PASSWORD
    );
    req.repositories = repositories;
    next();
  } catch (err) {
    res.status(500).end(err.message);
  }
});

app.use(express.urlencoded());
app.use(express.json());

app.listen(PORT, () => {
  console.log(`server is running: http://0.0.0.0:${PORT}/api-docs`);
});

app.get("/", (req, res) => {
  res.send("Hello");
});
app.use("/files", fileRouter);
app.use("/folders", folderRouter);
