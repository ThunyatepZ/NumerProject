import axios from 'axios';
import { all, create } from 'mathjs';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import GraphicalJS from '../CalculateFornt/Graphical';
import MathEquation from '../component/Boxmath';
import Graphishow from '../component/graph';
import Submenuroot from '../component/submenu.root';
import BasicTable from '../component/Table';
const test = import.meta.env.VITE_API_KEYS_POST
const math = create(all);

function Graphical() {
    const type = "root"
    const [FX, setFX] = useState("");

    const [form, setForm] = useState({});
    const [result, setresult] = useState({});
    const [copy,setcopy] = useState({})

    const equation = 'f(x) = ';



    const handleChangeForEquation = (e) => {
        setFX(e.target.value);
    };

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };
    const handlesubmit = async (e)=>{
        e.preventDefault()
        const Graphical = await GraphicalJS(form)
        setresult(Graphical)
        setcopy({...Graphical})
    }

    const savetodatabase = async (e) => {
        e.preventDefault();
            const typeform = {...form,type : type,anser : result.NewAnser,subtype : "Graphical"}
            const dataobject = {
                dataobject : typeform,
                type : "root"
            }
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
                console.log(res.data)
            })
    };

    useEffect(()=>{
        console.log(type)
    },[result])

    return (
        <div className='bg-#1D232A'>
            <div className='text-center text-3xl'>
                <h1 className='text-white pt-10 pb-5'>Root of equation : Graphical Method</h1>
                <div className="divider divider-neutral"></div>
            </div>


            
                <div>
                    <div className='text-center flex justify-center text-white'>
                        <MathEquation equation={equation} />
                        <MathEquation equation={FX} />
                    </div>
                    <div className='text-center pt-5'>
                        <form onSubmit={handlesubmit}>
                            <input
                                type="text"
                                name='equation'
                                className='text-center bg-white py-3 mr-4 text-black rounded-md'
                                onChange={(e) => { handleChangeForEquation(e); handleChange(e); }}
                                placeholder='f(x) = 4x-32'
                            /><br />
                            <input
                                type="text"
                                name='Xstart'
                                className='text-center bg-white py-3 mt-2 mr-4 text-black rounded-md'
                                onChange={handleChange}
                                placeholder='Xstart'
                            />
                            <input
                                type="text"
                                name='Xend'
                                className='text-center bg-white py-3 mr-4 text-black rounded-md'
                                onChange={handleChange}
                                placeholder='Xend'
                            />
                            <input
                                type="text"
                                name='Error'
                                className='text-center bg-white py-3 mt-2 mr-4 text-black rounded-md'
                                onChange={handleChange}
                                placeholder='Error'
                            />
                            <br />
                            <div className='flex justify-center gap-2'>
                            <button type='submit' className='bg-green-400 text-black p-3 rounded mt-3'>Send</button>
                            <button type='button' className='bg-slate-400 p-3 mt-3 rounded' onClick={savetodatabase}>save</button>
                            </div>
                        </form>
                    </div>

                    <div className='text-center mt-2'>
                        {result.xans && (
                            `Anser ${result.NewAnser}`
                        )}
                    </div>

                    <div className='text-center text-white'>
                        <Submenuroot />
                    </div>

                    <div className='w-full flex justify-center items-center'>
                        <div className='rounded-lg border border-black overflow-hidden'>
                            <Graphishow
                                className='rounded-md border border-black'
                                x={result.xans}
                                y={result.yans}
                                check={true}
                                maingraphx={result.Mgx}
                                maingraphy={result.Mgy}
                            />
                        </div>
                    </div>

                    <div className='w-full flex justify-center items-center mt-10'>
                        <div className='w-[70%]'>
                            <BasicTable
                                x={copy.xans}
                                y={copy.yans}
                                errorFAC={copy.err}
                                iterative={copy.it}
                            />
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default Graphical;
