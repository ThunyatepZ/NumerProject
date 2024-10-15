const Graphical = require('../Models/Data')
// exports.testswagger = async(req,res)=>{
//     try{
//         res.send("Hello");
//     }catch(err){
//         console.log(err)
//     }
// }

exports.listdata = async(req,res)=>{
    try{
        const list = await Graphical.find({type : "root"}).exec()
        res.send(list)
    }catch(err){
        console.log(err)
    }
}

exports.SendToDB = async(req,res)=>{
    try{
        if(!req.body.equation || !req.body.Xstart || !req.body.Xend || !req.body.Error){
            res.send("Don't save")
        }
        else{
            const set = await Graphical(req.body).save()
            res.json(set)
        }

    }catch(err){
        console.log(err)
    }
}

// exports.getExampledata = async(req,res)=>{
//     try{
//         const lisdata = await Graphical.find({}).exec()
//         res.send(lisdata)
//     }catch(err){
//         console.log(err)
//     }
// }

// exports.savedatatest = async(req,res)=>{
//     try{
//         const S = await Graphical(req.body).save()
//         res.json(S)
//     }catch(err){
//         console.log(err)
//     }
// }
