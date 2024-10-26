import { all, create } from "mathjs";
const math = create(all)

export default function caljacobi(props){
    let A = [...props.matrixA]
    let B = [...props.matrixB]
    let x = [...props.x1]
    let x0 = Array.from({length : B.length},()=>0)
    let keepXIter = []
    let Error;
    let correct = 0;
    let iteration = 1
    do{
        for(let i = 0;i < A.length;i++){
            let sum = 0
            for(let j = 0;j < A.length;j++){
                if(i != j){
                    sum += A[i][j] * x0[j]
                }
            }
            x[i] = (B[i] - sum) / A[i][i]
        }

        for(let i = 0;i <A.length;i++){
            Error = math.abs(x[i] - x0[i])
            Error <= 0.000001 ? correct++ : correct
            x0[i] = x[i]
        }
        if(correct != A.length){
            console.log(x)
        }
        iteration++
        if(iteration >= 1000){
            console.log('out of range')
            return({
                anserX : "out of range"
            })
        }
        keepXIter.push(JSON.parse(JSON.stringify(x)))
    }while(Error > 0.000001)
        console.log(keepXIter)
        return({
            anserX : x,
            arrX : keepXIter
        })
}