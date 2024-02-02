import "./App.css";
import { Routes, Route } from "react-router-dom";
import StartupPage from "./pages/StartupPage";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import PostJobs from "./pages/PostJobs";
import UserDetails from "./pages/UserDetails";
import JobsLists from "./pages/JobsLists";
import SingleJobs from "./pages/SingleJobs";
import User from "./pages/Profile/User";
import Admin from "./pages/Profile/Admin";
import Dashboard from "./pages/Dashboard";
import Onboarding from "./pages/Onboarding";
import NotFound from "./pages/NotFound";
function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<StartupPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/company/post" element={<PostJobs />} />
        <Route path="/user/post" element={<UserDetails />} />
        <Route path="/user/jobs" element={<JobsLists />} />
        <Route path="/single/jobs" element={<SingleJobs />} />
        <Route path="/user/profile" element={<User />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

    </div>
  );
}

export default App;
