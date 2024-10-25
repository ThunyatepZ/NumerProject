import React, { useEffect, useState } from 'react';
import Submenuinter from '../../component/submenuinter';
import Spinecal from '../calculateInter/Spine';
import GraphforReg from '../../component/GraphforReg';
function spine() {
    const [anser,setanser] = useState(null) ;
    const [numFields,setNumFields] = useState(1)
    const [xvalue,setXValues] = useState([])
    const [yvalue,setYValues] = useState([])
    const [showanser,setshowanser] = useState({})
    let X = []
    let Y = []
    const [checkedIndices, setCheckedIndices] = useState([]);
    const handlenumfillchange = (e)=>{
        const value = parseInt(e.target.value, 10)
        if(!isNaN(value) && value >= 0){
            setNumFields(value)
            setXValues(Array(value).fill(''))
            setYValues(Array(value).fill(''))
            setCheckedIndices([])
        }
        else{
            setNumFields(0)
            setXValues([])
            setYValues([])
        }
    }

    const handlecheckbox = (index) =>{
        if(checkedIndices.includes(index)){
            setCheckedIndices(checkedIndices.filter(i => i !== index))
        }
        else{
            setCheckedIndices([...checkedIndices,index])
        }
    }

    const handleXchange = (index,data) =>{
        const tempx = [ ...xvalue]
        tempx[index] = data;
        setXValues(tempx)
    }
    const handlefxchange = (index,data) =>{
        const tempy = [...yvalue]
        tempy[index] = data
        setYValues(tempy)
    }
    const handleanser = (e) => {
        setanser(e.target.value)
    }
    const handlesubmit = (e) =>{
        checkedIndices.sort()
        for(let i = 0;i < checkedIndices.length;i++){
            X[i] = xvalue[checkedIndices[i]]
            Y[i] = yvalue[checkedIndices[i]]
        }
        if(X.length == 0  || yvalue.length == 0 || xvalue.length == 0 || anser == null){

            alert("BRUH")
            return 1
        }
        console.log(X)
        console.log(Y)
        console.log(anser)
        const sendspineCal = Spinecal(X,Y,anser)
        setshowanser(sendspineCal)
    }

    useEffect(()=>{
        // console.log(checkedIndices)
        // console.log(xvalue,yvalue)
    },[])
    
return (
    <div>
        <div className='text-center text-3xl mb-6'>
            <h1 className='text-white pt-10 pb-5'>Interpolation : Spine</h1>
            <div className='divider divider-neutral'><Submenuinter></Submenuinter></div>
        </div>
        <div className='flex flex-col items-center'>
            <div className='flex justify-items-center items-center gap-2'>
                <input type="number" className="border rounded p-2 mb-4 bg-white text-black" onChange={handlenumfillchange}/>
                <input type="text" className="border rounded p-2 mb-4 bg-white text-black" onChange={handleanser}/>
                <button onClick={handlesubmit}>onclick</button>
            </div>
            {numFields > 0 && numFields <= 10 && (
            <div className='bg-white p-10 rounded-lg'>
                <p className='text-black mb-4'>Data</p>
                {Array.from({length : numFields},(_,index) => (
                    <div key={index} className='flex mb-2 gap-3'>
                        <input type="checkbox" className='checkbox mt-2' onChange={(e) => handlecheckbox(index)}/>
                        <input type="text" value={xvalue[index] || ''} className="border rounded p-2 flex-1 bg-white text-black" placeholder={`x${index+1}`} onChange={(e) => handleXchange(index,e.target.value)}/>
                        <input type="text" value={yvalue[index] || ''} className="border rounded p-2 flex-1 bg-white text-black" placeholder={`f(x${index+1})`} onChange={(e) => handlefxchange(index,e.target.value)}/>
                    </div>
                ))}
            {showanser &&(
            <div className='text-black'>
                Anser = {showanser.ansum}
            </div>
        )}
            </div>
        )}
            <div className='flex justify-center mt-10'>
                <GraphforReg props={showanser}/>
            </div>
        </div>
    </div>
  )
}

export default spine