import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
// ดึงค่าจาก .env
const savedata = import.meta.env.VITE_API_KEYS_TEST

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

    const rows = [];
    try {
        data.map((data, index) => {
            const x1 = createData(data.dataobject.equation, data.dataobject.subtype, data.dataobject.anser, data.dataobject.Error);
            rows.push(x1);
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
                            {rows.map((row, index) => (
                                <TableRow
                                    key={index}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.eq}
                                    </TableCell>
                                    <a href="/Home/Rootequation"><TableCell align="left">{row.type}</TableCell></a>
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
                            {rows.map((row, index) => (
                                <TableRow
                                    key={index}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.eq}
                                    </TableCell>
                                    <a href="/Home/Rootequation"><TableCell align="left">{row.type}</TableCell></a>
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
