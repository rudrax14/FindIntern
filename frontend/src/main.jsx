import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import UserProvider from './context/Auth/UserContext';
ReactDOM.createRoot(document.getElementById('root')).render(

  <UserProvider>
    <BrowserRouter>
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </UserProvider>

)
