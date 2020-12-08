const User = require('../models/userModel')

const authAdmin = async (req, res, next) => {
    try {
        const user = await User.findById({ _id: req.user.id })
        if (user.role === 0)
            res.status(400).json({ msg: 'Admin resources is denied' })

        next()

    } catch (err) {
        res.status(500).json({ msg: err.message })
    }
}

module.exports = authAdmin