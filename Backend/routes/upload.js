const router = require('express').Router()
const cloudinary = require('cloudinary').v2
const auth = require('../middleware/auth')
const authAdmin = require('../middleware/authAdmin')
const fs = require('fs')

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET
})

// Upload image
router.post('/upload', auth, authAdmin, (req, res) => {
    try {
        if (!req.files || Object.keys(req.files).length === 0)
            res.status(400).json({ msg: 'No files were uploaded' })


        const file = req.files.file
        if (file.mimetype !== 'image/jpeg' && file.mimetype !== 'image/png') {
            removeTmp(file.tempFilePath)
            return res.status(400).json({ msg: 'File format is incorrect' })
        }


        cloudinary.uploader.upload(file.tempFilePath, { folder: 'ecommerce' }, async (err, result) => {
            if (err)
                console.log(err)

            removeTmp(file.tempFilePath)
            res.json({ public_id: result.public_id, url: result.url })
        })

        console.log(file)

    } catch (err) {
        res.status(500).json({ msg: err.message })
    }
})

// Delete image
router.post('/destroy', auth, authAdmin, (req, res) => {
    try {
        const { public_id } = req.body

        if (!public_id)
            res.status(400).json({ msg: 'No image selected' })

        cloudinary.uploader.destroy(public_id, async (err, result) => {
            if (err) throw err

            res.json({ msg: 'Delete an image' })
        })

    } catch (err) {
        res.status(500).json({ msg: err.message })
    }
})

const removeTmp = (path) => {
    fs.unlink(path, err => {
        if (err) throw err
    })
}

module.exports = router