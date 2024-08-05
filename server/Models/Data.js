const mongoose = require('mongoose')

const DataSchema = mongoose.Schema({
    equation: String,
    Xstart: String,
    Xend: String,
    Error: String,

}, {timestamps: true})

module.exports = mongoose.model('Keepdata',DataSchema)