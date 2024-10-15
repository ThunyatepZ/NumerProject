const { listdata,SendToDB} = require('../Controllers/graphical')
const express = require('express')
const router = express.Router()

const Apinumer =(router)=>{
    router.get('/getdata',listdata)
    router.post('/test',SendToDB)
}

// router.get('/data',getExampledata)
// router.post('/testpost',savedatatest)
// router.get('/product',(req,res)=>{
//     res.send('HELLO')
// })
module.exports = Apinumer

