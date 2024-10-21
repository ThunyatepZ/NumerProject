import React from 'react'
import { useState } from 'react'
import Submenuinter from '../../component/submenuinter';
function spine() {
    const [anser,setanser] = useState({});
    const [numFields,setNumFields] = useState(1)
    const [xvalue,setXValues] = useState([])
    const [yvalue,setYValues] = useState([])
    
    const handlenumfillchange = (e)=>{
        const value = parseInt(e.target.value, 10)
        if(!isNaN(value) && value >= 0){
            setNumFields(value)
            setXValues(Array(value).fill(''))
            setYValues(Array(value).fill(''))
        }
        else{
            setNumFields(0)
            setXValues([])
            setYValues([])
        }
    }



  return (
    <div>
        <div className='text-center text-3xl mb-6'>
            <h1 className='text-white pt-10 pb-5'>Interpolation : Spine</h1>
            <div className='divider divider-neutral'><Submenuinter></Submenuinter></div>
        </div>
        <div className='flex flex-col items-center'>
            <div className='flex justify-items-center items-center gap-2'>
                <input type="number" className="border rounded p-2 mb-4 bg-white text-black"/>
                <input type="text" className="border rounded p-2 mb-4 bg-white text-black" />
                <button>onclick</button>
            </div>
        </div>

        {numFields > 0 && numFields <= 10 && (
            <>
            
            </>
        )}
    </div>
  )
}

export default spine