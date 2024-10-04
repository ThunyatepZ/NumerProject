import { all, create } from 'mathjs'
const math = create(all)
function CalculateConjugate(props) {
    let A = [...props.matrixA]
    let B = [...props.matrixB]
    let x = [...props.x1]
    let arrx = []
    let arry = []
    let R, D, Error
    let arr = []
    let Alpha, Ramda
    R = math.subtract(math.multiply(A, x), B)
    D = math.multiply(R, -1)
    do {
        Ramda = -1 * (math.multiply(math.transpose(D), R)) / math.multiply(math.multiply(math.transpose(D), A), D)
        x = math.add(x, math.multiply(Ramda, D))
        R = math.subtract(math.multiply(A, x), B)
        Error = math.sqrt(math.multiply(math.transpose(R), R))
        Alpha = math.multiply(math.transpose(R), A, D) / math.multiply(math.transpose(D), A, D)
        D = math.subtract(R, math.multiply(Alpha, D));
        // console.table(math.round(x, 6))
        arrx.push(x[0])
        arry.push(x[1])
        console.log(x)
    } while (Error >= 0.000001)
        
        return({
            anserX : arrx,
            anserY : arry,
            realanser : x
        })

}
export default CalculateConjugate