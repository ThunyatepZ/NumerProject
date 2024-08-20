//
const math = require('mathjs')
let A = [[-2,3,1],[3,4,-5],[1,-2,1]]
let B =[9,0,-4]
let y = [0,0,0]
let x = [0,0,0]
let L = [[0,0,0],[0,0,0],[0,0,0]]
let U = [[1,0,0],[0,1,0],[0,0,1]]

for(let i = 0;i < 3;i++){
    for(let j = 0;j < 3;j++){
        let sum = 0
        for(let k = 0;k < 3;k++){
            sum += L[i][k] * U[k][j]
            // console.log(sum)
        }
        if(i >= j){
            L[i][j] = (A[i][j] - sum) / U[i][i]
        }
        else{
            U[i][j] = (A[i][j] - sum) / L[i][i]
        }
    }
    
}

for(let k = 0; k < 3;k++){
    let sum = 0
    for(let n = 0;n < 3;n++){
        sum = sum + L[k][n] * y[n]
        // console.log(sum)
    }
    y[k] = (B[k]-sum) / L[k][k]

}


for(let k = 2; k >= 0;k--){
    let sum = 0
    for(let n = 2;n >= 0;n--){
        sum = sum + U[k][n] * x[n]
        // console.log(sum)
    }
    x[k] = (y[k]-sum) / U[k][k]

}

console.log(y)
console.log(math.round(x))
// console.table(L)
// console.table(U)