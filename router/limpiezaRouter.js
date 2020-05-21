const express = require("express")
const router = express.Router()

const limpieza = [{
    id: 1,
    nombre : "Jabon",
    img_url :"https://http2.mlstatic.com/D_NQ_NP_701630-MCO31537080812_072019-O.jpg",
    precio : 14

},
{
    id : 2,
    nombre : "champu",
    img_url : "https://1.bp.blogspot.com/-o-xwgaINcPM/VZWoVgD4nMI/AAAAAAAAKlU/TRBVKxRswXs/s1600/SAM_9538.JPG",
    precio : 16

}]



router.get("/",(req,res, next) =>{
    res.render("limpieza", limpieza)
})

router.get("/:id", (req,res,next) => {
    const id = req.params.id;
    console.log(id);
    const arrPro = limpieza.filter(el => el.id == id)
    res.render("limpieza", arrPro);
})

module.exports = router;