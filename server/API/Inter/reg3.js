const math = require('mathjs')
x = [[1,0,2,3,4,2,1],[0,1,4,2,1,3,6],[1,3,1,2,5,3,4]]
y = [4,-5,-6,0,-1,-7,-20]
A = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]
B = []
let sum = 0
for(let i = 0; i < A.length ;i++){
    for(let j = 0; j < A.length;j++){
        if(i == j){
            if(i == 0 && j == 0){
                A[i][j] = x[i].length
            }
            else{
                for(let n = 0; n < x[i-1].length; n++){
                    sum = sum + (x[i-1][n] * x[i-1][n])
                }
                A[i][j] = sum
                sum = 0
            }
        }
        else{
            if(j == 0){
                A[i][j] = math.sum(x[i-1])
            }
            if(i == 0){
                A[i][j] = math.sum(x[j-1])
            }
            if(i != 0 && j != 0){
                // console.log(i,j)
                for(let v = 0;v < x[i-1].length;v++){
                    sum = sum + (x[i-1][v] * x[j-1][v])
                }
                A[i][j] = sum
                sum = 0
            }
        }
    }
}
for(let i = 0; i < A.length;i++){
    if(i === 0){
        B[i] = math.sum(y)
    }
    else{
        for(let g = 0 ; g < x[i-1].length;g++){
            sum = sum + (x[i-1][g] * y[g])
        }
        B[i] = sum
        sum = 0
    }

}
let anser = math.multiply(math.inv(A),B)
console.log(A)
console.log(B)
console.log(anser)
console.log(`${anser[0]} + ${anser[1]}x1 + ${anser[2]}x2`)