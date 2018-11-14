const express = require('express');
const routes = express.Router();

//Controllers
const productController = require('./controllers/ProductController');

//First route
routes.get('/products', productController.index);
routes.get('/products/:id', productController.show);
routes.post('/products', productController.store);
routes.put('/products/:id', productController.update);
routes.delete('/products/:id', productController.delete);

module.exports = routes;