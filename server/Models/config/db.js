const mongoose = require('mongoose')
require('dotenv').config()
const conectDB = async () =>{
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log('DB conect')
    }catch(err){
        console.log(err)
    }
}
module.exports = conectDB