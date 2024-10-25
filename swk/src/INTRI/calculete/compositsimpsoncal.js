import { all, create } from "mathjs"
const math = create(all)

export default function compositsimpsoncalculate(props){
    let scope
    function fx(x){
        return math.evaluate(props.equation,scope)
    }
    let dataA = parseFloat(props.dataA)
    let dataB = parseFloat(props.dataB)
    let n = parseFloat(props.dataN)
    let h = (dataB - dataA) / (n*2)
    let arr = []
    for(let i = dataA;i <= dataB;i = i + h){
        if(parseFloat(i) == dataA || parseFloat(i) == dataB){
            scope = {x : i}
            arr.push(fx(i))

        }
        else{
            scope = {x : i}
            arr.push(fx(i))
        }
    }
    let sum1 = 0,sum2 = 0
    for(let i = 0;i < arr.length;i++){
        if(i % 2 == 0 && i != 0 && i < arr.length - 1){
            console.log(arr[i])
            sum2 = sum2 + arr[i]
            ///2 4 6
        }
        if(i % 2 != 0 && i != 0 && i < arr.length - 1){
            console.log(arr[i])
            //1 3 5
            sum1 = sum1 + arr[i]
        }
    }
    let anser = ((h/3) * (arr[0] + arr[arr.length - 1] + (sum1 * 4) + (sum2 * 2)))
    console.log(anser)
    return({
        anser : anser
    })

}