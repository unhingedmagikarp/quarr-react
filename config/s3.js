const aws = require("aws-sdk");

const endpoint = new aws.Endpoint(process.env.ENDPOINT);

module.exports = {
  s3: new aws.S3({
    endpoint,
    accessKeyId: process.env.ACCESSKEY,
    secretAccessKey: process.env.SECRETKEY
  })
};
