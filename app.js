require('dotenv').config()
require('express-async-errors');
const express = require('express')
const app = express()

const database = require('./src/utils/database')


// middleware

app.use(express.json())

// routes

app.get('/', (req, res) => {
    res.send('Hello')
})

const productRouter = require('./src/product/routes')

app.use('/api/v1/products', productRouter)


// error handler

const errorHandler = require('./src/utils/middleware/errorHandler')
app.use(errorHandler)

const port = process.env.PORT || 3000
app.listen(3000, ()=>{
    console.log(`listening on port ${port}`)
    database.init()
})

