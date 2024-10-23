import { all, create } from "mathjs";
const math = create(all);

function MultipleCalculate(props) {
    try{
        let xcopy = [...props.X];
        let ycopy = [...props.Y];
        let xanser = [...props.dataFind]
        // แปลงค่าของ xcopy เป็นตัวเลข
        xcopy = xcopy.map((val) => val.map(data => parseFloat(data)));
        ycopy = ycopy.map(val => parseFloat(val))
        xanser = xanser.map(data => parseFloat(data))
        let Mxorder = [];
        let MxB = [];
        
        for (let i = 0; i <= props.order; i++) {
            Mxorder[i] = [];
            for (let j = 0; j <= props.order; j++) {
                Mxorder[i].push(0);
            }
        }
        
        let sum = 0;
    
        for (let i = 0; i < Mxorder.length; i++) {
            for (let j = 0; j < Mxorder.length; j++) {
                if (i === j) {
                    if (i === 0 && j === 0) {
                        Mxorder[i][j] = xcopy[i].length; // จำนวนข้อมูล
                    } else {
                        for (let n = 0; n < xcopy[i - 1].length; n++) {
                            sum += (xcopy[i - 1][n] * xcopy[i - 1][n]); // คำนวณค่ารวม
                        }
                        Mxorder[i][j] = sum;
                        sum = 0;
                    }
                } else {
                    if (j === 0) {
                        Mxorder[i][j] = math.sum(xcopy[i - 1]); // ผลรวมของ xcopy[i-1]
                    }
                    if (i === 0) {
                        Mxorder[i][j] = math.sum(xcopy[j - 1]); // ผลรวมของ xcopy[j-1]
                    }
                    if (i !== 0 && j !== 0) {
                        for (let v = 0; v < xcopy[i - 1].length; v++) {
                            sum += (xcopy[i - 1][v] * xcopy[j - 1][v]); // คำนวณค่าผลคูณ
                        }
                        Mxorder[i][j] = sum;
                        sum = 0;
                    }
                }
            }
        }
    
        for (let i = 0; i < Mxorder.length; i++) {
            if (i === 0) {
                MxB[i] = math.sum(ycopy); // ผลรวมของ ycopy
            } else {
                for (let g = 0; g < xcopy[i - 1].length; g++) {
                    sum += (xcopy[i - 1][g] * ycopy[g]); // คูณ xcopy กับ ycopy
                }
                MxB[i] = sum;
                sum = 0;
            }
        }
        let anser = math.multiply(math.inv(Mxorder),MxB)
        anser = anser.map(val => parseFloat(val))
        let sums = 0
        for(let i = 0;i <= props.order;i++){
            if(i == 0){
                sums = sums + anser[i]
            }
            else{
                sums = sums + (anser[i] * xanser[i-1])
            }
        }

        return({
            Matrix:Mxorder,
            matrixB : MxB,
            arr : anser,
            ans : sums
        })
    }
    catch(err){
        alert(err)
        return 1
    }

}

export default MultipleCalculate;
