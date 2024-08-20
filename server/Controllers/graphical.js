const Graphical = require('../Models/Data')
const BIS = require('../API/Bisection')
const FAS = require('../API/Flaseposition')
const ONE = require('../API/Onepointer')
exports.Bisection = async(req,res)=>{
    try{
        const tee = await BIS(req.body)
        res.json(tee)
    }catch(err){
        console.log(err)
    }
}

exports.Onepoint = async(req,res)=>{
    try{
        const showOne = await ONE(req.body)
        res.json(showOne)
    }catch(err){
        console.log(err)
    }
}

exports.Falseposit = async(req,res)=>{
    try{
        const showFAS = await FAS(req.body)
        res.json(showFAS)
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