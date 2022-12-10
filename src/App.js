import React from 'react'

import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

import './app.css';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/",
    element: <Layout/>,
    children:[
   
      {
        path: "/about",
        element: <About/>,
      },
      {
        path: "/contact",
        element: <Contact/>,
      }
    ]

  },
 
  {
    path: "/login",
    element: <Login/>,
  }
  ,
  {
    path: "/register",
    element: <Register/>,
  }
  
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App
