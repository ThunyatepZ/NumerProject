import { all, create } from 'mathjs';
import React, { useState } from 'react';
import GraphicalJS from '../CalculateFornt/Graphical';
import MathEquation from '../component/Boxmath';
import Graphishow from '../component/graph';
import Submenuroot from '../component/submenu.root';
import BasicTable from '../component/Table';

const math = create(all);

function Graphical() {
    const [FX, setFX] = useState("");

    const [form, setForm] = useState({});
    const [result, setresult] = useState({});

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

    const handleSubmit = async (e) => {
        e.preventDefault();
        let G = await GraphicalJS(form);
        setresult(G);
        result.xans.sort((a, b) => a - b);
    };

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
                        <form onSubmit={handleSubmit}>
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
                            <button type='submit' className='bg-green-400 text-black p-3 rounded mt-3'>Send</button>
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
                                x={result.xans}
                                y={result.yans}
                                errorFAC={result.err}
                                iterative={result.it}
                            />
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default Graphical;
