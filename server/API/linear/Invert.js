const math = require('mathjs')
let A = [[-2,3,1],[3,4,-5],[1,-2,1]]
let B =[9,0,-4]
let keep = math.inv(A)
console.log(keep)
console.log(math.round(math.multiply(keep, B),6))