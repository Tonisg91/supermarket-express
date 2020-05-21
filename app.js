const express = require("express");
const hbs = require("hbs");
const path = require("path");
const bebidasRouter = require('./routes/bebidasRouter');

const app = express();

app.use('/bebidas', bebidasRouter);
app.use('/bebidas/:id', bebidasRouter);

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(3000, console.log("Listen at port 3000"));