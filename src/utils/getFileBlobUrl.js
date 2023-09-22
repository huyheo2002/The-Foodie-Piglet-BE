const fs = require("fs");
const { Blob } = require("buffer");

function getFileBlobUrl(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, (err, data) => {
      if (err) {
        reject(err);
        return;
      }

      // Create a Blob from the file data
      const blob = new Blob([data]);

      // Create a Blob URL for the Blob object
      const blobUrl = URL.createObjectURL(blob);

      resolve(blobUrl);
    });
  });
}

module.exports = getFileBlobUrl;
