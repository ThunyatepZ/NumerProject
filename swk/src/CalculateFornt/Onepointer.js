import { all, create } from 'mathjs';
const math = create(all)
export default function Onepointiter({Xstart, Error,equation}){

    let scope
    
    if(!Error || !Xstart || !equation){

    }
    else{
        function calculete(x){
            return math.evaluate(equation,scope)
        }
    
        let x0 = parseFloat(Xstart)
        let xold
        let error
        do{
            xold = x0
            scope = { x:x0 }
            x0 = calculete(x0)
            error = math.abs(x0-xold)
            console.log(error , x0)
    
        }while(error >= Error)


            return x0

    }
    
}