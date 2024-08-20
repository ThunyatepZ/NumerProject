module.exports =  Onepointiter = ({Xstart, Error,equation}) =>{
    const math = require('mathjs')
    let scope
    
    if(!Error || !Xstart || !equation){

    }
    else{
        function calculete(x){
            return math.evaluate(equation,scope)
        }
    
        let x0 = parseFloat(Xstart)
        let xold = 0
        let error
        do{
            xold = x0
            scope = { x:x0}
            x0 = calculete(x0)
            error = Math.abs((x0-xold))
            console.log(error , parseFloat(x0))
    
        }while(error >= parseFloat(Error))


            return x0

    }
    
}