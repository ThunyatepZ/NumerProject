import React, { useState } from 'react';
import GraphforReg from '../../component/GraphforReg';
import Submenuinter from '../../component/submenuinter';
import LgCal from '../calculateInter/lagrange';
const test = import.meta.env.VITE_API_KEYS_POST
import axios from 'axios';
import Swal from 'sweetalert2';
function Largrange() {
    const [numFields, setNumFields] = useState(1);
    const [xValues, setXValues] = useState([]);
    const [fxValues, setFxValues] = useState([]);
    const [checkedIndices, setCheckedIndices] = useState([]);
    const X = []
    const Y = []
    const [data,setdata] = useState()
    const [anser,setanser] = useState()
    
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
            setCheckedIndices(checkedIndices.filter(i => i !== index));
        } else {
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
        checkedIndices.sort()
        for(let i = 0;i < checkedIndices.length;i++){
            X[i] = xValues[checkedIndices[i]]
            Y[i] = fxValues[checkedIndices[i]]
        }
        if(X.length == 0 ||fxValues.length == 0 || xValues.length == 0){
            alert("มุฮ่าๆๆๆ")
            return 1
        }
        console.log(data)
        const dd = LgCal(X,Y,data)
        setanser(dd)
    };

    const onsave = async(e) => {
        if(!anser){
            Swal.fire({
                title: "Error!",
                text: "Please fill data",
                icon: "error"
            });
        }
        else{
            const temp = {
                Xdata : anser.x,
                Ydata : anser.y,
                Anser : anser.ansum,
                type : "Interpolation",
                subtype : "Lagrange",
                find : data
            }
            const dataobject = {
                dataobject : temp,
                type : "Interpolation"
            }
            await axios.post(test,dataobject).then((res) =>{
                    if(res.data == "Already have it"){
                        Swal.fire({
                            title: "Error!",
                            text: "We already have this data on our database",
                            icon: "error"
                        });
                    }
                    else{
                        Swal.fire({
                            title: "Save success",
                            text: "Thank for help",
                            icon: "success"
                        });
                        console.log(res.data)
                    }
            })
        }
       
    }

    // useEffect(()=>{
    //     for(let i = 0;i < checkedIndices.length;i++){
    //         console.log(checkedIndices[i])
    //     }
    // },[])

    return (
        <div className=''>
            <div className='text-center text-3xl mb-6'>
                <h1 className='text-white pt-10 pb-5'>Interpolation : Lagrange</h1>
                <div className="divider divider-neutral"><Submenuinter></Submenuinter></div>

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
                        onChange={(e)=> setdata(e.target.value)}
                    />
                    <button className='bg-green-500 p-3 rounded-md' onClick={handleSubmit}>send</button>
                    <button className='bg-gray-400 p-3 rounded-md' onClick={onsave}>Save</button>
                </div>

                {numFields > 0 && numFields <= 10 && (
                    <div className='bg-white p-10 rounded-lg'>
                        <h1 className='text-black mb-4'>Data</h1>
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
                        <div>
                            {anser && (
                                <div className='text-black'>
                                    Anser is : {anser.ansum}
                                </div>
                            )}
                        </div>
                    </div>
                    
                )}

            </div>
            {anser && (
            <div className=''>
            <div className='flex justify-center mt-10'>
                <GraphforReg props={anser}/>
            </div>
        </div>
            )}


        </div>
    );
}

export default Largrange;
