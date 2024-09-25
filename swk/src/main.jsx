import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import App from './App.jsx';
import './index.css';
import NEWTONDIVIDED from './inter/newtondiv.jsx';
import Bisection from './page/Bisection.jsx';
import Falsepositionpg from './page/falsepositionpg.jsx';
import Graphical from './page/Graphical.jsx';
import Home from './page/Home.jsx';
import LinearAGB101 from './page/LinearAGB.jsx';
import Lobbie from './page/Lobbie.jsx';
import Logkeeping from './page/Logkeeping.jsx';
import NEWTONRAPSON from './page/newtonrapyoyo.jsx';
import Onepointiter from './page/Onepoint.jsx';
import Registering from './page/register.jsx';
import SECANTmethod from './page/secant.jsx';
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
      path : "linear",
      element: <LinearAGB101/>
    },
    {
      path : "newtondiv",
      element : <NEWTONDIVIDED/>
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
