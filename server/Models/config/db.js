const mongoose = require('mongoose')

const conectDB = async () =>{
    try{
        await mongoose.connect('mongodb://localhost:27017')
        console.log('DB conect')
    }catch(err){
        console.log(err)
    }
}

module.exports = conectDB