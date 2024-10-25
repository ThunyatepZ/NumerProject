const math = require('mathjs')
let x = [2,4,6,8,10]
let y = [9.5,8,10.5,39.5,72.5]
let i
let xwannafine = 10
let m = []
// const FindMi = (i) => {
//     let M = (y[i] - y[i-1]) / (x[i] - x[i-1])
//     return M
// }
for(let i = 0;i < x.length;i++){
    m[i] = (y[i] - y[i-1]) / (x[i] - x[i-1])
}

for(i = 0;i < x.length;i++){
    if(xwannafine < x[i]){
        let anser = y[i-1] + (m[i] * (xwannafine - x[i-1]))
        console.log(`anser = ${anser}`)
        console.log(m)
        return
    }
    if(xwannafine >= x[x.length - 1]){
        let anser = y[x.length-2] + (m[x.length - 1] * (xwannafine - x[x.length - 2]))
        console.log(`anser = ${anser}`)
        console.log(m)
        return
    }
}
