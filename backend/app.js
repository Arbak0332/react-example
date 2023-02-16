require('dotenv').config()
require('express-async-errors');

const express = require('express')
const app = express()
const setupDatabase = require('./src/utils/database')

// middleware

app.use(express.json())

// routes


app.get('/', (req, res) => {
    res.send('Hello')
})

const productRouter = require('./src/products/productRoutes')
const uploadRouter = require('./src/products/upload/uploadRoutes')

app.use('/api/v1/products', productRouter)


// error handler

const errorHandler = require('./src/utils/middleware/errorHandler')
app.use(errorHandler)

const port = process.env.PORT || 5000

const start = async () => {
    setupDatabase()
    app.listen(port, () => {
        console.log(`App is listening on port ${port}`)
    })
}
start()

module.exports = app