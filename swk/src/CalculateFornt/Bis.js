import { all, create } from 'mathjs';
const math = create(all)
export default function Bisection101({Xstart,Xend,Error,equation}){
    let scope
    
    if(!Error || !Xstart || !Xend || !equation){
        alert("Please input")
        return 1
    }
    else{
        function find_function(x){
            let fxm = math.evaluate(equation,scope)
            return fxm
        }
        let x = []
        let y = []
        let ErrorRe = []
        let Iteration = []
        let iter = 0
        let XL = parseFloat(Xstart)
        let XR = parseFloat(Xend)
        let XM = 0,XMO
        let findError
        let fnXR,fnXM
        while(1){
            iter++
            Iteration.push(iter)
            XMO = XM
            XM =  (XL + XR) / 2.00
            scope = { x:XM }
            fnXM = find_function(XM)
            scope = { x:XR }
            fnXR = find_function(XR)
            
            x.push(XM)
            y.push(fnXM)
            
            if(fnXM * fnXR > 0){
                XR = XM
                findError = math.abs((XR - XMO) / XR)
                ErrorRe.push(findError)
                
            }else{
                XL = XM
                findError = math.abs((XL - XMO) / XL)
                ErrorRe.push(findError)

            }if(findError <= parseFloat(Error)){
                console.log(x)
                console.log(y)

                console.log(ErrorRe)
                return ({
                    XM: XM.toFixed(6),
                    X: x,
                    Y: y,
                    reErr: ErrorRe,
                    ITER : Iteration
                })
            }
            else{
                console.log(XM)
            }
        }
        
    }
    
}