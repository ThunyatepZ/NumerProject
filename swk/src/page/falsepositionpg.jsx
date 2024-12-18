import axios from 'axios';
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import Falseposition from '../CalculateFornt/Flaseposition.js';
import MathEquation from '../component/Boxmath';
import Graphishow from '../component/graph.jsx';
import Submenuroot from '../component/submenu.root';
import BasicTable from '../component/Table.jsx';
const test = import.meta.env.VITE_API_KEYS_POST
function Graphical() {
    const [FX, setFX] = useState("")
    const [Xstart, setXstart] = useState("")
    const [Xend, setXend] = useState("")
    const [Error, setError] = useState("")
    const [form, setform] = useState({})
    const [name, Setname] = useState(null)
    const equation = 'f(x) = ';
    const [resive, setresive] = useState("");

    const FXchange = ({ target: { value } }) => {
        console.log(value)
        setFX(value)
    }
    const XstartChange = ({ target: { value } }) => {
        console.log(value)
        setXstart(value)
    }
    const Xendchange = ({ target: { value } }) => {
        console.log(value)
        setXend(value)
    }
    const Errorchange = ({ target: { value } }) => {
        console.log(value)
        setError(value)
    }
    const [ANS, SetANS] = useState()


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
        const l = await Falseposition(form)
        setresive(l)
    }

    const savetodatabase = async(e) =>{
        e.preventDefault()
        const typeform = {
            ...form,
            type : "root",
            anser : resive.X1,
            subtype : "FalsePosition"
        }
        const dataobject = {
            dataobject : typeform,
            type : "root"
        }
        if(!form.equation || !form.Xstart || !form.Xend || !form.Error){
            Swal.fire({
                title: "Error!",
                text: "Please fill information",
                icon: "error"
            });
            return
        }
        else{
            await axios.post(test,dataobject).then((res) =>{
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
                <h1 className='text-white pt-10 pb-5'>Root of equation : Falseposition</h1>
                <div className="divider divider-neutral"></div>

            </div>
            <div className='text-center flex justify-center'>
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
                    <button type='submit' className='bg-green-400 text-black p-3 rounded-md mt-3'>send</button>
                    <button type='button' className='bg-slate-400 p-3 mt-3 rounded-md' onClick={savetodatabase}>save</button>
                    </div>
                </form>


            </div>
            <div className='text-center'>
                <br />Anser : {resive.X1}<br />
            </div>


            <div className='text-center text-white'>
                <Submenuroot />
            </div>


            <div className='w-full flex justify-center items-center'>
                <div className=''>
                    <Graphishow x={resive.X} y={resive.Y} maingraphx={resive.Mgx} maingraphy={resive.Mgy}/>
                </div>

            </div>
            <div className='w-full flex justify-center items-center mt-10'>
                <div className='w-[70%]'>
                    <BasicTable x={resive.X} y={resive.Y} errorFAC={resive.RER} iterative={resive.ITER} />
                </div>
            </div>

        </div>
    )
}

export default Graphical