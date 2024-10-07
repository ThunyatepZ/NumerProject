import { all, create } from 'mathjs'
const math = create(all)

function CalGaussIter(props){
    let A = [...props.matrixA]
    let B = [...props.matrixB]
    let x = [...props.x1]
    let ErrorFix  = props.Er
    let Error
    let correct = A.length
    let Iteration = 1;
    do{
        console.log(x)
        for(let i = 0;i < A.length;i++){
            let sum = 0
            for(let j = 0;j < A.length;j++){
                if(i != j){
                    sum += A[i][j] * x[j]
                }
            }
            let newx = (B[i] - sum) / A[i][i]

            Error = math.abs(newx - x[i])
            // console.log(math.round(Error,6))
            if(Error < ErrorFix){
                correct++
            }
            x[i] = newx
        }

        if(correct != A.length-1){
            console.log(x)
        }
        if(Iteration >= 100){
            break
        }
        Iteration++

    }while(correct <= A.length)
    console.log(Iteration)
}

export default CalGaussIter