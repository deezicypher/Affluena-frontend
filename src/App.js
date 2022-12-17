import React from 'react'

import {
  createBrowserRouter,
  RouterProvider,
  Navigate
} from "react-router-dom";

import './app.css';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import EmailSent from './pages/EmailSent';
import ResetPass from './pages/ResetPass';
import ForgotPass from './pages/ForgotPass';
import VerfiyEmail from './pages/VerfiyEmail';
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
      },
      {
        path: "/mail-sent",
        element: <EmailSent/>,
      },
      {path: '/password-reset/:uid/:token',
        element:<ResetPass/>
      },
      {
        path:"/verify-email/:token",
        element:<VerfiyEmail/>
      },
      {
        path: "/forgot-password",
        element: <ForgotPass/>,
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
  },
  {
    path:"*",
    element: <Navigate to="/" />,
  }
  
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App
