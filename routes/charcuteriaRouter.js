const express = require("express");
const router = express.Router();

const data = [
  {
    id: 1,
    nombre: "Queso",
    precio: 5,
    img_url:
      "https://as.com/deporteyvida/imagenes/2018/05/08/portada/1525772857_240454_1525773041_noticia_normal.jpg",
  },
  {
    id: 2,
    nombre: "Chorizo",
    precio: 1.5,
    img_url:
      "https://ibericosgp.es/wp-content/uploads/2018/10/chorizoiberico-e1543064477246.jpg",
  },
];

router.get("/", (req, res, next) => {
  res.render("charcuteria", data);
});

router.get("/:id", (req, res, next) => {
  console.log(req.params.id);
  const filteredProduct = data.filter((elem) => req.params.id == elem.id);
  res.render("charcuteria", filteredProduct);
});

module.exports = router;
