import "./App.css";
import { Routes, Route } from "react-router-dom";
import StartupPage from "./pages/StartupPage";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<StartupPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="/dashboard" element={<h1>dashboard</h1>} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>

    </div>
  );
}

export default App;
