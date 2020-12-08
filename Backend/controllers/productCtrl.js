const Product = require('../models/productMode')

class APIfeatures {
    constructor(query, queryString) {
        this.query = query
        this.queryString = queryString
    }

    filtering() {
        const queryObj = { ...this.queryString }

        const excFields = ['page', 'sort', 'limit']
        excFields.map(e => delete (queryObj[e]))

        let queryStr = JSON.stringify(queryObj)
        queryStr = queryStr.replace(/\b(gte|gt|lt|lte|regex)\b/g, match => '$' + match)

        this.query.find(JSON.parse(queryStr))

        return this
    }
    sorting() {
        if (this.queryString.sort) {
            const sortBy = this.queryString.sort.split(',').join('')
            this.query = this.query.sort(sortBy)
        } else {
            this.query = this.query.sort('-createdAt')
        }
        return this
    }
    paginating() {
        const page = this.queryString.page * 1 || 1
        const limit = this.queryString.limit * 1 || 3
        const skip = (page - 1) * limit
        this.query = this.query.skip(skip).limit(limit)

        return this
    }
}

const productCtrl = {
    getProducts: async (req, res) => {
        try {
            const features = new APIfeatures(Product.find(), req.query)
                .filtering()
                .sorting()
                .paginating()

            const products = await features.query

            res.json({
                status: 'success',
                result: products.length,
                products: products
            })

        } catch (err) {
            res.status(500).json({ msg: err.message })
        }
    },

    createProduct: async (req, res) => {
        try {
            const { product_id, title, price, description, content, images, category, checked, sold } = req.body
            if (!images)
                res.status(400).json({ msg: 'No images upload' })

            const product = await Product.findOne({ product_id })
            if (product)
                res.status(400).json({ msg: 'Product already is exists' })

            const newProduct = new Product({
                product_id, title: title.toLowerCase(), price, description, content, images, category, checked, sold
            })

            await newProduct.save()
            res.json({ msg: 'Create a product' })

        } catch (err) {
            res.status(500).json({ msg: err.message })
        }
    },

    updateProduct: async (req, res) => {
        try {
            const { product_id, title, price, description, content, images, category, checked, sold } = req.body
            if (!images)
                res.status(400).json({ msg: 'No images upload' })

            const product = await Product.findByIdAndUpdate({ _id: req.params.id }, {
                product_id, title: title.toLowerCase(), price, description, content, images, category, checked, sold
            })

            res.json({ msg: 'Update a product' })

        } catch (err) {
            res.status(500).json({ msg: err.message })
        }
    },

    deleteProduct: async (req, res) => {
        try {
            await Product.findByIdAndRemove(req.params.id)

            res.json({ msg: 'Delete a product' })

        } catch (err) {
            res.status(500).json({ msg: err.message })
        }
    },
}

module.exports = productCtrl