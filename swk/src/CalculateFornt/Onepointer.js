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
        let maingraphX = []
        let maingraphY = []
        for(let i = -10;i <= 10;i++){
            maingraphX.push(i)
            scope = {x:i}
            let a = calculete(i)
            maingraphY.push(a)
        }
        let error
        do{
            iter++;
            Iteration.push(iter)

            scope = { x:x0 }
            if(iter == 1){

            }
            else{
                x.push(x0)
            }

            x0 = calculete(x0)




            error = math.abs(x0-xold) / x0;
            STR.push(error * 100)
            
            console.log(error , x0)
            xold = x0
            if(iter == 1){

            }
            else{
                y.push(xold)
            }




        }while(iter < 100)

        return({
            Xans: math.round(x0,6),
            X: x,
            Y: y,
            RER: STR,
            ITER: Iteration,
            Mgx : maingraphX,
            Mgy: maingraphY
        })

    }
    
}