import React, { useEffect, useState } from 'react'
function test() {
    const [rows,setrows] = useState('')
    const [cols,setcols] = useState('')
    const [matrixA,setmatrixA] = useState([])
    const handlecols = (e) =>{
        let val = e.target.value
        let numcols = parseInt(val,10)
        setcols(val)
        if(!isNaN(numcols) && numcols > 0){
            for(let i = 0; i < numcols;i++){
                let row = []
                for(let j = 0;j < numcols;j++){
                    row.push('')
                }
                matrixA[i] = row
            }
        }
        else{
            setcols('')
            setmatrixA([])
        }

    }

    const handlematrixchang = (row,col,value) =>{
        let copymatrix = [...matrixA]
        copymatrix[row][col] = value
        setmatrixA(copymatrix)
    }

    useEffect(() => {
        console.log(cols)
        console.log(matrixA)
    },[cols,matrixA])


  return (
    <div>
      <div className='flex justify-center items-center mt-5'>
        <input type="text" className='bg-white text-black p-1 rounded-sm' onChange={handlecols}/>
      </div>
    <div className='flex gap-10 justify-center mt-5'>
    {cols &&(
        <div className='grid gap-4' style={{gridTemplateColumns : `repeat(${cols}, 1fr)`}}>
                    {matrixA.map((row,rowindex) =>
                    row.map((value,colsindex)=>(
                        <div key={`${rowindex}-${colsindex}`} className='h-20 w-20 border border-black bg-blue-500 flex items-center justify-center rounded-lg shadow-lg'>
                            <input type="text" className='text-center w-full h-full bg-white text-black font-bold rounded-lg outline-none' onChange={(e) => handlematrixchang(rowindex,colsindex,e.target.value)}/>
                        </div>
                    )))}
        </div>
      )}
    </div>
     
    </div>
  )
}

export default test
