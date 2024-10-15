const express = require('express')
const ApiNumer = require('./ApiNumer')
const router = express.Router()

const index =() =>{
    ApiNumer(router)
    return router
}

module.exports = index