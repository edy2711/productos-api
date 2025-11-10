
const express = require('express');
const Producto = require('../models/producto');
console.log('Modelo importado:', Producto);


const router = express.Router();
// Crear un prducto
router.post('/productos', (req, res) => {
    const nuevoProducto = new Producto(req.body);
    nuevoProducto.save()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});

//get productos todos

router.get('/productos', (req, res) => {
    Producto.find()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});

//get productos id 

router.get('/productos/:id', (req, res) => {
    const { id } = req.params;
    Producto.findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});

//update productos 

router.put('/productos/:id', (req, res) => {
    const { id } = req.params;
    const { nombre, descripcion, precio, stock, categoria } = req.body;
    Producto.updateOne({ _id:id},{$set:{nombre, descripcion, precio, stock, categoria}})
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});

//Delete productos 

router.delete('/productos/:id', (req, res) => {
    const { id } = req.params;
    Producto.deleteOne({ _id:id},)
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});


module.exports = router;