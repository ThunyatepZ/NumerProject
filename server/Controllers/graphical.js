const Database = require('../Models/Data')
// exports.testswagger = async(req,res)=>{
//     try{
//         res.send("Hello");
//     }catch(err){
//         console.log(err)
//     }
// }

exports.listdata = async(req,res)=>{
    try{
        const list = await Database.find({}).exec()
        res.send(list)
    }catch(err){
        console.log(err)
    }
}

exports.SendToDB = async(req,res)=>{
    try{
        if(req.body.type == "root"){
            const checkUnique = await Database.findOne({
                'dataobject.equation' : req.body.dataobject.equation,
                'dataobject.Xstart' : req.body.dataobject.Xstart,
                'dataobject.subtype' : req.body.dataobject.subtype
            })
            if(checkUnique){
                return res.send("Already have it")
            }
            const set = await Database(req.body).save()
            res.json(set)
        }
        if(req.body.type == "Linear"){
            const matrixAString = JSON.stringify(req.body.dataobject.matrixA);
            const matrixBString = JSON.stringify(req.body.dataobject.matrixB);
            const checkUnique = await Database.findOne({
                'dataobject.matrixA' : matrixAString,
                'dataobject.matrixB' : matrixBString
            })
            if(checkUnique){
                return res.send("Already have it")
            }

            req.body.dataobject.matrixA = matrixAString;
            req.body.dataobject.matrixB = matrixBString;
            
            const set = await Database(req.body).save()
            res.json(set)
        }
if (req.body.type == "interpolation") {
    const checkUnique = await Database.findOne({
        'dataobject.XDATA': req.body.dataobject.XDATA,
        'dataobject.YDATA': req.body.dataobject.YDATA
    });
    if (checkUnique) {
        return res.send("Already have it");
    }
    const set = await Database(req.body).save();
    res.json(set);
}
    }catch(err){
        console.log(err)
    }
}
