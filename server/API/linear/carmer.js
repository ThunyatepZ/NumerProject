const math = require('mathjs')

let A = [[-2,3,1],[3,4,-5],[1,-2,1]]
let B =[9,0,-4]
let x = [[1,1,1],[1,1,1],[1,1,1]]
let temp
for(let i = 0;i < 3;i++){
    for(let j = 0;j < 3;j++){
        temp = [...A[j]]
        
        temp[i] = B[j]

        for(let m = 0;m < 3;m++){
            x[j][m] = temp[m]
        }
    }
    console.log(math.det(x)/math.det(A))
}
// console.log(A)
