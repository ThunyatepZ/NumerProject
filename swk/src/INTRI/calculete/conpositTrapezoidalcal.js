import { all, create } from 'mathjs'
const math = create(all)

export default function compositTrapzoidalcalculate(props){
    let scope
    function fx(x){
        return math.evaluate(props.equation,scope)
    }

    scope = {x : props.dataA}
    let fxA = fx(scope)
    scope = {x : props.dataB}
    let fxB = fx(scope)
    let h = ((props.dataB-props.dataA) / props.dataN)
    parseFloat(h)
    let dataA = parseFloat(props.dataA)
    let dataB = parseFloat(props.dataB)
    console.log(h)
    let sum = 0
    parseFloat(sum)
    let arr = []
    for(let i = dataA;i < dataB;i+=h){
        if(math.round(i,6) != dataB && math.round(i,6) != dataA){
            scope = {x : i}
            sum = sum + fx(i)
            arr.push(`${i} : ${fx(i)}`)
            console.log(i)
            console.log(fx(i))
        }
    }
    let anser = parseFloat(((h/2) * (fxA + fxB + (sum * 2))))
    console.log(arr)

    return({
        anser : anser,
        
    })
}