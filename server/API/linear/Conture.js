const math = require('mathjs')

let A = [[5,2,0,0],[2,5,2,0],[0,2,5,2],[0,0,2,5]]
let B = [12,17,14,7]
let x = [0,0,0,0];

let R,D,RM1,error;
let RP1
let Alpha
let Ramda;
R = math.subtract(math.multiply(A,x),B)
D = math.multiply(R,-1)
do{
    Ramda = -1*(math.multiply(math.transpose(D),R)) / math.multiply(math.multiply(math.transpose(D),A),D)
    x = math.add(x,math.multiply(Ramda,D))

    R = math.subtract(math.multiply(A,x),B)
    error = math.sqrt(math.multiply(math.transpose(R),R))
    Alpha = math.multiply(math.transpose(R),A,D) / math.multiply(math.transpose(D),A,D)

    D = math.subtract(R, math.multiply(Alpha, D));
    console.table(math.round(x,6))
}while(error >= 0.000001)
