import { all, create } from 'mathjs'
const math = create(all)
export default function singleTrapezoidalcal(props){
    let scope
    function fx(x){
        return math.evaluate(props.equation,scope)
    }
    scope = {x:props.dataA}
    let fxA = fx(props.dataA)
    console.log(fxA)
    scope = {x:props.dataB}
    let fxB = fx(props.dataB)
    console.log(fxB)
    let h = props.dataB - props.dataA
    let anser = (h/2)*(fxA + fxB)
    return({
        anser : anser
    })
}