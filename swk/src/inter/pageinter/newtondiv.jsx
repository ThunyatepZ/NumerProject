import React, { useState } from 'react';

function NEWTONDIVIDED() {
    const [numFields, setNumFields] = useState(1);
    const [xValues, setXValues] = useState([]);
    const [fxValues, setFxValues] = useState([]);


    const handleNumFieldsChange = (e) => {
        const value = parseInt(e.target.value, 10);
        if (!isNaN(value) && value >= 0) {
            setNumFields(value);
            setXValues(Array(value).fill(''));
            setFxValues(Array(value).fill(''));
        } else {
            setNumFields(0);
            setXValues([]);
            setFxValues([]);
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

    // useEffect(()=>{
    //     console.log(xValues)
    //     console.log(fxValues)
    // },[xValues,fxValues])

    const handlesubmit = async(e)=>{
        console.log(xValues,fxValues)
    }


    return (
        <div className=''>
            <div className='text-center text-3xl'>
                <h1 className='text-white pt-10 pb-5'>Interpolation : Newton's Divided Difference</h1>
                <div className="divider divider-neutral"></div>
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
                        type="number"
                        className="border rounded p-2 mb-4"
                        placeholder="x value wanna find"
                    />
                    <button className='bg-green-500 p-3 rounded-md' onClick={handlesubmit}>send</button>
                </div>

                {numFields > 0 && numFields <= 10 && (
                    <div className='bg-white p-10 rounded-lg'>
                        <h1 className='text-black mb-4'>Data</h1>
                        {Array.from({ length: numFields }, (_, index) => (
                            <div key={index} className="flex mb-2 gap-3">
                                <input type="checkbox" className="checkbox mt-2" />
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
            </div>
        </div>
    );
}

export default NEWTONDIVIDED;
