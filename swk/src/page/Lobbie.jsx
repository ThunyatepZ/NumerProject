import React from 'react'
import { Link } from 'react-router-dom'
function Lobbie() {
  return (
    
    <div>
        
      <div className="flex justify-between items-center bg-base-100 py-96">
      <h1 className='pl-96 text-3xl'>
        Welcome
      </h1>
      <ul className="flex">
        <li className="pr-96">
          <Link to="/Home/Rootequation"><button className="bg-teal-300 p-3 rounded-sm text-black" >Getstart</button></Link>
        </li>
      </ul>

      </div>
    </div>
  )
}

export default Lobbie
