import React from 'react'

import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

import './app.css';
import Layout from './components/Layout';
import Home from './pages/Home';

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
        element: <div>About</div>,
      },
    ]

  },
  
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App
