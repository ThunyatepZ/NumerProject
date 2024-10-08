const { listdata, testswagger,SendToDB} = require('../Controllers/graphical')
const express = require('express')
const router = express.Router()

router.get('/testswagger',testswagger)
router.get('/getdata',listdata)
router.post('/test',SendToDB)
// router.get('/product',(req,res)=>{
//     res.send('HELLO')
// })

module.exports = router