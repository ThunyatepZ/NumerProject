import React from 'react'
import { useState } from 'react'
import Submenuinter from '../../component/submenuinter'
function singleTrapezoidal() {
    const [rows,setrows] = useState(2)
  return (
    <div>
        <div className='text-center text-3xl mb-6'>
            <h1 className='text-white pt-10 pb-5'>Intrigration : SingleTrapzoidal</h1>
            <div className='divider divider-neutral'><Submenuinter></Submenuinter></div>
        </div>

        <div className='flex justify-center items-center gap-5'>
                <input type="text"className='bg-white text-black text-center'/>
                <input type="text" className='bg-white text-black' />
                <input type="text" className='bg-white text-black' />
        </div>
    </div>
  )
}

export default singleTrapezoidal