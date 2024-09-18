import { all, create } from 'mathjs';
const math = create(all)
export default function Onepointiter({Xstart, Error,equation}){

    let scope
    
    if(!Error || !Xstart || !equation){
        alert('Please input')
        return 1
    }
    else{
        function calculete(x){
            return math.evaluate(equation,scope)
        }
        let x = [],y = [], STR = [],Iteration = []
        let x0 = parseFloat(Xstart)
        let xold = 0
        let iter = 0
        let error
        do{
            iter++;
            Iteration.push(iter)
            x.push(x0)
            scope = { x:x0 }
            x0 = calculete(x0)
            y.push(x0)
            error = math.abs(x0-xold) / x0;
            STR.push(error * 100)
            
            console.log(error , x0)
            xold = x0
        }while(error >= Error)

        return({
            Xans: math.round(x0,6),
            X: x,
            Y: y,
            RER: STR,
            ITER: Iteration
        })

    }
    
}