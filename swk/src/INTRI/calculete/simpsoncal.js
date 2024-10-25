import { all, create } from 'mathjs';
const math = create(all)

function simpsoncalculate(props){
    let scope;
    function fx(x){
        return math.evaluate(props.equation,scope)
    }

    let h = parseFloat((props.dataB - props.dataA) / 2)
    console.log(`h = ${h}`)
    let dataA = parseFloat(props.dataA)
    let dataB = parseFloat(props.dataB)
    let arr = []
    for(let i = dataA;i <= dataB;i= i + h){
        scope = {x : i}
        arr.push(fx(i))
        console.log(i)
    }
    let sum = 0
    for(let i = 0;i < arr.length;i++){
        if(i == 1){
            sum = parseFloat(sum + (arr[i] * 4))
        }
        else{
            sum = parseFloat(sum + arr[i])
        }
    }
    let anser = (h/3) * (sum)
    return({
        anser : anser
    })
}

export default simpsoncalculate