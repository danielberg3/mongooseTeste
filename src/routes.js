const {Router} = require('express');
const routes = Router();

const ProductController = require('./Controllers/ProductController')

routes.get('/health', (req, res) => {
    return res.status(200).json({message: "server in on..."});
});

routes.post('/products', ProductController);
// routes.get('/products', ProductController.index);

module.exports = {routes};