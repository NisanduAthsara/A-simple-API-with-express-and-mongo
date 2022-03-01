const express = require('express')
const mongoose = require('mongoose')
const app = express()
require('dotenv/config')

const routes = require('./routes/router')

const PORT = 3000

app.use(express.urlencoded({extended:true}))

app.use(routes)

mongoose.connect(process.env.DB_CON,{useNewUrlParser:true},()=>{
    console.log('Connected to DB')
})

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
})