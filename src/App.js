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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path: "/",
        element: <Home/>,
      },
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
  
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App
