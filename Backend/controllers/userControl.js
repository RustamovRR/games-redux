const User = require('../models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const userControl = {
    register: async (req, res) => {
        const { name, email, password } = req.body

        try {
            const user = await User.findOne({ email })

            if (user)
                res.status(400).json({ msg: 'This is email already exists.' })

            if (password.length < 6)
                res.status(400).json({ msg: 'Password minimum 6 characters' })

            // Password encryption
            const passwordHash = await bcrypt.hash(password, 10)
            const newUser = new User({
                name, email, password: passwordHash
            })

            // Save mongodb
            await newUser.save()

            // jwt authentification
            const accesstoken = createAccessToken({ id: newUser._id })
            const refreshtoken = createRefreshToken({ id: newUser._id })

            res.cookie('refreshtoken', refreshtoken, {
                httpOnly: true,
                path: '/user/refresh_token'
            })

            res.send(accesstoken)

        } catch (err) {
            res.status(500).json({ msg: err.message })
        }
    },

    login: async (req, res) => {
        try {
            const { email, password } = req.body

            const user = await User.findOne({ email })
            if (!user)
                res.status(400).json({ msg: 'User dont exist' })

            const isMatch = await bcrypt.compare(password, user.password)
            if (!isMatch)
                res.status(500).json({ msg: 'Incorrect password' })

            // If login success, access and refresh token
            const accesstoken = createAccessToken({ id: user._id })
            const refreshtoken = createRefreshToken({ id: user._id })

            res.cookie('refreshtoken', refreshtoken, {
                httpOnly: true,
                path: '/user/refresh_token'
            })

            res.send({ accesstoken })

        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },

    logout: async (req, res) => {
        try {
            res.clearCookie('refreshtoken', { path: '/user/refresh_token' })
            return res.json({ msg: 'Logged out' })

        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },

    refreshToken: (req, res) => {
        try {
            const rf_token = req.cookies.refreshtoken
            if (!rf_token)
                res.status(400).json({ msg: 'Please Login or Register' })

            jwt.verify(rf_token, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
                if (err)
                    res.status(400).json({ msg: 'Please Login or Register' })

                const accesstoken = createAccessToken({ id: user._id })
                res.json({ user, accesstoken })
            })

        } catch (err) {
            return res.json({ msg: err.message })
        }

        res.json({ rf_token })
    },

    getUser: async (req, res) => {
        try {
            const user = await User.findById(req.user.id).select('-password')
            if (!user)
                res.status(400).json({ msg: 'User does not exist.' })

            res.json(user)
        } catch (err) {
            res.status(500).json({ msg: err.message })
        }
    }
}

const createAccessToken = (user) => {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1d' })
}
const createRefreshToken = (user) => {
    return jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '7d' })
}

module.exports = userControl