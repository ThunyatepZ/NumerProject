const math = require('mathjs')
let x = [2,4,6,8,10]
let y = [9.5,8,10.5,39.5,72.5]
let i
let xwannafine = 4.5

const FindMi = (i) => {
    let M = (y[i] - y[i-1]) / (x[i] - x[i-1])
    return M
}
for(i = 0;i < x.length;i++){
    if(xwannafine < x[i]){
        let mi = FindMi(i)
        let anser = y[i-1] + (mi * (xwannafine - x[i-1]))
        console.log(`anser = ${anser}`)
        return
    }
}