import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from './App.jsx';
import './index.css';

// Pages
import Home from './page/Home.jsx';
import Lobbie from './page/Lobbie.jsx';
import Logkeeping from './page/Logkeeping.jsx';
import Registering from './page/register.jsx';

// Root of equation
import Bisection from './page/Bisection.jsx';
import Falsepositionpg from './page/falsepositionpg.jsx';
import Graphical from './page/Graphical.jsx';
import NEWTONRAPSON from './page/newtonrapyoyo.jsx';
import Onepointiter from './page/Onepoint.jsx';
import SECANTmethod from './page/secant.jsx';

// Interpolation
import NEWTONDIVIDED from './inter/newtondiv.jsx';

// Linear Algebra
import Conjugate from './linear/pageAGB/Conjugate.jsx';
import GaussPage from './linear/pageAGB/Gauss.jsx';
import GaussJordan from './linear/pageAGB/GaussJordan.jsx';
import GaussSeidel from './linear/pageAGB/GaussSeidel.jsx';
import Jacobipage from './linear/pageAGB/JacobiPage.jsx';
import CarmerPage from './linear/pageAGB/LinearAGB.jsx';
import Ludecomposition from './linear/pageAGB/Ludecomposition.jsx';
import MINV from './linear/pageAGB/matrixinvertion.jsx';

const router = createBrowserRouter([
  {
    path: "Lobby",
    element: <Lobbie/>
  },
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
        path: "log",
        element: <Logkeeping/>
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
    },
    {
      path: "Newtonrapson",
      element: <NEWTONRAPSON/>
    },
    {
      path: "Secantmed",
      element: <SECANTmethod/>
    },
    {
      path : "Carmer",
      element: <CarmerPage/>
    },
    {
      path : "newtondiv",
      element : <NEWTONDIVIDED/>
    },
    {
      path: "GaussElit",
      element: <GaussPage/>
    },
    {
      path: "GaussJordan",
      element: <GaussJordan/>
    },
    {
      path: "MatrixINV",
      element: <MINV/>
    },
    {
      path :"LU_decomposit",
      element : <Ludecomposition/>
    },
    {
      path : "conjugate",
      element : <Conjugate/>
    },
    {
      path : "Jacobi",
      element : <Jacobipage/>
    },
    {
      path : "GaussSeidel",
      element : <GaussSeidel/>
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
