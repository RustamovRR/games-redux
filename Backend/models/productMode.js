const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    product_id: {
        type: String,
        required:true
    },
    title: {
        type: String,
        required:true
    },
    price: {
        type: Number,
        required:true
    },
    description: {
        type: String,
        required:true
    },
    content: {
        type: String,
        required:true
    },
    images: {
        type: Object,
        required:true
    },
    category: {
        type: String,
        required:true
    },
    checked: {
        type: Boolean,
        default:false
    },
    sold: {
        type: Number,
        default:0
    },
})

module.exports = mongoose.model('Product', productSchema)