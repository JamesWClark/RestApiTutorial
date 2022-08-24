const mongoose = require('mongoose');

const { customAlphabet } = require('nanoid');
const { UserDocument } = require('./user.model');

const nanoid = customAlphabet('abcdefghijklmnopqrstuvwxyz01234567890', 10); // 10 chars long

const productSchema = new mongoose.Schema(
    {
        productId: {
            type: String,
            required: true,
            unique: true,
            default: () => `product_${nanoid()}`, // an id generated from custom alphabet above
        },
        user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        title: { type: String, required: true },
        description: { type: String, required: true },
        price: { type: Number, required: true },
        image: { type: String, required: true },
    }, 
    {
        timestamps: true
    }
);

const ProductModel = mongoose.model("Product", productSchema);

module.exports = { ProductModel };