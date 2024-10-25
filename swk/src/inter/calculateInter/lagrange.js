import { all, create } from "mathjs";
const math = create(all)
function LgCal(x,y,data){
    let xcopy = [...x]
    let ycopy = [...y]
    let data1 = data
    let temp = 1
    let tempdown = 1
    let anser = new Array(x.length).fill('')
    let ansersum = 0
    for (let i = 0; i < x.length; i++) {
        for (let j = 0; j < x.length; j++) {
            if (j == i) {
    
            }
            else {
                temp = temp * (x[j] - data1)
            }
    
        }
        for (let j = 0; j < x.length; j++) {
            if (j == i) {
    
            } else {
                tempdown = tempdown * (x[j] - x[i])
            }
        }
    
        anser[i] = ((temp / tempdown) * y[i])
        ansersum += ((temp / tempdown) * y[i])
    
        tempdown = 1;
        temp = 1
    
    }
    return({
        x : xcopy,
        y : ycopy,
        D : data1,
        ansum : ansersum,
        ans : anser,
        mode : "inter"
    })
}

export default LgCal
