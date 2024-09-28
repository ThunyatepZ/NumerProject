const math = require('mathjs')

let equation = [[5,2,0,0],[2,5,2,0],[0,2,5,2],[0,0,2,5]]
let ansb = [12,17,14,7]
let x = [0,0,0,0]
let x0 = [0,0,0,0]
let Error;
let correct = 0;
let iteration = 1;
do{
    for(let i = 0;i < 4;i++){
        let sum = 0;
        for(let j = 0;j < 4;j++){
            if(i != j){
                sum += equation[i][j] * x0[j];
            }
        }
    
        x[i] = (ansb[i] - sum) / equation[i][i]
    }
    for(let i = 0;i < 4;i++){
        
        Error = math.abs(x[i] - x0[i])
        console.log(math.round(Error,6))
        if(Error <= 0.000001){
            correct++;
        }
        x0[i] = x[i];
    }
    if(correct != x.length){
        console.log(iteration++)
        
        console.table(math.round(x,6))

    }
    
}while(Error > 0.000001);
