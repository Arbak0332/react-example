require('dotenv').config()
require('express-async-errors');

const express = require('express')
const app = express()
const setupDatabase = require('./src/utils/database')
const cors = require('cors');
const passport = require('passport')
const cookieParser = require('cookie-parser');




// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser())
app.use(passport.initialize());
app.use(
  cors({
    allowedHeaders: ["Content-Type"], // you can change the headers
    origin: "http://localhost:3000",
    methods: ["GET", "PUT", "POST", "DELETE"],
    preflightContinue: false,
  })
);

// routes


const productRoutes = require('./src/product-related/routes')
const userRoutes = require('./src/user-related/routes')

const notFound = require('./src/utils/middleware/notFound')

app.use('/api/v1/products', productRoutes)
app.use('/api/v1/users', userRoutes)
app.use(notFound)


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