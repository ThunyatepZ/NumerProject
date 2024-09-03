
function fx(x){
    let fxm = 43*x-180
    return fxm
}
let error;
let x = 0,xend = 10,xold;
let y,yold = fx(x),step = 1;
let iteration = 0
do{
    xold = x
    y = fx(x)
    if(yold * y < 0){
        x-=step
        step/=10
        y = fx(x)
    }
    x+=step
    error = Math.abs(x - xold)
    yold = y
    iteration++
    console.log(x,y.toFixed(6),error)
}while(error >= 0.000001)