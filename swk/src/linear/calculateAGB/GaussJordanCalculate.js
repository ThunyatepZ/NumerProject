import { all, create } from 'mathjs'
const math = create(all)
export default function GaussJordanCalculate(props){
    try{
        let mainMatrixA = [...props.matrixA]
        let mainMatrixB = [...props.matrixB]
        let A  = [...mainMatrixA]
        let B  = [...mainMatrixB]
        let x = Array.from({length: A.length},() => 1)
        //left
        for(let i = 0; i < B.length;i++){
            for(let j = 0;j < B.length;j++){
                if(i > j){
                    let tempA = [...mainMatrixA[j]]
                    let tempB = mainMatrixB[j]
                    let tempAJJ = mainMatrixA[j][j]
                    let tempAIJ = mainMatrixA[i][j]
                    tempB = (tempB / tempAJJ) * tempAIJ
                    mainMatrixB[i] = mainMatrixB[i] - tempB
                    for(let n = 0;n < B.length;n++){
                        mainMatrixA[i][n] = mainMatrixA[i][n] - ((tempA[n] / tempAJJ) * tempAIJ)
                    }
                }

            }
        }
        //Right
        for(let i = B.length - 1 ; i >= 0;i--){
            for(let j = B.length - 1 ;j >= 0 ;j--){
                if(i < j){
                    let tempA = [...mainMatrixA[j]]
                    let tempB = mainMatrixB[j]
                    let tempAJJ = mainMatrixA[j][j]
                    let tempAIJ = mainMatrixA[i][j]
                    tempB = (tempB / tempAJJ) * tempAIJ
                    mainMatrixB[i] = mainMatrixB[i] - tempB
                    for(let n = B.length - 1;n >= 0;n--){
                        mainMatrixA[i][n] = mainMatrixA[i][n] - ((tempA[n] / tempAJJ) * tempAIJ)
                    }
                }

            }
        }
        
        //Middle
        for(let i = 0;i < B.length;i++){
            for(let j = 0;j < B.length;j++){
                if(i == j){
                    let tempAsum = mainMatrixA[i][i]
                    mainMatrixB[i] = mainMatrixB[i] / tempAsum
                    for(let x = 0;x < B.length; x++){
                        mainMatrixA[i][x] = mainMatrixA[i][x] / tempAsum
                        // console.log(A)
                    }
                }
            }
        }
        for(let a = 0;a < B.length;a++){
            if(a == 0){
                x = math.multiply(mainMatrixA,mainMatrixB)
            }
            x[a] = ` x${a+1}: ` + x[a]
        }
        return({
            anserX: x
        })
    
    
    
    }catch(err){
        return{ anserX: "error"}
    }
}