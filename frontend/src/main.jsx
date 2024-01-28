import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import UserState from './context/Auth/UserState.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(


  <UserState>
    <BrowserRouter>
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
      <App />
    </BrowserRouter>
  </UserState>
  ,
)
