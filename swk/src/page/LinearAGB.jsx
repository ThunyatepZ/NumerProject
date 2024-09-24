import React, { useState } from 'react';

function MatrixBox() {
  const [size, setSize] = useState('');
  const [matrixSize, setMatrixSize] = useState(0);
  const [inputs, setInputs] = useState({});

  const handleChange = (e) => {
    const value = e.target.value;
    setSize(value);

    const num = parseInt(value, 10);
    if (!isNaN(num) && num > 0) {
      setMatrixSize(num);
    } else {
      setMatrixSize(0);
    }
  };

  const handleInputChange = (index, value) => {
    setInputs((prevInputs) => ({
      ...prevInputs,
      [index]: value,
    }));
  };

  return (
    
    <div className="flex flex-col items-center pt-2">
        <div className='text-center text-3xl'>
        <h1 className='text-white pt-10 pb-5'>Linear Algebra : Carmer rule</h1>
        <div className="divider divider-neutral"></div>
        
    </div>
      <input
        type="number"
        value={size}
        onChange={handleChange}
        className="border rounded p-2 mb-4"
        placeholder="Enter size (e.g., 3)"
      />
      <div className="grid gap-4" style={{ gridTemplateColumns: `repeat(${matrixSize}, 1fr)` }}>
        {Array.from({ length: matrixSize * matrixSize }, (_, index) => (
          <div
            key={index}
            className="h-24 w-24 border border-black bg-white flex items-center justify-center rounded-lg shadow-lg"
          >
            <input
              type="number"
              value={inputs[index] || ''}
              onChange={(e) => handleInputChange(index, e.target.value)}
              className="text-center w-full h-full bg-white text-black font-bold rounded-lg outline-none"
              placeholder={`Box ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default MatrixBox;
