const { Product } = require('../models/Product.model');

module.exports.createProduct = (req, res) => {
    const { title, price, description } = req.body;
    Product.create({
        title: title,
        price: price,
        description: description
    })
        .then(Product =>res.json(Product))
        .catch(err => res.json(err));
};

module.exports.getProducts = (req, res) => {
    Product.find()
        .then(allProducts => res.json({ products: allProducts }))
        .catch(err => res.json({ error: err }));
};

module.exports.getSingleProduct = (req, res) => {
    Product.findOne({_id:req.params.id})
        .then(product => res.json(product))
        .catch(err => res.json(err))
};

module.exports.deleteProduct = (req, res) => {
    Product.deleteOne({_id:req.params.id})
        .then(confirmDelete => res.json(confirmDelete))
        .catch(err => console.log(err))
};

module.exports.editProduct = (req, res) => {
    Product.findOneAndUpdate({_id:req.params.id}, req.body, {new:true})
        .then(profileUpdate => res.json(profileUpdate))
        .catch(err => console.log(err))
};