const { Bisection, testswagger,Falseposit,Onepoint} = require('../Controllers/graphical')
const express = require('express')
const router = express.Router()

router.post('/bisec',Bisection)
router.get('/testswagger',testswagger)
router.post('/Falseposition',Falseposit)
router.post('/Onepoint',Onepoint)
module.exports = router