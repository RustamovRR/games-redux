const express = require('express')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const fileUpload = require('express-fileupload')
const cors = require('cors')
const app = express()
require('dotenv').config()

const URI = process.env.MONGO_URI
const UserRoute = require('./routes/userRouter')
const categoryRoute = require('./routes/categoryRouter')
const UploadRoute = require('./routes/upload')
const productRoute = require('./routes/productRouter')

// Middleware//////////////////////////////////////////////////
app.use(express.json())
app.use(cookieParser())
app.use(cors())
app.use(fileUpload({
    useTempFiles: true
}))

// Routes//////////////////////////////////////////////////////
app.use('/user', UserRoute)
app.use('/api', categoryRoute)
app.use('/api', UploadRoute)
app.use('/api', productRoute)

// Mongodb database//////////////////////////////////////////////////
mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
    .then(console.log('mongodbga ulandi...'))

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log('Listening port'))