const { Bisection} = require('../Controllers/graphical')
const express = require('express')
const router = express.Router()

router.post('/bisec',Bisection)

module.exports = router