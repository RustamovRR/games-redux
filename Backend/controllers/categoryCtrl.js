const Category = require('../models/categoryModel')

const categoryCtrl = {
    getCategories: async (req, res) => {
        const category = await Category.find()
        res.json(category)
    },

    createCategory: async (req, res) => {
        try {
            const { name } = req.body
            const category = await Category.findOne({ name })
            if (category)
                res.status(500).json({ msg: 'This is category already exists' })

            const newCategory = await new Category({ name })
            const saved = newCategory.save()

            res.json({ msg: 'Created category' })

        } catch (err) {
            res.status(500).json({ msg: err.message })
        }
    },

    deleteCategory: async (req, res) => {
        try {
            await Category.findByIdAndDelete(req.params.id)
            res.json({ msg: 'Delete a category' })

        } catch (err) {
            res.status(500).json({ msg: err.message })
        }
    },

    updateCategory: async (req, res) => {
        try {
            const { name } = req.body
            const update = await Category.findByIdAndUpdate({ _id: req.params.id }, { name })

            res.json({ msg: 'Update a category' })

        } catch (err) {
            res.status(500).json({ msg: err.message })
        }
    },
}

module.exports = categoryCtrl