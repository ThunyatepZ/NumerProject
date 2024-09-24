const math = require('mathjs')
export default function secantmethod(){
    fx = (x) =>{
        return math.pow(x,2) - 7
    }
    
    let x0 = 2;
    let x1 = 5
    let xnew;
    let err;
    let fxx1,fxx0
    let i = 0;
    let xround;
    do{
        fxx0 = fx(x0)
        fxx1 = fx(x1)
        xnew = x1 - ((fxx1 * (x0 - x1)) / (fxx0 - fxx1))
        err = math.abs((xnew - x1) / xnew)
        console.log(xnew)
        x0 = x1
        x1 = xnew

    }while(err >= 0.000001)


}