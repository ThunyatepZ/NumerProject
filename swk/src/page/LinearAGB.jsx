import React, { useState } from 'react';

function MatrixEquation() {
  const [rows, setRows] = useState(3);
  const [cols, setCols] = useState(3);
  const [matrixA, setMatrixA] = useState({});
  const [matrixX, setMatrixX] = useState({});
  const [matrixB, setMatrixB] = useState({});
  let matrixAans = []
  console.log(matrixA)
  const handleRowsChange = (e) => {
    const value = e.target.value;
    const numRows = parseInt(value, 10);
    if (!isNaN(numRows) && numRows > 0) {
      setRows(numRows);
    } else {
      setRows('');
    }
  };

  const handleColsChange = (e) => {
    const value = e.target.value;
    const numCols = parseInt(value, 10);
    if (!isNaN(numCols) && numCols > 0) {
      setCols(numCols);
    } else {
      setCols('');
    }
  };

  const handleMatrixAChange = (index, value) => {
    setMatrixA((prevMatrixA) => ({
      ...prevMatrixA,
      [index]: value,
    }));
  };

  const handleMatrixXChange = (index, value) => {
    setMatrixX((prevMatrixX) => ({
      ...prevMatrixX,
      [index]: value,
    }));
  };

  const handleMatrixBChange = (index, value) => {
    setMatrixB((prevMatrixB) => ({
      ...prevMatrixB,
      [index]: value,
    }));
  };
  return (
    <div className="flex flex-col items-center">
      <div className="flex gap-4 mb-4">
        <input
          type="number"
          value={rows}
          onChange={handleRowsChange}
          className="border rounded p-2"
          placeholder="Enter rows"
        />
        <input
          type="number"
          value={cols}
          onChange={handleColsChange}
          className="border rounded p-2"
          placeholder="Enter columns"
        />
      </div>

      <div className="flex gap-10">
        {/* เมตริกซ์ A */}
        <div className="flex flex-col items-center">
          <h2 className="mb-2 font-bold">[A]</h2>
          <div className="grid gap-4" style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}>
            {Array.from({ length: rows * cols }, (_, index) => (
              <div
                key={index}
                className="h-20 w-20 border border-black bg-blue-500 flex items-center justify-center rounded-lg shadow-lg"
              >
                <input
                  type="text"
                  value={matrixA[index] || ''}
                  onChange={(e) => handleMatrixAChange(index, e.target.value)}
                  className="text-center w-full h-full bg-blue-500 text-white font-bold rounded-lg outline-none"
                  placeholder={`A${index + 1}`}
                />
              </div>
            ))}
          </div>
        </div>

        {/* เมตริกซ์ X */}
        <div className="flex flex-col items-center">
          <h2 className="mb-2 font-bold">x</h2>
          <div className="grid gap-4" style={{ gridTemplateColumns: 'repeat(1, 1fr)' }}>
            {Array.from({ length: rows }, (_, index) => (
              <div
                key={index}
                className="h-20 w-20 border border-black bg-red-500 flex items-center justify-center rounded-lg shadow-lg"
              >
                
                <input
                  type="text"
                  value={matrixX[index] || ''}
                  onChange={(e) => handleMatrixXChange(index, e.target.value)}
                  className="text-center w-full h-full bg-red-500 text-white font-bold rounded-lg outline-none"
                  placeholder={`X${index + 1}`}
                />
              </div>
            ))}
          </div>
        </div>

        {/* เมตริกซ์ B */}
        <div className="flex flex-col items-center">
          <h2 className="mb-2 font-bold">[B]</h2>
          <div className="grid gap-4" style={{ gridTemplateColumns: 'repeat(1, 1fr)' }}>
            {Array.from({ length: rows }, (_, index) => (
              <div
                key={index}
                className="h-20 w-20 border border-black bg-green-500 flex items-center justify-center rounded-lg shadow-lg"
              >
                <input
                  type="text"
                  value={matrixB[index] || ''}
                  onChange={(e) => handleMatrixBChange(index, e.target.value)}
                  className="text-center w-full h-full bg-green-500 text-white font-bold rounded-lg outline-none"
                  placeholder={`B${index + 1}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MatrixEquation;
