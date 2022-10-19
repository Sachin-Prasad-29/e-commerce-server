const mongoose = require('mongoose');

const product = {
    name: {
        type: String,
        required: [true, 'Name must be Provided'],
    },
    category: {
        type: String,
        enum: ['shoes', 'upperwear', 'bottomwear', 'eyewear', 'headwear', 'others'],
        required: [true, 'Category must be Provided'],
    },
    gender: {
        type: String,
        enum: ['male', 'female', 'unisex'],
        required: [true, 'Gender must be provided'],
    },
    images: {
        type: String,
        default: '../assets/images/dummy-product.png',
    },
    description: {
        type: String,
        required: [true, 'Description is required'],
    },
    cost: {
        type: String,
        required: [true, 'Cost must be provided'],
    },
    review: {
        type: Array,
    },
    rating: {
        type: Number,
    },
};

const productSchema = new mongoose.Schema(product);
module.exports = mongoose.model('Product', productSchema);
