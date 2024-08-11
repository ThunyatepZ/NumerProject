const { Bisection, testswagger} = require('../Controllers/graphical')
const express = require('express')
const router = express.Router()

router.post('/bisec',Bisection)
router.get('/testswagger',testswagger)
module.exports = router