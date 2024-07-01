const express = require("express");
const fileUpload = require("express-fileupload");
const app = express();
const port = 3000;

app.use(fileUpload());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/upload", function (req, res) {
  console.log(req.files.file); // the uploaded file object
  res.json({ message: "File uploaded" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

module.exports = app;
