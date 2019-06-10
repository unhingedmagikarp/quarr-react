const path = require("path");
const multer = require("multer");
const multerS3 = require("multer-s3");
const shortId = require("shortid");

const s3 = require("./s3").s3;

module.exports = {
  slugify: name =>
    name
      .toLowerCase()
      .split(" ")
      .join("-"),

  upload: multer({
    storage: multerS3({
      s3,
      bucket: process.env.BUCKET,
      acl: process.env.ACL,
      contentType: multerS3.AUTO_CONTENT_TYPE,
      key: (req, file, cb) => {
        const fileName = `${shortId.generate()}${path.extname(
          file.originalname
        )}`;
        cb(null, fileName);
      }
    })
  }).array("file", 1)
};
