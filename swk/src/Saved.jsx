import axios from 'axios'
import React, { useEffect, useState } from 'react'
const savedata = "http://localhost:5000/api/getdata"

function Saved() {
    const [data,setdata] = useState([])

    useEffect(()=>{
        axios.get(savedata).then((res)=>{
            console.log(res.data)
            setdata(res.data)
        })
    },[])
    return (
    <div>
        {data.map((item,index)=>{
            return(
            <div key={item._id}>
                <p>{index + 1}</p>
                <p>Equation :{item.equation}</p>
                <p>Xstart : {item.Xstart}</p>
                <p>Xend : {item.Xend}</p>
                <p>anser : {item.anser}</p>
                <p>type : {item.type}</p>
                <p>-------------------------</p>

            </div>)
            
        })}
    </div>
  )
}

export default Saved
