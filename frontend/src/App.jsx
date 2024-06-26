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
import JobseekerProfile from "./pages/jobseeker/Profile";
// admin
import AdminDashboard from "./pages/admin/AdminDashboard";
import NotFound from "./pages/NotFound";
// redirector
import MoreInfo from "./components/MoreInfo";
import UpdatePassword from "./pages/auth/UpdatePassword";
import ForgotPassword from "./pages/auth/ForgotPassword";
import Feed from "./pages/Feed";
import EditJob from "./pages/recruiter/EditJob";
import Chat from "./pages/Chat/Chat";
import Categories from "./pages/Categories";
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
        <Route path="/:userType/:username/:profileId" element={<JobseekerProfile />} />
        {/* more-info */}
        <Route path="/:userType/more-info" element={<MoreInfo />} />
        {/* edit-info */}
        <Route path="/:userType/edit-info" element={<MoreInfo />} />
        {/* recruiter-post */}
        <Route path="/:userType/post-a-job" element={<PostJobs />} />
        <Route path="/:userType/edit-a-job/:id" element={<EditJob />} />
        {/* jobs */}
        <Route path="/:userType/all-jobs" element={<JobsLists />} />
        <Route path="/:userType/job-profile/:id" element={<SingleJobs />} />
        {/* category */}
        <Route path="/:userType/category" element={<Categories />} />
        {/* admin */}
        <Route path="/sign-in/:userType" element={<Login />} />
        <Route path="/:userType/dashboard" element={<AdminDashboard />} />
        {/* forget password */}
        <Route path="/forgot-password/:userType" element={<ForgotPassword />} />
        <Route
          path="/update-password/:userType/:token"
          element={<UpdatePassword />}
        />
        {/* chat */}
        <Route path="/:userType/chat/:receiverId" element={<Chat />} />
        <Route path="/:userType/chat" element={<Chat />} />
        {/* feed */}
        <Route path="/:userType/feed" element={<Feed />} />
        {/* not found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
