const fs = require("fs");
const { Blob } = require("buffer");

function getFileBlobUrl(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, (err, data) => {
      if (err) {
        reject(err);
        return;
      }

      const blob = new Blob([data]);
      const blobUrl = URL.createObjectURL(blob);

      resolve(blobUrl);
    });
  });
}

module.exports = getFileBlobUrl;
