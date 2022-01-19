const app = require("express")();
const express = require('express')

const PORT = process.env.PORT || 3000;

app.get("", (req, res) => {
  res.send("Hello world");
});

app.use(express.static('public'))

app.listen(PORT, () => {
  console.log(`App up at port ${PORT}`);
});
