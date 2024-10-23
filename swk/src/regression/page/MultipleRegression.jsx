import React, { useState } from 'react';
import { BlockMath } from 'react-katex';
import SubmenuREG from '../../component/submenuReg';
function MultipleRegression() {
    const [numFields, setNumFields] = useState(1);
    const [xValues, setXValues] = useState([]);
    const [fxValues, setFxValues] = useState([]);
    const [checkedIndices, setCheckedIndices] = useState([]);
    const X = []
    const Y = []
    const [data, setdata] = useState()
    const [anser, setanser] = useState()
    const [Morder, setMorder] = useState()

    const handleNumFieldsChange = (e) => {
        const value = parseInt(e.target.value, 10);
        if (!isNaN(value) && value >= 0) {
            setNumFields(value);
            setXValues(Array(value).fill(''));
            setFxValues(Array(value).fill(''));
            setCheckedIndices([]);
        } else {
            setNumFields(0);
            setXValues([]);
            setFxValues([]);
        }
    };

    const handleCheckboxChange = (index) => {
        if (checkedIndices.includes(index)) {
            // เอาออกถ้า index นี้ถูกเช็คอยู่แล้ว
            setCheckedIndices(checkedIndices.filter(i => i !== index));
        } else {
            // เพิ่ม index ถ้าไม่ได้ถูกเช็ค
            setCheckedIndices([...checkedIndices, index]);
        }
    };

    const handleXChange = (index, value) => {
        const updatedXValues = [...xValues];
        updatedXValues[index] = value;
        setXValues(updatedXValues);
    };

    const handleFxChange = (index, value) => {
        const updatedFxValues = [...fxValues];
        updatedFxValues[index] = value;
        setFxValues(updatedFxValues);
    };


    const handleSubmit = (e) => {
        // console.log('X Values:', xValues);
        // console.log('F(x) Values:', fxValues);
        checkedIndices.sort()
        for (let i = 0; i < checkedIndices.length; i++) {
            X[i] = xValues[checkedIndices[i]]
            Y[i] = fxValues[checkedIndices[i]]
        }
        if (X.length == 0 || fxValues.length == 0 || xValues.length == 0) {
            alert("มุฮ่าๆๆๆ")
            return 1
        }
        console.log(data)
        // const dd = SIMPLE(X, Y, data, Morder)
        // setanser(dd)
        // console.log(X,Y)
        // console.log('Checked Indices:', checkedIndices);
    };

    // useEffect(()=>{
    //     for(let i = 0;i < checkedIndices.length;i++){
    //         console.log(checkedIndices[i])
    //     }
    // },[])

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
                    <input
                        type='text'
                        className="border rounded p-2 mb-4"
                        placeholder="x value wanna find"
                        onChange={(e) => setdata(e.target.value)}
                    />
                    <button className='bg-green-500 p-3 rounded-md' onClick={handleSubmit}>send</button>
                </div>

                {numFields > 0 && numFields <= 10 && (
                    <div className='bg-white p-10 rounded-lg'>
                        <h1 className='text-black mb-4'>Data</h1>
                        <input type="text" placeholder='M order' className='border rounded p-2 flex-1 bg-white text-black mb-6' onChange={(e) => setMorder(e.target.value)} />
                        {Array.from({ length: numFields }, (_, index) => (
                            <div key={index} className="flex mb-2 gap-3">
                                <input
                                    type="checkbox"
                                    className="checkbox mt-2"
                                    checked={checkedIndices.includes(index)}
                                    onChange={() => handleCheckboxChange(index)}
                                />
                                <input
                                    type="text"
                                    value={xValues[index] || ''}
                                    onChange={(e) => handleXChange(index, e.target.value)}
                                    className="border rounded p-2 flex-1 bg-white text-black"
                                    placeholder={`x${index + 1}`}
                                />

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
                        ${anser.anserMxA.map((rows, rowsIndex) => (
                            Array.isArray(rows) ? rows.map((value, colsIndex) => {
                                return value
                            }).join(' & ') : ''
                        )).join('\\\\\n')}
                        \\end{matrix}
                        \\begin{array}{c:c}
                        ${anser.anserMxB.map((value,index)=>(
                            `& ${value}`
                        )).join('\\\\\n')}
                        \\end{array}
                        \\end{bmatrix}
                        `}/>
                    
                        <BlockMath math={`
                        
                        ${anser.show.map((data,index)=>{
                            return `a${index} = ${data}`
                        }).join('\\\\\n')}
                        \\\\\n
                        ${`anser = ${anser.ansersum}`}
                        `
                        
                    
                        }/>

                        
                    </div>
                )}


            </div>
        </div>
    );
}

export default MultipleRegression;
