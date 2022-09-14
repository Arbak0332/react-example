require('dotenv').config()

const express = require('express')
const app = express()



app.get('/', (req, res) => {
    res.send('Hello')
})

const port = process.env.PORT || 3000
app.listen(3000, ()=>{
    console.log(`listening on port ${port}`)
})

