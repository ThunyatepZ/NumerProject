import { all, create } from "mathjs";
const math = create(all);

export default function GaussE(props) {

    try {
        let A = [...props.matrixA];
        let mxA = [...props.matrixA];
        let mxB = [...props.matrixB];
        let B = [...props.matrixB];
        let x = Array.from({ length: A.length }, () => 0);

        for (let i = 0; i < B.length; i++) {
            for (let j = 0; j < B.length; j++) {
                if (i > j) {
                    let temp = [...mxA[j]];
                    let tempb = mxB[j];
                    let tempaJJ = mxA[j][j];
                    let tempaIJ = mxA[i][j];

                    tempb = (tempb / tempaJJ) * tempaIJ;
                    mxB[i] = mxB[i] - tempb;

                    for (let m = 0; m < B.length; m++) {
                        mxA[i][m] = mxA[i][m] - ((temp[m] / tempaJJ) * tempaIJ);
                    }
                }
            }
        }

        let sum;
        for (let k = B.length - 1; k >= 0; k--) {
            sum = 0;
            for (let n = B.length - 1; n >= 0; n--) {
                sum += mxA[k][n] * x[n];
            }

            x[k] = ((mxB[k] - sum) / mxA[k][k])
        }

        for(let i = 0;i < x.length;i++){
            x[i] = `x${i+1}:` + x[i]
        }
        
        return {
            
            anserA: mxA,
            anserB: mxB,
            anserX: x
        };
    } catch (err) {
        return({
            anserX: "can't divede by zero"
        })
    }
}
