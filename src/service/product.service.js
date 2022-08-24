const lodash = require('lodash');
const { ProductModel } = require('../models/product.model');

async function createProduct(input) {
    input = lodash.omit(input, ['createdAt', 'updatedAt' ]);

    return ProductModel.create(input);
}

async function findProduct(query, options = { lean: true }) {
    return ProductModel.findOne(query, {}, options);
}

async function findAndUpdateProduct(query, update, options) {
    return ProductModel.findOneAndUpdate(query, update, options);
}

async function deleteProduct(query) {
    return ProductModel.deleteOne(query);
}

module.exports = { createProduct, findProduct, findAndUpdateProduct, deleteProduct };