const express = require("express");
const hbs = require("hbs");
const path = require("path");
const limpiezaRouter = require("./router/limpiezaRouter")

const app = express();

app.use("/limpieza", limpiezaRouter)

//Handlebars - templating / VIEWS
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("index");
});

//RUTAS

///  (raiz) >>>> renderizar el archivo index.hbs (handlebars)

// Jabon


app.listen(3000, console.log("Listen at port 3000"));
