import { all, create } from 'mathjs';
const math = create(all)
export default function Falseposition ({Xstart,Xend,Error,equation}){
    
    let scope
    if(!Error || !Xstart || !Xend || !equation){
        alert("Please input")
        return 1
    }
    else{
        function find_function(x){
            let fxm = math.evaluate(equation,scope);
            return fxm
        }
        let Iteration = []
        let x = [],y = [],errorRe = []
        let XL = parseFloat(Xstart)
        let XR = parseFloat(Xend)
        let X1_old = 0,finderror
        let fnXR,fnXL,fnX1
        let iter = 0
        let x1
        while(1){
            iter++;
            
            Iteration.push(iter)

            scope = { x:XL }
            fnXL = parseFloat(find_function(XL))
            scope = { x:XR }
            fnXR = parseFloat(find_function(XR))

            x1 = ((XL * fnXR) - (XR * fnXL)) / (fnXR - fnXL)
            
            scope = { x:x1 }
            fnX1 = find_function(x1)
            
            
            
            
            if(fnX1 * fnXR > 0){
                XR = x1;
                finderror = math.abs((XR - X1_old) / XR)
                errorRe.push(finderror  * 100)
                X1_old = x1
            }
            else{
                XL = x1;
                finderror = math.abs((XL - X1_old) / XL)
                errorRe.push(finderror  * 100)
                X1_old = x1
            }
    
            if(finderror < parseFloat(Error) || finderror <= parseFloat(Error)){
                console.log(x)
                console.log(y)
                console.log(errorRe)

                return({
                    X1: math.round(x1,6),
                    X: x,
                    Y: y,
                    RER: errorRe,
                    ITER: Iteration
                })
            }
            else{
                console.log(x1)
                x.push(x1)
                y.push(fnX1)
            }
            
        }
        
    }
    
}