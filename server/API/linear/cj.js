const math = require('mathjs')

let A = [[5,2,0,0],[2,5,2,0],[0,2,5,2],[0,0,2,5]]
let B = [12,17,14,7]
let x = [0,0,0,0];

let error

let R = math.subtract(B,math.multiply(A,x)),D = [...R];
let AD,RtransR,DtranAD,ramda,Rnot1,Alpha
let iter = 0


do{
    iter++
    AD = math.multiply(A,D)
    RtransR = math.multiply(math.transpose(R),R)
    DtranAD = math.multiply(math.transpose(D),AD)

    ramda = RtransR / DtranAD
    x = math.add(x,math.multiply(ramda,D))
    
    Rnot1 = math.subtract(R,math.multiply(ramda,AD))
    error = math.sqrt(math.multiply(math.transpose(Rnot1),Rnot1))
    Alpha = math.multiply(math.transpose(Rnot1),Rnot1) / RtransR
    D = math.add(Rnot1,math.multiply(Alpha,D))
    R = Rnot1
    console.log(iter)
    console.table(R)
    break;


}while(error > 0.000001)

