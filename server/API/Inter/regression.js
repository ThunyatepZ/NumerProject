const math = require('mathjs')
let x = [10,15,20,30,40,50,60,70,80]
let y = [5,9,15,18,22,30,35,38,43]
let matrixkeepEquation = [[0,0],[0,0]]
let B = []
let k = 2;
let sum = 0 ;
let inw = 1
let xanser = 65
let sumy = 0
let anser = 0
for(let i = 0;i < matrixkeepEquation.length;i++){
    for(let j = 0;j < matrixkeepEquation.length;j++){
        if(i == j){
            if(i == 0 && j == 0){
                matrixkeepEquation[i][j] = x.length
            }
            else{
                for(let n = 0;n < x.length;n++){
                    sum = sum + math.pow(x[n],k)
                    console.log(sum)
                }
                k+=2
                matrixkeepEquation[i][j] = sum
                sum = 0
                inw++
                console.log(sum)
            }
        }
        else{
            for(let a = 0;a < x.length;a++){
                sum = sum + math.pow(x[a],inw)
                console.log(sum)
            }
            inw++
            matrixkeepEquation[i][j] = sum
            sum = 0
            console.log(sum)
        }
        
    }
    inw = i+1
    
}
console.log(matrixkeepEquation)
for(let i = 0; i < matrixkeepEquation.length;i++){
    if(i == 0){
        for(let j = 0;j < x.length;j++){
            sumy = sumy + y[j];
            
        }
        console.log(sumy)
        B[i] = sumy
        sumy = 0
    }
    else{
        for(let k = 0; k < x.length;k++){
            sumy = sumy + y[k]
            anser = anser + y[k] * math.pow(x[k],i)
        }

        console.log(anser)
        B[i] = anser
        sumy = 0
        anser = 0
    }
}
let A = (math.multiply(math.inv(matrixkeepEquation),B))
console.log(A)
console.log(`anser : ${A[0] + (A[1] * xanser)}`)
