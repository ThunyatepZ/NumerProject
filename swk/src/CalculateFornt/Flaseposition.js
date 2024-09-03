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

        let XL = parseFloat(Xstart)
        let XR = parseFloat(Xend)
        let X1_old,x1=0,error
        let fnXR,fnXL,fnX1
        while(true){
            X1_old = x1
            scope = { x:XL }
            fnXL = parseFloat(find_function(XL))
            scope = { x:XR }
            fnXR = parseFloat(find_function(XR))
            scope = { x:x1 }
            fnX1 = parseFloat(find_function(x1))
            x1 = ((XL * fnXR) - (XR * fnXL)) / (fnXR - fnXL);
            parseFloat(x1)
            if(fnX1 * fnXR > 0){
                XR = x1;
                error = Math.abs(XR - X1_old)
            }
            else{
                XL = x1;
                error = Math.abs(XL - X1_old);
            }
    
            if(error < Error){
                return x1.toFixed(6);
            }
            else{
                console.log(x1)
            }
        }
        
    }
    
}