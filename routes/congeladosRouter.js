const express = require("express")
const router = express.Router()

const congelados = [
    {
        id: 1,
        plato: "Canelones",
        precio: "8.99 euros",
        unidades: 12,
        Calorias: "201 kcal",
        imgLink:"https://www.lasirena.es/35468-product_ficha/canelones-extra-con-bechamel-premium.jpg"
    },
    {
        id: 2,
        plato: "Gyoza de langostinos",
        precio: "4.99 euros",
        unidades: 15,
        Calorias:"212 kcal",
        imgLink:"https://www.lasirena.es/35007-product_ficha/gyoza-de-langostinos.jpg"
    },
    {
        id: 3,
        plato: "Pimiento piquillo",
        precio: "3,49 euros",
        unidades: 6,
        Calorias: "92 kcal",
        imgLink:"https://www.lasirena.es/33595-product_ficha/pimiento-piquillo-relleno-de-marisco-51.jpg"
    }


]


router.get("/", (req, res, next) => {


    res.render("congelados", congelados)
})

router.get("/:id", (req, res, next) => {
    const filteredCongelados= congelados.filter(elem=>req.params.id==elem.id)
   
    res.render("productoCongelado", filteredCongelados)
})


module.exports = router