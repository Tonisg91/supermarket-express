const express = require('express');
const router = express.Router();

const bebidas = [{
        id: 1,
        nombre: 'Tequila',
        img_url: 'https://cdn.pixabay.com/photo/2017/06/22/03/27/tequila-2429376_1280.jpg',
        precio: 30,
        hasIngredients: false,
        descripcion: 'esto es una botella de tequila'
    },
    {
        id: 2,
        nombre: 'Zumo',
        img_url: 'https://cdn.pixabay.com/photo/2015/09/06/00/46/green-926729_1280.jpg',
        precio: 2,
        hasIngredients: true,
        ingredientes: `100% fruta y verdura fresca sin azúcares ni agua añadidos. Receta: puré de calabaza, puré de zanahoria, puré de melocotón, puré de jengibre y zumo de manzana`,
        descripcion: 'esto es una botella de zumo'
    },
    {
        id: 3,
        nombre: 'Agua',
        img_url: 'https://cdn.pixabay.com/photo/2020/04/03/11/28/water-4998513_960_720.png',
        precio: 0.35,
        hasIngredients: false,
        descripcion: 'esto es una botella de agua'
    },
    {
        id: 4,
        nombre: 'Cerveza',
        img_url: 'https://cdn.pixabay.com/photo/2017/06/24/23/41/beer-2439237__340.jpg',
        precio: 0.99,
        hasIngredients: false,
        descripcion: 'esto es una jarra de cerveza'
    }
];

router.get('/', (req, res, next) => {
    res.render('bebidas', bebidas);
});

router.get('/:id', (req, res, next) => {
    const id = req.params.id;
    console.log(id);
    const arrItem = bebidas.filter(el => el.id == id);
    console.log(arrItem);
    res.render('bebida', arrItem[0]);
});

module.exports = router;