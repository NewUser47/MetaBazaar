const https = require('https');
const fs = require('fs');
const path = require('path');

function downloadFile(url, callback) {
  const fileName = path.basename(url);

  const req = https.get(url, function (res) {
    console.log(__dirname);
    const fileStream = fs.createWriteStream(__dirname + `/../asset/avatars/` + fileName);
    res.pipe(fileStream);

    fileStream.on('error', function (error) {
      console.log('Error writing on stream');
      console.log(error);
    });

    fileStream.on('finish', function () {
      fileStream.close(callback);
      console.log('Done');
    });
  });

  req.on('error', function (error) {
    console.log('Error');
    console.log(error);
  });
}

module.exports = downloadFile;
