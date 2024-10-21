import { all, create } from "mathjs";
const math = create(all)

export default function Spinecal(x,y,data){
    let xcopy = x.map(val => parseFloat(val));
    let ycopy = y.map(val => parseFloat(val));
    let Xfind = parseFloat(data)
    let m = []
    for(let i = 0;i < x.length;i++){
        m[i] = (ycopy[i] - ycopy[i - 1]) / (xcopy[i] - xcopy[i-1])
    }

    for(let i = 0; i < x.length;i++){
        if(Xfind < xcopy[i]){
            let anser = ycopy[i-1] + (m[i] * (Xfind - xcopy[i-1]))
            console.log(anser)
            return({
                dataanser : anser
            })
        }
    }
}