const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    res.send('Home')
})

router.get('/po',(req,res)=>{
    res.send('Poo')
})

module.exports = router