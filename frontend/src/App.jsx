import "./App.css";
import { Routes, Route } from "react-router-dom";
import StartupPage from "./pages/StartupPage";
// auth
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
// Onboarding
import Onboarding from "./pages/Onboarding";
// recruiter
import PostJobs from "./pages/recruiter/PostJob";
import RecruiterMoreInfo from "./pages/recruiter/RecruiterMoreInfo";
import RecruiterProfile from "./pages/recruiter/RecruiterProfile";
// jobseeker
import JobseekerMoreInfo from "./pages/jobseeker/JobseekerMoreInfo";
import JobsLists from "./pages/jobseeker/JobsLists";
import SingleJobs from "./pages/jobseeker/SingleJob";
import JobseekerProfile from "./pages/jobseeker/JobseekerProfile";
// admin
import Admin from "./pages/admin/AdminProfile";
import Dashboard from "./pages/admin/Dashboard";
import NotFound from "./pages/NotFound";
function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<StartupPage />} />
        {/* onboarding */}
        <Route path="/onboarding/sign-in" element={<Onboarding />} />
        <Route path="/onboarding/sign-up" element={<Onboarding />} />
        {/* joobseeker */}
        <Route path="/onboarding/sign-in/jobseeker" element={<Login />} />
        <Route path="/onboarding/sign-up/jobseeker" element={<Signup />} />
        {/* recruiter */}
        <Route path="/onboarding/sign-in/recruiter" element={<Login />} />
        <Route path="/onboarding/sign-up/recruiter" element={<Signup />} />
        {/*profile */}
        <Route path="/jobseeker/profile" element={<JobseekerProfile />} />
        <Route path="/recruiter/profile" element={<RecruiterProfile />} />
        {/* more-info */}
        <Route path="/jobseeker/more-info" element={<JobseekerMoreInfo />} />
        <Route path="/recruiter/more-info" element={<RecruiterMoreInfo />} />
        {/* edit-info */}
        <Route path="/jobseeker/edit-info" element={<JobseekerProfile />} />
        <Route path="/recruiter/edit-info" element={<RecruiterMoreInfo />} />
        {/* recruiter-post */}
        <Route path="/recruiter/post-a-job" element={<PostJobs />} />
        {/* jobs */}
        <Route path="/all-jobs" element={<JobsLists />} />
        <Route path="/job-profile" element={<SingleJobs />} />
        {/* admin */}
        <Route path="/admin" element={<Admin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* not found */}
        <Route path="*" element={<NotFound />} />
      </Routes>

    </div>
  );
}

export default App;
