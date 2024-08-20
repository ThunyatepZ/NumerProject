module.exports = BIS = ({Xstart,Xend,Error,equation}) =>{
    const math = require('mathjs')
    let scope
    
    if(!Error || !Xstart || !Xend || !equation){

    }
    else{
        function find_function(x){
            let fxm = math.evaluate(equation,scope)
            return fxm
        }
        
        let XL = parseFloat(Xstart)
        let XR = parseFloat(Xend)
        let XM = 0,XMO
        let findError
        let fnXR,fnXM
        while(1){
            XMO = XM
            XM =  (XL + XR) / 2.00
            scope = { x:XM }
            fnXM = find_function(XM)
            scope = { x:XR }
            fnXR = find_function(XR)
            if(fnXM * fnXR > 0){
                XR = XM
                findError = Math.abs((XR- XMO))
            }else{
                XL = XM
                findError = Math.abs((XL - XMO))

            }if(findError < parseFloat(Error)){
                return XM.toFixed(6)
            }
            else{
                console.log(findError, fnXM, fnXR)
            }
        }
    }
    
}
