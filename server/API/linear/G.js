const math = require('mathjs')
let A = [[-2,3,1],[3,4,-5],[1,-2,1]]
let B =[9,0,-4]
let x = [0,0,0]
for(let i = 0;i < 3;i++){
    for(let j = 0;j < 3;j++){
        if(i > j){
            // console.log(A[i][j])
            let temp = [...A[j]]
            let tempb = B[j]
            let tempajj,tempaij
            tempajj = A[j][j]
            tempaij = A[i][j]
            tempb = (tempb / tempajj) * tempaij
            B[i] = B[i] - tempb
            
            for(let n = 0; n < 3;n++){
                A[i][n] = A[i][n] - ((temp[n] /tempajj) * tempaij)
            }
            // console.log(B)
            // console.log(temp,tempb)
        }
        
    }
}
let sum;
for(let k = 2; k >= 0;k--){
    sum = 0
    for(let n = 2;n >= 0;n--){
        sum = sum + A[k][n] * x[n]
    }
    x[k] = (B[k]-sum) / A[k][k]
}

console.table(A)
console.table(B)
console.log(math.round(x))