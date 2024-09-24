import { all, create } from 'mathjs';
const math = create(all)
export default function GraphicalJS({Xstart,Xend,Error,equation}){
    if(!Xstart || !Xend || !Error || !equation){
        alert("Please input")
        return 1
    }
    else{
        let scope;
    function fx(x){
        let fxm = math.evaluate(equation,scope)
        return fxm
    }
    let anser
    let error;
    let keepx = []
    let keepFX = []
    let Keeperror = []
    let keepiter = []
    let x1 = parseFloat(Xstart),xend = parseFloat(Xend),xold;
    let y,yold = 0,step = 1;
    let iteration = 0
    do{
        
        keepx.push(x1)
        xold = x1
        scope = {x:x1}
        y = fx(x1)
        keepFX.push(y)
        if(yold * y < 0){
            x1-=step
            step/=10
            scope = {x:x1}
            y = fx(x1)
            // keepFX.push(math.round(y,6))
        }
        x1+=step
        error = math.abs(y)
        Keeperror.push(error)
        yold = y
        iteration++
        keepiter.push(iteration)
        

        anser = x1
        if(error < Error){
            
            return(
                {
                    NewAnser: anser,
                    xans: keepx,
                    it: keepiter,
                    yans: keepFX,
                    err: Keeperror

                }
            )
        }
        else if(x1 == xend){
            scope = {x:x1}
            y = fx(x1)
            keepx.push(x1)
            error = math.abs(y)
            keepFX.push(y)
            Keeperror.push(error)
            iteration++
            keepiter.push(iteration)
            

            return(
                {
                    NewAnser: anser,
                    xans: keepx,
                    it: keepiter,
                    yans: keepFX,
                    err: Keeperror,
                    type: 'Graphical'

                }
            )
        }

        
    }while(error > Error || x1<xend+1)
    }
    
}