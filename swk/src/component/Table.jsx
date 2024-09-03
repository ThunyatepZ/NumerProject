import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { all, create } from 'mathjs';
import * as React from 'react';

const math = create(all);

export default function BasicTable({x, y, errorFAC, iterative}) {
  function createData(X, Y, ER, Iter) {
    return { X, Y, ER, Iter };
  }

  let i = 0;
  const rows = [];

  try {
    x.forEach(element => {
      const x1 = createData(
        math.round(x[i], 6),
        math.round(y[i], 6),
        math.round(errorFAC[i] * 100, 6),
        math.round(iterative[i], 6)
      );
      i++;
      rows.push(x1);
    });
  } catch (err) {
    // Handle error here
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 300 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Iteration</TableCell>
            <TableCell align="left">x</TableCell>
            <TableCell align="left">fx</TableCell>
            <TableCell align="left">Error</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={index}  // ใช้ index เป็น key แทน
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.Iter}
              </TableCell>
              <TableCell align="left">{row.X}</TableCell>
              <TableCell align="left">{row.Y}</TableCell>
              <TableCell align="left">{row.ER}%</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
