const mongoose = require('mongoose')
const conectDB = async () =>{
    try{
        await mongoose.connect('mongodb+srv://taptitan42:2CMfmKUSfn1xNXOP@fornumer.wdxpi.mongodb.net/Numer?retryWrites=true&w=majority')
        console.log('DB conect')
    }catch(err){
        console.log(err)
    }
}
module.exports = conectDB