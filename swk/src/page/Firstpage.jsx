import React from 'react'
import { Link } from 'react-router-dom'

function Firstpage() {
  return (
    <div>
      <h1 className='bg-base-100 text-center'>Hello</h1>
      <div className='text-center bg-base-100'>
      <button className='bg-green-500 text-black p-3 rounded-sm'><Link to="Home/Rootequation">Start</Link></button>
      </div>
    </div>
  )
}

export default Firstpage
