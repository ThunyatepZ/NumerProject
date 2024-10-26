const mongoose = require('mongoose')

const DataSchema = mongoose.Schema({
    dataobject : Object,
    type : String
}, {timestamps: true})

module.exports = mongoose.model('Graphical',DataSchema)