const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({ success: true });
});

app.get("/color", (req, res) => {
  res.json({ color: "blue" });
});

module.exports = app;
