import React, { useEffect, useState } from 'react';
import { BlockMath } from 'react-katex';
import SubmenuREG from '../../component/submenuReg';
import Multiplecalculate from '../cal/MultipleRegression';
function MultipleRegression() {
    const [numFields, setNumFields] = useState(1);
    const [xValues, setXValues] = useState([]);
    const [fxValues, setFxValues] = useState([]);
    const [checkedIndices, setCheckedIndices] = useState([]);
    const Y = []
    const [data, setdata] = useState()
    const [anser, setanser] = useState()
    const [Morder, setMorder] = useState()
    const [xorder,setxorder] = useState()
    const [Xall,setXall] = useState([])
    const [Arrayx,setArrayx] = useState([])
    const handleNumFieldsChange = (e) => {
        const value = parseInt(e.target.value, 10);
        if (!isNaN(value) && value >= 0) {
            setNumFields(value);
            setXValues(Array(value).fill(''));
            setFxValues(Array(value).fill(''));
            setCheckedIndices([]);
            setArrayx([])
            setxorder(0)
        } else {
            setNumFields(0);
            setXValues([]);
            setFxValues([]);
            setxorder(0)
        }
    };

    const makeArrayX = (index) => {
        const newArray = Array.from({ length: index }, () => Array(numFields).fill(''));
        setArrayx(newArray);
        setXall([])
        console.log(newArray);
    };

    const handleXChange = (index, value, subindex) => {
        const updatedArrayx = [...Arrayx];
        if (!updatedArrayx[subindex]) {
            updatedArrayx[subindex] = Array(xorder).fill('');
        }
        updatedArrayx[subindex][index] = value;
        setArrayx(updatedArrayx);
    };
    
    

    const handleFxChange = (index, value) => {
        const updatedFxValues = [...fxValues];
        updatedFxValues[index] = value;
        setFxValues(updatedFxValues);
    };

    const handleAllofX = (index,data)=>{
        const updataAllX = [...Xall]
        updataAllX[index] = data
        setXall(updataAllX)
    }

    const handleSubmit = (e) => {
        let X = []
        const ArrayXfiled = Arrayx.every(row => row.every(value => value !== ''))
        const ArrayFILL = Xall.every(data => data !== '')
        if (fxValues.length == 0 || !ArrayXfiled || Xall.length != xorder || !ArrayFILL){
            alert("มุฮ่าๆๆๆ")
            return 1
        }
        const form = {
            dataFind : Xall,
            X : Arrayx,
            Y : fxValues,
            order : xorder
        }
        console.log(form)
        let mul = Multiplecalculate(form)
        setanser(mul)
    };

    useEffect(() => {
        // console.log(xorder);
        // console.log(xValues)
        // console.log(Arrayx)
        console.log(Xall)
    },[xValues,Arrayx,Xall]);

    return (
        <div className=''>
            <div className='text-center text-3xl mb-6'>
                <h1 className='text-white pt-10 pb-5'>Regression : Multiple</h1>
                <div className="divider divider-neutral"><SubmenuREG></SubmenuREG></div>

            </div>
            <div className="flex flex-col items-center">
                <div className='flex justify-items-center items-center gap-2'>
                    <input
                        type="number"
                        onChange={handleNumFieldsChange}
                        className="border rounded p-2 mb-4 bg-white text-black"
                        placeholder="3"
                    />
                    <button className='bg-green-500 p-3 rounded-md' onClick={handleSubmit}>send</button>
                </div>
                {xorder &&(
                    <div className='flex justify-items-center gap-2'>
                        {Array.from({length : xorder},(_,index) => (
                            <div className='flex ' key={index}>
                                <input type="text" className='border rounded p-2 flex-1 bg-white text-black mb-6' placeholder={`x${index + 1}`} onChange={(e) => handleAllofX(index,e.target.value)}/>
                            </div>
                        ))}
                    </div>
                )}
                {numFields > 0 && numFields <= 10 && (
                    <div className='bg-white p-10 rounded-lg'>
                        <h1 className='text-black mb-4'>Data</h1>
                        <input type="text" placeholder='number of X' className='border rounded p-2 flex-1 bg-white text-black mb-6' onChange={(e) => {
                            setxorder(e.target.value)
                            makeArrayX(e.target.value)
                        }}/>

                        {Array.from({ length: numFields }, (_, index) => (
                            <div key={index} className="flex mb-2 gap-3">
                                {Array.from({length: xorder},(_,index1) =>(
                                <div key={index1}>
                                    <input
                                        type="text"
                                        value={Arrayx[index1]?.[index] || ''}  // ตรวจสอบว่ามี Arrayx[index1] ก่อนเข้าถึง index
                                        onChange={(e) => handleXChange(index, e.target.value, index1)}
                                        className="border rounded p-2 flex-1 bg-white text-black"
                                        placeholder={`x${index1 + 1}.${index + 1}`}
                                    />
                                </div>
                                
                                ))}
                                <input
                                    type="text"
                                    value={fxValues[index] || ''}
                                    onChange={(e) => handleFxChange(index, e.target.value)}
                                    className="border rounded p-2 flex-1 bg-white text-black"
                                    placeholder={`f(x${index + 1})`}
                                />
                            </div>
                        ))}

                    </div>

                )}

                {anser && (
                    <div className='bg-gray-500 w-[70%] mt-5 rounded-lg'>
                        <div className='text-3xl mb-4 text-center mt-4'>Regression</div>
                        <BlockMath math={`
                        \\begin{bmatrix}
                        \\begin{matrix}
                        ${anser.Matrix.map((rows, rowsIndex) => (
                            Array.isArray(rows) ? rows.map((value, colsIndex) => {
                                return value
                            }).join(' & ') : ''
                        )).join('\\\\\n')}
                        \\end{matrix}
                        \\begin{array}{c:c}
                        ${anser.matrixB.map((value,index)=>(
                            `& ${value}`
                        )).join('\\\\\n')}
                        \\end{array}
                        \\end{bmatrix}
                        `}/>
                    
                        <BlockMath math={`
                        
                        ${anser.arr.map((data,index)=>{
                            return `a${index} = ${data}`
                        }).join('\\\\\n')}
                        \\\\\n
                        ${`anser = ${anser.ans}`}`
                        }/>

                        
                    </div>
                )}


            </div>
        </div>
    );
}

export default MultipleRegression;