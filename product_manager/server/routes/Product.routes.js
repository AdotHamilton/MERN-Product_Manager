var cors = require('cors')

const ProductController = require('../controllers/Product.controller');
module.exports = function(app){
    app.get('/products', ProductController.getProducts);
    app.get('/products/:id', ProductController.getSingleProduct);
    app.post('/products/create', ProductController.createProduct);
    app.delete('/products/delete/:id', ProductController.deleteProduct );
    app.put('/products/edit/:id', ProductController.editProduct);
}