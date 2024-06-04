import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import AdminProvider from "./context/AdminContext.jsx";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import { ThemeProvider } from './context/ThemeContext.jsx';

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <AdminProvider>
      <ThemeProvider>
        <BrowserRouter scrollRestoration={true}>
          <Toaster />
          {/* <React.StrictMode> */}
          <App />
          {/* </React.StrictMode> */}
        </BrowserRouter>
      </ThemeProvider>
    </AdminProvider>
  </Provider>
);
