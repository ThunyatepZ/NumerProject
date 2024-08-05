import axios from 'axios';
import React, { useState } from 'react';
import MathEquation from '../component/Boxmath';
import Graphishow from '../component/graph';
import Submenuroot from '../component/submenu.root';
const postBIS = "http://localhost:5000/api/bisec"

function Graphical() {
    const [FX,setFX] = useState("")
    const [Xstart,setXstart] = useState("")
    const [Xend,setXend] = useState("")
    const [Error,setError] = useState("")
    const [form,setform] = useState({})
    const [name , Setname] = useState(null)
    const equation = 'f(x) = ';
    const [er,seter] = useState("");

    const FXchange = ({target: {value}}) =>{
        console.log(value)
        setFX(value)
    }
    const XstartChange = ({target: {value}}) =>{
        console.log(value)
        setXstart(value)
    }
    const Xendchange = ({target: {value}}) =>{
        console.log(value)
        setXend(value)
    }
    const Errorchange = ({target: {value}}) =>{
        console.log(value)
        setError(value)
    }
    const [ANS,SetANS] = useState()
    

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

        //console.log(form)

        await axios.post(postBIS,form
            
        ).then((res)=>{
            SetANS(res.data)
            console.log(res.data)
        })

    }

    
    



return (
    <div className='bg-base-100'>
    
    <div className='text-center text-3xl'>
        <h1 className='text-white pt-10 pb-5'>Graphical Method : Bisection</h1>
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
        <input type="text" name='Xstart' className='text-center bg-white py-3 mt-2 mr-4 text-black rounded-md' onChange={(e)=> handlechange(e)} placeholder='Xstart'/>
        <input type="text" name='Xend' className='text-center bg-white py-3 mr-4 text-black rounded-md' onChange={(e)=> handlechange(e)} placeholder='Xend'/>
        <input type="text" name='Error' className='text-center bg-white py-3 mt-2 mr-4 text-black rounded-md' onChange={(e)=> handlechange(e)} placeholder='Error'/>
        <br /><button type='submit' className='bg-green-400 text-black p-3 rounded mt-3'>send</button>
        </form>


        </div>
        <div className='text-center'>
        <br />{ANS}<br/>
        </div>

        <div className='text-center'>
            <Submenuroot/>
        </div>


        <div className='flex justify-center'>
                <Graphishow/>
            </div>
    </div>
)
}

export default Graphical
