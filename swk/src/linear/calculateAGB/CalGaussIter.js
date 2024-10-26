import { all, create } from 'mathjs'
const math = create(all)

function CalGaussIter(props) {
    let A = [...props.matrixA]
    let B = [...props.matrixB]
    let x = [...props.x1]
    let ErrorFix = 0.000001
    let Error
    let Iteration = 1;

    do {
        let correct = 0

        for(let i = 0; i < A.length; i++) {
            let sum = 0
            for(let j = 0; j < A.length; j++) {
                if(i !== j) {
                    sum += A[i][j] * x[j]
                }
            }
            let newx = (B[i] - sum) / A[i][i]

            Error = math.abs(newx - x[i])
            console.log(math.round(Error, 6))
            if(Error < ErrorFix) {
                correct++
            }
            x[i] = newx
        }

        console.log(`Iteration: ${Iteration}`)
        console.table(x.map(value => math.round(value, 6)))

        if(correct === A.length) {
            return {
                anserX: x,
                iterations: Iteration
            }
        }
        Iteration++
    } while(Iteration < 1000)
        return({
            anserX : x
        })
}

export default CalGaussIter
