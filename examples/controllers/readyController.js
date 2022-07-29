const catchAsync = require("../catchAsync");
const downloadFile = require("./download");
const path = require("path");

exports.avatarLink = catchAsync(async (req, res, next) => {
  //STORE LINK, DOWNLOAD AVATAR, STORE IN DB/CLOUD, RENDER MODEL TO WORLD..
  downloadFile(req.body.url);
  //REDIRECTION TO NEW PAGE REQUIRED

  //FOR NOW LINK SENT BACK IN RESPONSE
  // console.log(req.params.url);
  res.status(200).json({
    status: "success",
    data: req.body.url,
    name: path.basename(req.body.url),
  });
});
