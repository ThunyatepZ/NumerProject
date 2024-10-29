const { listdata,SendToDB} = require('../Controllers/graphical')
const express = require('express')
const router = express.Router()

const Apinumer = (router)=>{
    router.get('/getdata',listdata)
    router.post('/test',SendToDB)
}

module.exports = Apinumer