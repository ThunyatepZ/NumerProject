const math = require('mathjs')
let A = [[-2,3,1],[3,4,-5],[1,-2,1]]
let B =[9,0,-4]
let x = [1,1,1]
for(let i = 0;i<3;i++){
    for(let j = 0;j < 3; j++){
        if(i > j){
            let tempA = [...A[j]]
            
            let tempB = B[j]
            
            let tempaJJ,tempaIJ
            tempaIJ = A[i][j]
            tempaJJ = A[j][j]
            tempB = (tempB / tempaJJ) * tempaIJ
            
            B[i] = B[i] - tempB
            for(let n = 0;n < 3;n++){
                A[i][n] = A[i][n] - ((tempA[n] / tempaJJ) * tempaIJ)
            }

        }
    }

}
for(let i = 2;i>=0;i--){
    for(let j = 2;j >= 0; j--){
        if(i < j){
            let tempAR = [...A[j]]
            
            let tempBR = B[j]
            
            let tempaJJ,tempaIJ
            tempaIJ = A[i][j]
            tempaJJ = A[j][j]
            tempBR = (tempBR / tempaJJ) * tempaIJ
            
            B[i] = B[i] - tempBR
            for(let n = 2;n >= 0;n--){
                A[i][n] = A[i][n] - ((tempAR[n] / tempaJJ) * tempaIJ)
            }

        }
    }
}

for(let i = 0;i < 3;i++){
    for(let j = 0;j < 3;j++){
        if(i == j){
            let tempAsum = A[i][i]
            B[i] = B[i] / tempAsum
            for(let x = 0;x < 3; x++){
                A[i][x] = A[i][x] / tempAsum
                // console.log(A)
            }
        }
    }
}
console.log(math.round(A))
console.table(math.round(B))