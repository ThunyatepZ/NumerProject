import React, { useEffect, useState } from 'react';
import { BlockMath } from 'react-katex';
import ConjugateGraph from '../../component/3DGraph';
import SubmenuAGB from '../../component/subment.AGB';
import CalculateConjugate from '../calculateAGB/Calconjugate';
function Conjugate() {
    const [rows, setRows] = useState(3);
    const [cols, setCols] = useState(3);
    const [matrixA, setMatrixA] = useState(Array.from({ length: rows }, () => Array(cols).fill('')));
    const [matrixX, setMatrixX] = useState(Array(rows).fill(''));
    const [matrixB, setMatrixB] = useState(Array(rows).fill(''));
    const [matrixx1,setmatrixx1] = useState(Array(rows).fill(''))
    const [Error, setError] = useState();
    const [anser, setanser] = useState({});
    const matrixAcopy = matrixA.map(row => [...row]);
    const matrixBcopy = [...matrixB];
    const matrixx1copy = [...matrixx1]
    const [normalmatrixB,setnormalmatrixB] = useState()
    const [normalmatrix, setmatrix] = useState()
    const [checkfx,setcheckfx] = useState()
    const object = {
        matrixA: matrixAcopy,
        matrixB: matrixBcopy,
        checktype: checkfx,
        x1 : matrixx1copy,
        Error
    };

    const handleerror = (e) => {
        setError(e.target.value);
    };

    const sendTocal = async (e) => {
        e.preventDefault();
        const isMatrixAFilled = matrixA.every(row => row.every(value => value !== ''));
        const isMatrixBFilled = matrixB.every(value => value !== '');

        if (!isMatrixAFilled) {
            alert('please correct all matrixA');
            return;
        }

        if (!isMatrixBFilled) {
            alert('Please fill all values in Matrix B.');
            return;
        }

        if (rows === 2 && cols === 2) {
            setcheckfx(2);  // Allow graph rendering when the matrix is 2x2
        } else {
            setcheckfx(null);  // Disable graph rendering for other sizes
        }
        let a = await CalculateConjugate(object);
        setanser(a);
        setmatrix(matrixA)
        setnormalmatrixB(matrixB)
    };

    const handleRowsChange = (e) => {
        const value = e.target.value;
        const numRows = parseInt(value, 10);
        if (!isNaN(numRows) && numRows > 0) {
            setRows(numRows);
            setMatrixA(Array.from({ length: numRows }, () => Array(cols).fill('')));
            setmatrixx1(Array(numRows).fill(''))

            setMatrixB(Array(numRows).fill(''));
        } else {
            setRows('');
        }
    };

    const handleColsChange = (e) => {
        const value = e.target.value;
        const numCols = parseInt(value, 10);
        if (!isNaN(numCols) && numCols > 0) {
            setCols(numCols);
            setMatrixX(Array(numCols).fill(''));
            setMatrixA(Array.from({ length: rows }, () => Array(numCols).fill('')));
        } else {
            setCols('');
        }
    };

    const handleMatrixAChange = (row, col, value) => {
        setMatrixA((prevMatrixA) => {
            const newMatrix = prevMatrixA.map((r) => [...r]); // Create a copy of the previous state
            newMatrix[row][col] = value; // Update the specific cell
            return newMatrix;
        });
    };

    const handleMatrixBChange = (index, value) => {
        const newMatrixB = [...matrixB];
        newMatrixB[index] = value;
        setMatrixB(newMatrixB);
    };

    const handleMatrixX1Change = (index, value) => {
        const newMatrixX1 = [...matrixx1];
        newMatrixX1[index] = value;
        setmatrixx1(newMatrixX1);
        console.log(newMatrixX1);
    };
    

    useEffect(() => {
        // console.log(object);
        // // console.log(checkfx)
        // // console.log(anser.stepElit)
        
    }, [anser]);

    

    return (
        <div>
            <div className='text-center text-3xl'>
                <h1 className='text-white pt-10 pb-5'>Linear Algebra: Conjugate</h1>
                <div className="divider divider-neutral"></div>
                <SubmenuAGB />
            </div>
            <div className="flex flex-col items-center mt-5">
                <div className='flex space-x-48 mb-2'>
                    <div className='text-xl'>
                        row
                    </div>
                    <div className='text-xl'>
                        col
                    </div>
                </div>
                <div></div>
                <div className="flex gap-4 mb-4">
                    <input
                        type="number"
                        value={rows}
                        onChange={handleRowsChange}
                        className="border rounded p-2 bg-white text-black"
                        placeholder="Enter rows"
                    />
                    <input
                        type="number"
                        value={cols}
                        onChange={handleColsChange}
                        className="border rounded p-2 bg-white text-black"
                        placeholder="Enter columns"
                    />
                </div>
                <div className='gap-4 flex mb-4'>
                    <input type="number" className='border rounded p-2 bg-white text-black' placeholder='Error 0.000001' onChange={handleerror} />
                    <button className="btn btn-primary" onClick={sendTocal}>Primary</button>
                </div>

                <div className="flex gap-10">
                    {/* Matrix A */}
                    <div className="flex flex-col items-center">
                        <h2 className="mb-2 font-bold">[A]</h2>
                        <div className="grid gap-4" style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}>
                            {matrixA.map((row, rowIndex) =>
                                row.map((value, colIndex) => (
                                    <div
                                        key={`${rowIndex}-${colIndex}`}
                                        className="h-20 w-20 border border-black bg-blue-500 flex items-center justify-center rounded-lg shadow-lg"
                                    >
                                        <input
                                            type="text"
                                            value={value}
                                            onChange={(e) => handleMatrixAChange(rowIndex, colIndex, e.target.value)}
                                            className="text-center w-full h-full bg-white text-black font-bold rounded-lg outline-none"
                                            placeholder={`a${rowIndex + 1}${colIndex + 1}`}
                                        />
                                    </div>
                                ))
                            )}
                        </div>
                    </div>

                    {/* Matrix X */}
                    <div className="flex flex-col items-center">
                        <h2 className="mb-2 font-bold">x</h2>
                        <div className="grid gap-4" style={{ gridTemplateColumns: 'repeat(1, 1fr)' }}>
                            {matrixX.map((value, index) => (
                                <div
                                    key={index}
                                    className="h-20 w-20 border border-black bg-slate-500 flex items-center justify-center rounded-lg shadow-lg"
                                >
                                    x
                                    <span className="text-white font-bold">{value}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* แสดงสัญลักษณ์ "=" */}
                    <div className="flex items-center justify-center">
                        <h2 className="mx-4 font-bold text-xl">=</h2>
                    </div>

                    {/* Matrix B */}
                    <div className="flex flex-col items-center">
                        <h2 className="mb-2 font-bold">[B]</h2>
                        <div className="grid gap-4" style={{ gridTemplateColumns: 'repeat(1, 1fr)' }}>
                            {matrixB.map((value, index) => (
                                <div
                                    key={index}
                                    className="h-20 w-20 border border-black bg-green-500 flex items-center justify-center rounded-lg shadow-lg"
                                >
                                    <input
                                        type="text"
                                        value={value}
                                        onChange={(e) => handleMatrixBChange(index, e.target.value)}
                                        className="text-center w-full h-full bg-white text-black font-bold rounded-lg outline-none"
                                        placeholder={`b${index + 1}`}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col items-center">
                        <h2 className="mb-2 font-bold">[x]</h2>
                        <div className="grid gap-4" style={{ gridTemplateColumns: 'repeat(1, 1fr)' }}>
                            {matrixx1.map((value, index) => (
                                <div
                                    key={index}
                                    className="h-20 w-20 border border-black bg-green-500 flex items-center justify-center rounded-lg shadow-lg"
                                >
                                    <input
                                        type="text"
                                        value={value}
                                        onChange={(e) => handleMatrixX1Change(index, e.target.value)}
                                        className="text-center w-full h-full bg-white text-black font-bold rounded-lg outline-none"
                                        placeholder={`x${index + 1}`}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
            <div className='text-center w-full flex justify-center items-center'>
                <div className='mt-10 bg-slate-500 rounded-md text-white w-[70%]'>

                    {anser && anser.anserX && (

                        <div>
                            <div className='text-xl mt-3'>
                                result
                            </div>
                            
                            <BlockMath math={`${anser.realanser}`}></BlockMath>
                        </div>

                    )}
                {anser && checkfx === 2 && (
                    <div className='mb-10'>
                        <ConjugateGraph Xg={anser.anserY} Yg={anser.anserX} mainmatrix={normalmatrix} submatrix={normalmatrixB}/>
                    </div>
                )}
                </div>
            </div>
                    
        </div>
    )
}

export default Conjugate
