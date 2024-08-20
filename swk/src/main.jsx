import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import App from './App.jsx';
import './index.css';
import Bisection from './page/Bisection.jsx';
import Falsepositionpg from './page/falsepositionpg.jsx';
import Graphical from './page/Graphical.jsx';
import Home from './page/Home.jsx';
import Onepointiter from './page/Onepoint.jsx';
import Registering from './page/register.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [

    {
      path: "Home",
      element: <Home/>,
      children: [
      {
        
        path: "Rootequation",
        element: <Graphical/>,
      },
      {
      path: "REGISTER",
      element: <Registering/>
    },
    {
      path: "Bisection",
      element: <Bisection/>
    },
    {
      path: "FalsePosition",
      element: <Falsepositionpg/>
    },
    {
      path: "Onepoint",
      element: <Onepointiter/>
    }

    ]
  }
  ]
  },
  

])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
