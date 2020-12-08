const jwt = require('jsonwebtoken')

const auth = (req, res, next) => {
    try {
        const token = req.header('Authorization')
        if (!token)
            res.status(400).json({ msg: 'Invalid Authenticaiton' })

        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
            if (err)
                res.status(400).json({ msg: 'Invalid Authenticaiton' })

            req.user = user
            next()
        })

    } catch (err) {
        return res.status(500).json({ msg: err.message })
    }
}

module.exports = auth