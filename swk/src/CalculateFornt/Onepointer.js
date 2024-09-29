import { all, create } from 'mathjs';
const math = create(all)
export default function Onepointiter({ Xstart, Error, equation }) {
    let n = 0
    let scope

    if (!Error || !Xstart || !equation) {
        alert('Please input')
        return 1
    }
    else {
        function calculete(x) {
            return math.evaluate(equation, scope)
        }
        let x = [], y = [], STR = [], Iteration = []
        let basex = []
        let basey = []
        let x0 = parseFloat(Xstart)
        let xold = 0
        let iter = 0
        let graphtox = []
        let graphttoy = []
        let maingraphX = []
        let maingraphY = []
        for (let i = 0; i <= 10; i++) {
            maingraphX.push(i)
            scope = { x: i }
            let a = calculete(i)
            maingraphY.push(a)
        }
        let error
        do {
            
            iter++;
            
            Iteration.push(iter)
            scope = { x: x0 }

            x.push(x0)
            basex.push(x0)
            basey.push(x0)
            x0 = calculete(x0)


            error = math.abs(x0 - xold) / x0;
            iter === 1 ? math.abs(error) : error
            STR.push(error * 100)

            console.log(error, x0)
            xold = x0

            y.push(xold)

            if (iter >= 100) {
                return ({
                    Xans: math.round(x0, 6),
                    X: x,
                    Y: y,
                    RER: STR,
                    ITER: Iteration,
                    Mgx: maingraphX,
                    Mgy: maingraphY,
                    XG: basex,
                    YG: basey,
                    gotox: graphtox,
                    gotox: graphttoy
                })
            }


        } while (iter <= 10 || error >= Error)

        return ({
            Xans: math.round(x0, 6),
            X: x,
            Y: y,
            RER: STR,
            ITER: Iteration,
            Mgx: maingraphX,
            Mgy: maingraphY,
            XG: basex,
            YG: basey,
            gotox: graphtox,
            gotox: graphttoy
        })

    }

}