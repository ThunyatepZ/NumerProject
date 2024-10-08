import axios from 'axios';
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import Bisection101 from '../CalculateFornt/Bis';
import MathEquation from '../component/Boxmath';
import Graphishow from '../component/graph';
import Submenuroot from '../component/submenu.root';
import BasicTable from '../component/Table';
const test = 'http://localhost:5000/api/test'

function BisectionFornt() {
    const type = "root"
    const [FX, setFX] = useState("")
    const [form, setform] = useState({})
    const equation = 'f(x) = ';
    const [result, setresult] = useState({});

    const handlechangeforequation = (e) => {
        setFX(e.target.value)
    }

    const handlechange = (e) => {
        setform({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    const handlesubmit = async (e) => {
        e.preventDefault()
        
        const B = await Bisection101(form)
        setresult(B)
    }

    const savetodatabase = async(e)=>{
        e.preventDefault()
        if(result.status != "success"){
            Swal.fire({
                title: "Error!",
                text: "you already save it",
                icon: "error"
            });
        }
        else{
            const typeform = {...form, type : type,anser : result.XM,subtype : "Bisection"}
            await axios.post(test,typeform).then((res)=>{
    
                    if(res.data == "Don't save"){
                        console.log(res.data)
                    }
                    else{
                        Swal.fire({
                            title: "Save success",
                            text: "Thank for help",
                            icon: "success"
                        });
                        console.log(res.data)
                    }
    
            })
            result.status = "false"
        }
        
    }

    return (
        <div className=''>

            <div className='text-center text-3xl'>
                <h1 className='text-white pt-10 pb-5'>Root of equation : Bisection</h1>
                <div className="divider divider-neutral"></div>

            </div>
            <div className='text-center flex justify-center text-white'>
                <MathEquation equation={equation} />
                <MathEquation equation={FX} />
            </div>
            <div className='text-center pt-5'>

                <form onSubmit={handlesubmit}>
                    <input type="text" name='equation' className='text-center bg-white py-3 mr-4 text-black rounded-md' onChange={(e) => {
                        handlechangeforequation(e), handlechange(e)
                    }} placeholder='f(x) = 4x-32' /><br />
                    <input type="text" name='Xstart' className='text-center bg-white py-3 mt-2 mr-4 text-black rounded-md' onChange={(e) => handlechange(e)} placeholder='Xstart' />
                    <input type="text" name='Xend' className='text-center bg-white py-3 mr-4 text-black rounded-md' onChange={(e) => handlechange(e)} placeholder='Xend' />
                    <input type="text" name='Error' className='text-center bg-white py-3 mt-2 mr-4 text-black rounded-md' onChange={(e) => handlechange(e)} placeholder='Error' />
                    <br />
                    <div className='flex justify-center gap-2'>
                    <button type='submit' className='bg-green-400 text-black p-3 rounded mt-3'>send</button>
                    <button type='button' className='bg-slate-400 p-3 mt-3 rounded' onClick={savetodatabase}>save</button>
                    </div>
                    
                    </form>
                


            </div>
            <div className='text-center text-white'>
                <br />Anser is: {result.XM}<br />
            </div>

            <div className='text-center text-white'>
                <Submenuroot />
            </div>


            <div className='flex justify-center'>
                <Graphishow x={result.X} y={result.Y} maingraphx={result.Mgx} maingraphy={result.Mgy} />
            </div>
            <div className='w-full flex justify-center items-center mt-10'>
                <div className='w-[70%]'>
                    <BasicTable x={result.X} y={result.Y} errorFAC={result.reErr} iterative={result.ITER} />
                </div>

            </div>
        </div>
    )
}

export default BisectionFornt