import { all, create } from 'mathjs';
const math = create(all)
export default function Newton({ Xstart,Error, equation }) {
    let scope
    function findfx1(x){
        return math.evaluate(equation,scope)
    }
    function findfx2(x){
        return math.derivative(equation,'x').evaluate(scope)
    }
    let x =[],y=[],STR = [],Iteration = []
    let xc = Xstart,xold = 0;
    let fx1,fx2,ERROR,Iter = 0;
    let maingraphX = []
    let maingraphY = []
    for(let i = -10;i <= 10;i += 0.002){
        maingraphX.push(i)
        scope = {x:i}
        let a = findfx1(i)
        maingraphY.push(a)
    }
    do{
        Iter++;
        Iteration.push(Iter)
        x.push(xc)
        let xcs = findfx1(xc)
        Iter === 1 ? y.push(0) : y.push(xcs)

        scope = {x:xc}
        fx1 = findfx1(xc)
        scope = {x:xc}
        fx2 = findfx2(xc)
        xc = xc - (fx1 / fx2)
        scope = {x:xc}
        ERROR = math.abs(xc - xold) / xc
        STR.push(ERROR * 100)
        xold = xc
    }while(ERROR >= Error)
        // console.log(STR)
        // console.log(x)
        // console.log(Iteration)
    return({
            Xans: math.round(xc,6),
            X: x,
            Y: y,
            RER: STR,
            ITER: Iteration,
            Mgx: maingraphX,
            Mgy: maingraphY
    })


}
