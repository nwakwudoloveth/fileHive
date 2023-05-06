require("dotenv").config();
const multer = require("multer");
const { S3Client } = require("@aws-sdk/client-s3");
const AWS = require("aws-sdk");
const multerS3 = require("multer-s3");
const s3 = new S3Client({
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
  region: "eu-central-1",
});
const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: "fileehive",
    contentType: multerS3.AUTO_CONTENT_TYPE,
    metadata: function (req, file, cb) {
      cb(null, { fieldName: file.fieldname });
    },
    key: function (req, file, cb) {
      cb(null, file.originalname);
    },
  }),
});

module.exports = {
  upload,
};
