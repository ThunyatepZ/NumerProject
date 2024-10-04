import { all, create } from "mathjs";
const math = create(all)
function LUcalculate(props){
    let A = [...props.matrixA];
    let B = [...props.matrixB]
    let x = Array.from({length: B.length},() => 0)
    let y = Array.from({length: B.length},() => 0)
    let L = Array.from({length : A.length},() => Array(A.length).fill(0))
    let U = Array.from({length : A.length},() => Array(A.length).fill(0))
    for(let i = 0;i < B.length;i++){
        for(let j = 0; j < B.length;j++){
            if(i == j){
                U[i][j] = 1;
            }
        }
    }

    for(let i = 0;i < A.length;i++){
        for(let j = 0;j < A.length;j++){
            let sum = 0;
            for(let k = 0;k < A.length;k++){
                sum += L[i][k] & U[k][j]
            }
            if(i >= j){
                L[i][j] = (A[i][j] - sum) / U[i][i]
            }
            else{
                U[i][j] = (A[i][j] - sum) / L[i][i]
            }
        }
    }
    
    for(let i = 0;i < A.length;i++){
        let sum = 0;
        for(let j = 0;j < A.length;j++){
            sum += L[i][j] * y[j]
        }
        y[i] = (B[i] - sum) / L[i][i]
    }
    for(let i = B.length - 1;i >= 0 ;i--){
        let sum = 0;
        for(let j = B.length - 1;j >= 0;j--){
            sum += U[i][j] * x[j]
        }
        x[i] = (y[i] - sum) / U[i][i]
    }

    for(let a = 0;a < A.length;a++){
        x[a] = `x${a+1} : ` + x[a]
    }
    console.log(x)
    return({
        anserX : x,
        anserL : L,
        anserU : U
    })

}


export default LUcalculate