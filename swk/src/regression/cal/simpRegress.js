import { all, create } from 'mathjs';
const math = create(all)
export default function SIMPLE(x, y, data, Order) {
    function CreateMatrix(Morder) {
        let matrix = [];
        for (let i = 0; i <= Morder; i++) {
            let rows = []
            for (let j = 0; j <= Morder; j++) {
                rows.push(0);
            }
            matrix.push(rows)
        }
        console.log(matrix)
        return matrix
    }

    let MatrixOrder = CreateMatrix(Order)
    let xcopy = x.map(val => parseFloat(val))
    let ycopy = y.map(val => parseFloat(val))
    let sum = 0,k = 2,inw = 1
    let sumy = 0,anser = 0
    let MatrixB = []
    for(let i = 0;i < MatrixOrder.length;i++){
        for(let j = 0;j < MatrixOrder.length;j++){
            if(i == j){
                if(i == 0 && j == 0){
                    MatrixOrder[i][j] = xcopy.length
                }
                else{
                    for(let n = 0;n < xcopy.length;n++){
                        sum = sum + math.pow(xcopy[n],k)
                    }
                    k+=2;
                    MatrixOrder[i][j] = sum
                    sum = 0
                    inw++
                }
            }
            else{
                for(let a = 0;a < xcopy.length;a++){
                    sum = sum + math.pow(xcopy[a],inw)
                }
                inw++
                MatrixOrder[i][j] = sum
                sum = 0
            }
        }
        inw = i + 1
    }
    console.log(MatrixOrder)
    for(let i = 0;i < MatrixOrder.length;i++){
        if(i == 0){
            for(let j = 0; j < ycopy.length;j++){
                sumy = sumy + ycopy[j]
            }
            MatrixB[i] = sumy
            sumy = 0
        }
        else{
            for(let k = 0;k < ycopy.length;k++){
                sumy = sumy + ycopy[k]
                anser = anser + ycopy[k] * math.pow(xcopy[k],i)
            }

            MatrixB[i] = anser
            sumy = 0
            anser = 0
        }
    }
    let matrixA = (math.multiply(math.inv(MatrixOrder),MatrixB))
    console.log(matrixA)
    let sumanser = 0
    matrixA.map(val => parseFloat(val))
    for(let i = 0;i <= Order;i++){
        i == 0 ? sumanser = sumanser + matrixA[i] : sumanser = sumanser + (matrixA[i] * (math.pow(data,i)))
    }
    console.log(sumanser)
    return({
        anserMxA: MatrixOrder,
        anserMxB: MatrixB,
        show: matrixA,
        ansersum: parseFloat(sumanser)
    })
}