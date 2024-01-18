import "./App.css";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import { Routes, Route } from "react-router-dom";
import UserProfile from "./components/dashboard/profile/UserProfile";
import UserDetail from "./components/dashboard/profile/userDetails/UserDetail";
import CompanyDetail from "./components/dashboard/profile/companyDetails/CompanyDetail";
import StartupPage from "./pages/StartupPage";
import StartupPage2 from "./pages/StartupPage2";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<StartupPage2 />} />
        <Route path="/user/login" element={<Login />} />
        <Route path="/user/signup" element={<Signup />} />
        <Route path="/user/details" element={<UserDetail />} />
        <Route path="/company/details" element={<CompanyDetail />} />
        <Route path="/dashboard" element={<h1>dashboard</h1>} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>

    </div>
  );
}

export default App;
