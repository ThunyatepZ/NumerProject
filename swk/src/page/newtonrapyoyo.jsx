import React, { useState } from 'react';
import Newton from '../CalculateFornt/newtonrapJOJO';
import MathEquation from '../component/Boxmath';
import Graphishow from '../component/graph';
import Submenuroot from '../component/submenu.root';
import BasicTable from '../component/Table';


function NEWTONRAPSON() {
    const [FX,setFX] = useState("")
    const [form,setform] = useState({})
    const equation = 'f(x) = ';
    const [anser,seranser] = useState("")
    

    const handlechangeforequation = (e) =>{
        setFX(e.target.value)
    }

    const handlechange = (e) =>{
        setform({
            ...form,
            [e.target.name]: e.target.value
        })
        
    }

    const handlesubmit = async(e)=>{

        e.preventDefault()
        let O = await Newton(form)
        seranser(O)


    }



return (
    <div className='bg-base-100'>
    
    <div className='text-center text-3xl'>
        <h1 className='text-white pt-10 pb-5'>Root of equation : Newton raphson</h1>
        <div className="divider divider-neutral"></div>
        
    </div>
    <div className='text-center flex justify-center'>
        <MathEquation equation={equation} />
        <MathEquation equation={FX} />
    </div>
        <div className='text-center pt-5'>
        
        <form onSubmit={handlesubmit}>
        <input type="text" name='equation' className='text-center bg-white py-3 mr-4 text-black rounded-md' onChange={(e)=> {
            handlechangeforequation(e) , handlechange(e)}} placeholder='f(x) = 4x-32'/><br />
        <input type="text" name='Xstart' className='text-center bg-white py-3 mt-2 mr-4 text-black rounded-md' onChange={(e)=> handlechange(e)} placeholder='X'/>
        <input type="text" name='Error' className='text-center bg-white py-3 mt-2 mr-4 text-black rounded-md' onChange={(e)=> handlechange(e)} placeholder='Error'/>
        <br /><button type='submit' className='bg-green-400 text-black p-3 rounded mt-3'>send</button>
        </form>


        </div>
        <div className='text-center'>
        <br />Anser is : {anser.Xans}<br/>
        
        </div>

        <div className='text-center text-white'>
                <Submenuroot />
            </div>


            <div className='w-full flex justify-center items-center'>
                <div className=''>
                    <Graphishow x={anser.X} y={anser.Y} maingraphx={anser.Mgx} maingraphy={anser.Mgy}/>
                </div>

            </div>
            <div className='w-full flex justify-center items-center mt-10'>
                <div className='w-[70%]'>
                    <BasicTable x={anser.X} y={anser.Y} errorFAC={anser.RER} iterative={anser.ITER}/>
                </div>
            </div>
    </div>
)
}

export default NEWTONRAPSON
