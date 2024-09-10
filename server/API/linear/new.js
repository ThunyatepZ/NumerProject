const math = require('mathjs')

let A = [[5,2,0,0],[2,5,2,0],[0,2,5,2],[0,0,2,5]]
let B = [12,17,14,7]
let x = [0,0,0,0]
let r = math.subtract(B, math.multiply(A, x))
let d = [...r]
let error

let iter = 0

do {
    iter++
    
    let Ad = math.multiply(A, d)
    let rTr = math.multiply(math.transpose(r), r)
    let dTAd = math.multiply(math.transpose(d), Ad)
    
    let alpha = rTr / dTAd
    x = math.add(x, math.multiply(alpha, d))
    
    let rNew = math.subtract(r, math.multiply(alpha, Ad))
    error = math.sqrt(math.multiply(math.transpose(rNew), rNew))
    
    let beta = math.multiply(math.transpose(rNew), rNew) / rTr
    d = math.add(rNew, math.multiply(beta, d))
    
    r = rNew
    
    console.table(iter, math.round(x, 6), error)
} while (error > 0.000001)
