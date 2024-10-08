import React, { useState } from 'react';
import secantmethodcalculate from '../CalculateFornt/secant';
import MathEquation from '../component/Boxmath';
import Graphishow from '../component/graph';
import Submenuroot from '../component/submenu.root';
import BasicTable from '../component/Table';

const postBIS = "http://localhost:5000/api/bisec"

function SECANTmethod() {
    const [FX,setFX] = useState("")
    const [form,setform] = useState({})
    const equation = 'f(x) = ';
    const [er,seter] = useState("");
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
        const B = await secantmethodcalculate(form)
        seter(B)
    }

    
    



return (
    <div className=''>
    
    <div className='text-center text-3xl'>
        <h1 className='text-white pt-10 pb-5'>Root of equation : Secant Method</h1>
        <div className="divider divider-neutral"></div>
        
    </div>
    <div className='text-center flex justify-center text-white'>
        <MathEquation equation={equation} />
        <MathEquation equation={FX} />
    </div>
        <div className='text-center pt-5'>
        
        <form onSubmit={handlesubmit}>
        <input type="text" name='equation' className='text-center bg-white py-3 mr-4 text-black rounded-md' onChange={(e)=> {
            handlechangeforequation(e) , handlechange(e)}} placeholder='f(x) = 4x-32'/><br />
        <input type="text" name='Xstart' className='text-center bg-white py-3 mt-2 mr-4 text-black rounded-md' onChange={(e)=> handlechange(e)} placeholder='Xstart'/>
        <input type="text" name='Xend' className='text-center bg-white py-3 mr-4 text-black rounded-md' onChange={(e)=> handlechange(e)} placeholder='Xend'/>
        <input type="text" name='Error' className='text-center bg-white py-3 mt-2 mr-4 text-black rounded-md' onChange={(e)=> handlechange(e)} placeholder='Error'/>
        <br /><button type='submit' className='bg-green-400 text-black p-3 rounded mt-3'>send</button>
        </form>


        </div>
        <div className='text-center text-white'>
        <br />Anser is: {er.Xans}<br/>
        </div>

        <div className='text-center text-white'>
            <Submenuroot/>
        </div>


        <div className='flex justify-center'>
                <Graphishow x ={er.arrXans} y ={er.arrFxans} maingraphx={er.Mgx} maingraphy={er.Mgy} gotox={er.secantx} gotoy={er.secanty} check={'newton'}/>
            </div>
            <div className='w-full flex justify-center items-center mt-10'>
                <div className='w-[70%]'>
                <BasicTable x={er.arrXans} y ={er.arrFxans} errorFAC={er.arrER} iterative={er.arrITER}/>
                </div>
    
            </div>
    </div>
)
}

export default SECANTmethod