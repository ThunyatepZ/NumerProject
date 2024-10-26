import axios from 'axios';
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import Onepointiter from '../CalculateFornt/Onepointer';
import MathEquation from '../component/Boxmath';
import Graphishow from '../component/graph';
import Submenuroot from '../component/submenu.root';
import BasicTable from '../component/Table';
const test = "http://localhost:5000/api/test"

function Graphical() {
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
        let O = await Onepointiter(form)
        seranser(O)
    }

    const savetodatabase = async(e) =>{
        e.preventDefault()
        const typeform = {...form, type : "root",anser : anser.Xans,subtype : "Onepoint"}
        const dataobject = {
            dataobject : typeform,
            type : "root"
        }
        if(!form.equation || !form.Xstart || !form.Error){
            Swal.fire({
                title: "Error!",
                text: "Please fill information",
                icon: "error"
            });
            return
        }
        else{
            await axios.post(test,dataobject).then((res)=>{
                if(res.data == "Already have it"){
                    Swal.fire({
                        title: "Error!",
                        text: "We already have this data on our database",
                        icon: "error"
                    });
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
        }
    }

return (
    <div className='bg-base-100'>
    
    <div className='text-center text-3xl'>
        <h1 className='text-white pt-10 pb-5'>Root of equation : Onepoint</h1>
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
        <br />
        <div className='flex justify-center gap-2'>
            <button type='submit' className='bg-green-400 text-black p-3 rounded mt-3'>send</button>
            <button type='button' className='bg-slate-400 p-3 mt-3 rounded' onClick={savetodatabase}>save</button>
        </div>
        
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
                    <Graphishow x={anser.X} y={anser.Y} maingraphx={anser.Mgx} maingraphy={anser.Mgy} XG={anser.XG} YG={anser.YG} gotox={anser.gotox} gotoy={anser.gotoy} check="One"/>
                </div>

            </div>
            <div className='w-full flex justify-center items-center mt-10'>
                <div className='w-[70%]'>
                    <BasicTable x={anser.X} y={anser.Y} errorFAC={anser.RER} iterative={anser.ITER} />
                </div>
            </div>
    </div>
)
}

export default Graphical
