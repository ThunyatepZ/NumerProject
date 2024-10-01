import { all, create } from 'mathjs';
const math = create(all)
export default function carmerRule(object){
let A = [...object.matrixA]
let B = [...object.matrixB]
let keepdet = []
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
    keepdet.push(JSON.parse(JSON.stringify(math.det(x))))

    // console.log(x)
}

    return({
        test: 1,
        Ma: anser,
        Matrix: A,
        det: keepdet
    })
}