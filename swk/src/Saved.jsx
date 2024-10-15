import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
const savedata = "https://numer-project-de3b.vercel.app/api/getdata"

function Saved() {
    const [data,setdata] = useState([])
    useEffect(()=>{
        axios.get(savedata).then((res)=>{
            console.log(res.data)
            setdata(res.data)
        })
    },[])
    function createData(eq, type, anser1, Er) {
        return { eq, type, anser1, Er };
    }
    let i = 0;
    const rows = [];
    try{
        data.map((data,index)=>{
            const x1 = createData(data.equation,data.subtype,data.anser,data.Error)
            rows.push(x1)
        })
    }catch(err){
        console.log(err)
    }


    return (
    <div className='flex justify-center items-center h-screen'>
        <div className='w-[70%]'>
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
              key={index}  // ใช้ index เป็น key แทน
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
  )
}

export default Saved
