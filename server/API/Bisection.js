module.exports = BIS = ({Xstart,Xend,Error}) =>{
    function find_function(Xm){
        let fxm = Math.pow(Xm,4)-13
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
        fnXM = find_function(XM)
        fnXR = find_function(XR)
        if(fnXM * fnXR > 0){
            XR = XM
            findError = Math.abs((XR- XMO))
        }else{
            XL = XM
            findError = Math.abs((XL - XMO))
        }if(findError < parseFloat(Error)){
            return XM
        }
        else{
            console.log(findError, fnXM, fnXR)
        }
    }
}
