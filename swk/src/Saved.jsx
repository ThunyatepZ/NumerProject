import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BlockMath } from 'react-katex';
// ดึงค่าจาก .env
const savedata = import.meta.env.VITE_API_KEYS

function Saved() {
    const [data, setdata] = useState([]);
    
    useEffect(() => {
        axios.get(savedata).then((res) => {
            console.log(res.data);
            setdata(res.data);
        });
    }, []);

    function createData(eq, type, anser1, Er) {
        return { eq, type, anser1, Er };
    }

    const rows1 = [];
    const row2 = []
    const row3 = []
    try {
        data.map((data, index) => {
            if(data.dataobject.type == "root"){
                const x1 = createData(data.dataobject.equation, data.dataobject.subtype, data.dataobject.anser, data.dataobject.Error);
                rows1.push(x1);
            }
            if(data.dataobject.type == "Linear"){
                const x2 = createData(data.dataobject.matrixA,data.dataobject.subtype,data.dataobject.anser,0.000001)
                row2.push(x2)
            }
            if(data.dataobject.type == "Interpolation"){
                const x3 = createData(data.dataobject.Xdata + data.dataobject.Ydata,data.dataobject.Ydata,data.dataobject.subtype,data.dataobject.Anser)
                row3.push(x3)
            }
            
            
        });
    } catch (err) {
        console.log(err);
    }

    return (
        <div>
        <div className='flex justify-center items-center h-screen'>
            <div className='w-[70%]'>
                <p>Root of equation</p>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 300 }} aria-label="simple table">
                        <TableHead>
                            <TableRow className='bg-slate-500'>
                                <TableCell>Iteration</TableCell>
                                <TableCell align="left">type</TableCell>
                                <TableCell align="left">anser</TableCell>
                                <TableCell align="left">Error%</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows1.map((row, index) => (
                                <TableRow
                                    key={index}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.eq}
                                    </TableCell>
                                    <TableCell align="left">{row.type}</TableCell>
                                    <TableCell align="left"><div className='text-red-700'>{row.anser1}</div></TableCell>
                                    <TableCell align="left">{row.Er}%</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
        <div className='flex justify-center items-center h-screen'>
            <div className='w-[70%]'>
                <p>Linear Algeba</p>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 300 }} aria-label="simple table">
                        <TableHead>
                            <TableRow className='bg-slate-500'>
                                <TableCell>Iteration</TableCell>
                                <TableCell align="left">type</TableCell>
                                <TableCell align="left">anser</TableCell>
                                <TableCell align="left">Error%</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {row2.map((row, index) => (
                                <TableRow
                                    key={index}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.eq}
                                        
                                    </TableCell>
                                    <TableCell align="left">{row.type}</TableCell>
                                    <TableCell align="left"><div className='text-red-700'>{row.anser1}</div></TableCell>
                                    <TableCell align="left">{row.Er}%</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
        <div className='flex justify-center items-center h-screen'>
            <div className='w-[70%]'>
                <p>Inter polation</p>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 300 }} aria-label="simple table">
                        <TableHead>
                            <TableRow className='bg-slate-500'>
                                <TableCell>DataX/DataY</TableCell>
                                <TableCell align="left">find</TableCell>
                                <TableCell align="left">Type</TableCell>
                                <TableCell align="left">Anser</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {row3.map((row, index) => (
                                <TableRow
                                    key={index}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.eq}
                                        
                                    </TableCell>
                                    <TableCell align="left">
                                        {row.type}
                                    </TableCell>
                                    <TableCell align="left"><div className='text-red-700'>{row.anser1}</div></TableCell>
                                    <TableCell align="left">{row.Er}%</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
        </div>

        
    );
}

export default Saved;
