import { all, create } from "mathjs";
const math = create(all)
function minv(props){
    let A = [...props.matrixA]
    let B = [...props.matrixB]
    let matrixsum = []
    let anserIV = []
    let mainMatrixA = [...props.matrixA]
    let mainMatrixB = [...props.matrixB]
    let matrixI = JSON.parse(JSON.stringify(props.matrixA))
    for(let i = 0; i < B.length;i++){
        for(let j = 0; j < B.length;j++){
            if(i != j){
                matrixI[i][j] = 0
            }
            else{
                matrixI[i][j] = 1
            }
        }
    }

    for(let i = 0; i < B.length;i++){
        for(let j = 0;j < B.length;j++){
            if(i > j){
                let tempA = [...mainMatrixA[j]]
                let tempB = mainMatrixB[j]
                let tempi = [...matrixI[j]]
                let tempAJJ = mainMatrixA[j][j]
                let tempAIJ = mainMatrixA[i][j]
                tempB = (tempB / tempAJJ) * tempAIJ
                mainMatrixB[i] = mainMatrixB[i] - tempB
                for(let n = 0;n < B.length;n++){
                    mainMatrixA[i][n] = mainMatrixA[i][n] - ((tempA[n] / tempAJJ) * tempAIJ)
                    matrixI[i][n] = matrixI[i][n] - ((tempi[n] / tempAJJ) * tempAIJ)
                }
                matrixsum.push(JSON.parse(JSON.stringify(mainMatrixA)))
                anserIV.push(JSON.parse(JSON.stringify(matrixI)))
            }
        }
    }

    for(let i = B.length - 1 ; i >= 0;i--){
        for(let j = B.length - 1 ;j >= 0 ;j--){
            if(i < j){
                let tempA = [...mainMatrixA[j]]
                let tempB = mainMatrixB[j]
                let tempAJJ = mainMatrixA[j][j]
                let tempAIJ = mainMatrixA[i][j]
                let tempi = [...matrixI[j]]
                tempB = (tempB / tempAJJ) * tempAIJ
                mainMatrixB[i] = mainMatrixB[i] - tempB
                for(let n = B.length - 1;n >= 0;n--){
                    mainMatrixA[i][n] = mainMatrixA[i][n] - ((tempA[n] / tempAJJ) * tempAIJ)
                    matrixI[i][n] = matrixI[i][n] - ((tempi[n] / tempAJJ) * tempAIJ)
                }
                matrixsum.push(JSON.parse(JSON.stringify(mainMatrixA)))
                anserIV.push(JSON.parse(JSON.stringify(matrixI)))
            }

        }
    }

    for(let i = 0;i < B.length;i++){
        for(let j = 0;j < B.length;j++){
            if(i == j){
                let tempAsum = mainMatrixA[i][i]
                mainMatrixB[i] = mainMatrixB[i] / tempAsum
                for(let x = 0;x < B.length; x++){
                    mainMatrixA[i][x] = mainMatrixA[i][x] / tempAsum
                    matrixI[i][x] = matrixI[i][x] / tempAsum
                }
                matrixsum.push(JSON.parse(JSON.stringify(mainMatrixA)))
                anserIV.push(JSON.parse(JSON.stringify(matrixI)))
            }
        }
    }

    let anserinv = math.multiply(matrixI,B)
    for(let a = 0;a < B.length;a++){
        anserinv[a] = ` x${a+1}: ` + anserinv[a]
    }

    console.log(mainMatrixA)
    console.log(anserinv)
    return({
        anserX: anserinv,
        anserB: B,
        stepElit : matrixsum,
        anserI : anserIV
    })
}

export default minv