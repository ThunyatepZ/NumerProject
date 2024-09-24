import { all, create } from 'mathjs'
const math = create(all)
export default function secantmethodcalculate({Xstart,Xend,Error,equation}){
    if(!Error || !Xstart || !equation || !Xend){
        alert('EEEEEE')
        return 1
    }
    else{
        let scope
    function fx(x){
        return math.evaluate(equation,scope)
    }
    let arrKeepxnew = []
    let arrKeepfxxnew = []
    let arrError = []
    let arrI = []
    let x0 = Xstart;
    let x1 = Xend
    let xnew,fxnew;
    let err;
    let fxx1,fxx0
    let i = 0;
    do{
        i++;
        arrI.push(i)
        scope = {x:x0}
        fxx0 = fx(x0)
        scope = {x:x1}
        fxx1 = fx(x1)
        xnew = x1 - ((fxx1 * (x0 - x1)) / (fxx0 - fxx1))
        scope = {x:xnew}
        fxnew = fx(xnew)
        arrKeepfxxnew.push(fxnew)
        arrKeepxnew.push(xnew)
        err = math.abs((xnew - x1) / xnew)
        arrError.push(err * 100)
        console.log(xnew)
        x0 = x1
        x1 = xnew
    }while(err >= Error)

    return({
        Xans : xnew,
        arrXans :arrKeepxnew,
        arrFxans : arrKeepfxxnew,
        arrER : arrError,
        arrITER : arrI
    })
    }
    
}