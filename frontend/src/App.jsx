import "./App.css";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<h1>Landing Page</h1>} />
        <Route path="/user/login" element={<Login />} />
        <Route path="/user/signup" element={<Signup />} />
        <Route path="/dashboard" element={<h1>dashboard</h1>} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>

    </div>
  );
}

export default App;
