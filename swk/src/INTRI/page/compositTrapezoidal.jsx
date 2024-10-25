import React, { useState } from 'react'
import { BlockMath } from 'react-katex'
import SUBMENUINTRIGRATION from '../../component/submenuIntrogration'
import compositTrapzoidalcalculate from '../calculete/conpositTrapezoidalcal'
function compositTrapezoidal() {
    const [form,setform] = useState({})
    const [anser,setanser] = useState({})
    const handlechange = (e) => {
    setform({
        ...form,
        [e.target.name] : e.target.value
    })
    }
    const handlesubmit = (e) =>{
        e.preventDefault()
        console.log(form)
        let data = compositTrapzoidalcalculate(form)
        setanser(data)
    }
    const lowerLimit = form.dataA !== undefined ? form.dataA : '';
    const upperLimit = form.dataB !== undefined ? form.dataB : '';
    const eq = form.equation !== undefined ? form.equation : '';
  return (
    <div>
        <div className='text-center text-3xl mb-6'>
            <h1 className='text-white pt-10 pb-5'>Intrigration : Composit Trapzoidal</h1>
            <div className='divider divider-neutral'><SUBMENUINTRIGRATION></SUBMENUINTRIGRATION></div>
        </div>
        <div className='flex justify-center items-center mb-3'>
            <div className='bg-gray-400 w-[30%] p-2 text-black text-xl  rounded-md'>
                <BlockMath math={`f\\relax{x} = \\int_{${lowerLimit}}^{${upperLimit}} ${eq} \\ dx`}/>
            </div>
            </div>
      <form onSubmit={handlesubmit}>
      <div className='flex justify-center items-center gap-5'>
                <input type="text"className='bg-white text-black text-center p-2 rounded' placeholder='f(x)' name='equation' onChange={handlechange}/>
        </div>
        <div className='flex justify-center items-center gap-5 mt-3'>
          <input type="text" className='bg-white text-black p-2 rounded text-center' placeholder='a' name='dataA' onChange={handlechange}/>
          <input type="text" className='bg-white text-black p-2 rounded text-center' placeholder='b'name='dataB' onChange={handlechange}/>
          <input type="text" placeholder='n' className='bg-white text-black p-2 rounded text-center' name='dataN' onChange={handlechange}/>
          <button type='submit'>submit</button>
        </div>
      </form>
      {anser.anser && (
      <div className='w-full flex justify-center items-center mt-5'>
        <div className='bg-slate-500 w-[75%] rounded-md'>
          <BlockMath math={`Result \\\\\n anser = ${anser.anser}`}/>
        </div>
    </div>
      )}


    </div>
  )
}

export default compositTrapezoidal