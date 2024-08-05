import React from 'react'
import { Outlet } from 'react-router-dom'
import NAV from './component/Nav'

function LAYOUT() {
  return (
    <React.Fragment>
        <NAV/>
      
        
        <Outlet/>
    </React.Fragment>
  )
}

export default LAYOUT
