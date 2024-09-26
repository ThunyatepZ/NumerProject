import { all, create } from 'mathjs';
const math = create(all)
export default function carmerRule(object){
let A = [...object.matrixA]
let B = [...object.matrixB]
let x = Array.from({ length: A.length }, () => Array(A.length).fill(1));


let anser = []
let temp
for(let i = 0;i < A.length;i++){
    for(let j = 0; j < A.length;j++){
        temp = [...A[j]]
        temp[i] = B[j]

        for(let m = 0; m < A.length;m++){
            x[j][m] = temp[m]
        }
    }
    anser[i] = ((' x' + (i+1) + ' : ') + math.det(x)/math.det(A))
    console.log(math.det(A))
    console.log(x)
}

    return({
        err : object.Error,
        test: 1,
        Ma: anser
    })
}