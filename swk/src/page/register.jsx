import React, { useState } from 'react'

function Registering() {
    
    const [username,setusername] = useState("")
    const [Password,setPassword] = useState("")
    const [CFPASS,setCFPASS] = useState("")
    const [error,seterror] = useState("")

    const Handelsubmit = async(e) =>{
      e.preventDefault()

      if(Password != CFPASS){
        seterror("Doesn't match")
        return;
      }
      if(!username || !Password || !CFPASS){
        seterror("Error")
        return;
      }
      else{
        seterror("")
        return;
      }
    }
    console.log(username,Password)
  return (
    <div className='bg-base-100'>
        <div className='container mx-auto py-5'>
            <h3>Register</h3>
            <hr className='my-3'/>
            <form onSubmit={Handelsubmit}>

                {error &&(
                  <div>
                    {error}
                  </div>
                )}

                <input onChange={(e) =>{setusername(e.target.value)}} type="text" className='block my-3 py-2 bg-gray-300 text-black rounded-md' placeholder='Username' />
                <input onChange={(e) =>{setPassword(e.target.value)}} type="password" className='block my-3 py-2 bg-gray-300 text-black rounded-md' placeholder='Password' />
                <input onChange={(e) =>{setCFPASS(e.target.value)}} type="password" className='block my-3 py-2 bg-gray-300 text-black rounded-md' placeholder='ConfirmPassword' />
                <button className='bg-green-500 text-white py-2 my-3 px-2 rounded-md' type='submit'>Register</button>
            </form>
        </div>
    </div>
  )
}

export default Registering
