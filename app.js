require('dotenv').config()
require('express-async-errors');
const express = require('express')
const app = express()

const database = require('./src/utils/database')


// middleware


// routes

app.get('/', (req, res) => {
    res.send('Hello')
})

// error handler

const errorHandler = require('./src/utils/middleware/errorHandler')
app.use(errorHandler)

const port = process.env.PORT || 3000
app.listen(3000, ()=>{
    console.log(`listening on port ${port}`)
    database.init()
})

