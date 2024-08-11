const Graphical = require('../Models/Data')
const BIS = require('../API/Bisection')
exports.Bisection = async(req,res)=>{
    try{
        const tee = await BIS(req.body)
        res.json(tee)
    }catch(err){
        console.log(err)
    }
}

exports.testswagger = async(req,res)=>{
    try{
        res.send("Hello");
    }catch(err){
        console.log(err)
    }
}