const mongoose = require('mongoose')

const DataSchema = mongoose.Schema({
    equation: String,
    Xstart: String,
    Xend: String,
    Error: String,
    type : String,
    anser : String,
    subtype : String
}, {timestamps: true})

module.exports = mongoose.model('Keepdata',DataSchema)