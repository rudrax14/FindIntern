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
// redirector
import MoreInfo from "./components/MoreInfo";
function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<StartupPage />} />
        {/* onboarding */}
        <Route path="/onboarding/sign-in" element={<Onboarding />} />
        <Route path="/onboarding/sign-up" element={<Onboarding />} />
        {/* joobseeker */}
        <Route path="/onboarding/sign-in/:userType" element={<Login />} />
        <Route path="/onboarding/sign-up/:userType" element={<Signup />} />
        {/* recruiter */}
        <Route path="/onboarding/sign-in/:userType" element={<Login />} />
        <Route path="/onboarding/sign-up/:userType" element={<Signup />} />
        {/*profile */}
        <Route path="/:userType/profile/" element={<JobseekerProfile />} />
        <Route path="/:userType/profile/" element={<RecruiterProfile />} />
        {/* more-info */}
        <Route path="/:userType/more-info" element={<MoreInfo />} />
        {/* edit-info */}
        <Route path="/:userType/edit-info" element={<MoreInfo />} />
        {/* recruiter-post */}
        <Route path="/:userType/post-a-job" element={<PostJobs />} />
        {/* jobs */}
        <Route path="/:userType/all-jobs" element={<JobsLists />} />
        <Route path="/:userType/job-profile/:id" element={<SingleJobs />} />
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
