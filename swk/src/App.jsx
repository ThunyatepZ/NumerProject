import React from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import LAYOUT from "./layout"
export default function App(){
  return(
    <>

      <LAYOUT/>
      
      <Routes>
      
        <Route path="/" element={<Navigate to="/Home" replace />}/>
      </Routes>
    </>
  )
}