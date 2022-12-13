import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { AuthContextProvider } from './context/authContext';

import { Toaster } from 'react-hot-toast';



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
   
    <Toaster/> 
    <AuthContextProvider>
    <App />
    </AuthContextProvider>
  </React.StrictMode>
);
