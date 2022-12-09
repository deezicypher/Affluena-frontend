import React from 'react'
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

import './app.css';
import Home from './pages/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "about",
    element: <div>About</div>,
  },
]);

const App = () => {
  return (
   <Home/>
  )
}

export default App
