import React, { useState, useEffect, useContext } from "react";
import logoName from "../../../public/logo.png";
import logo from "../../../public/logo.svg";
import { Twirl as Hamburger } from "hamburger-react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  setUserMode,
  fetchUserData,
  clearUserDetails,
} from "../../redux/Slice/userSlice"; // Ensure clearUserDetails is imported
import { ThemeContext } from "../../context/ThemeContext"; // Import ThemeContext
import { FaSun, FaMoon } from "react-icons/fa"; // Import icons
import authService from "../../services/authService";
import { toast } from "react-hot-toast";
import Spinner from "../Spinner";

function Navbar() {
  const navigate = useNavigate();
  const { userType } = useParams();
  const [isHover, setHover] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const location = useLocation();

  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.user.userDetails);
  const spinner = useSelector((state) => state.user.loading);

  const { theme, toggleTheme } = useContext(ThemeContext); // Use ThemeContext

  if (location.pathname === "/") {
    localStorage.removeItem("userToken");
  }

  const signOutHandler = () => {
    dispatch(clearUserDetails()); // Dispatch clearUserDetails action
    localStorage.removeItem("userToken");
    authService
      .logout()
      .then(() => {
        navigate("/");
        toast.success("Logged out successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const navigateHandler = () => {
    if (userType) {
      navigate(`/${userType}/all-jobs`);
    } else {
      navigate("/");
    }
  };

  useEffect(() => {
    if (location.pathname === "/") return;
    if (
      userType == "recruiter" ||
      userType == "jobseeker" ||
      userType == "admin"
    ) {
      dispatch(fetchUserData(userType));
    }
  }, [userType, location.pathname, dispatch]);

  const isRecruiterPostJob = location.pathname === "/recruiter/post-a-job";
  const defaultImageUrl =
    "https://res.cloudinary.com/dipv5sufo/image/upload/v1708846305/FindIntern/Assets/stock-profile.jpg";


  if (!location.pathname === "/") {
    return <Spinner />;
  }

  return (
    <>
      <nav className="sm:sticky fixed top-0 w-full bg-white z-20 dark:bg-secondary-300">
        <div className="flex h-14 shadow-md px-2">
          <div className="container xl:px-24 flex justify-between items-center">
            <div
              className="flex items-center hover:cursor-pointer gap-2"
              onClick={navigateHandler}
            >
              <img src={logo} className="w-10" alt="" />
              <h1 className="text-4xl font-bold text-primary-200 hidden sm:block font-['Consolas'] ">
                FINDINTERN
              </h1>
            </div>
            <div className="flex gap-3 items-center">
              {userDetails._id && (
                <ul className="sm:flex gap-4 justify-between text-lg font-medium hidden text-secondary-300 dark:text-dark-secondary-300">
                  <Link
                    to={`/${userType}/all-jobs`}
                    className="hover:text-primary-200 hover:cursor-pointer"
                  >
                    Home
                  </Link>
                  {/* <Link
                  to={`/${userType}/all-jobs`}
                  className="hover:text-primary-200 hover:cursor-pointer"
                >
                  Jobs
                </Link> */}
                  {/* <Link
                    to={`/${userType}/category`}
                    className="hover:text-primary-200 hover:cursor-pointer"
                  >
                    Categories
                  </Link> */}
                  <Link
                    to={`/${userType}/chat/`}
                    className="hover:text-primary-200 hover:cursor-pointer"
                  >
                    Messages
                  </Link>
                  {/* <Link
                  to="/"
                  className="hover:text-primary-200 hover:cursor-pointer"
                >
                  Contact Us
                </Link> */}
                </ul>
              )}
              {/* Theme Toggle Button */}
              <button
                onClick={toggleTheme}
                className="flex items-center justify-center p-2 rounded-full bg-primary-200 text-white hover:bg-primary-300 focus:outline-none"
              >
                {theme === "light" ? <FaMoon /> : <FaSun />}
              </button>
              {/* login signup button */}
              <div
                className={`buttons flex space-x-4 text-center font-medium text-lg ${location.pathname == "/" ? "" : "hidden"}`}
              >
                <Link
                  to="/onboarding/sign-in"
                  onClick={() => {
                    dispatch(setUserMode("sign-in"));
                  }}
                  className="text-primary-200 border-primary-200 hover:bg-primary-200 hover:text-white rounded-md border px-2 py-1"
                >
                  Sign in
                </Link>
                <Link
                  to="/onboarding/sign-up"
                  onClick={() => {
                    dispatch(setUserMode("sign-up"));
                  }}
                  className="bg-primary-200 text-white border-primary-200 hover:bg-primary-300 rounded-md border px-2 py-1"
                >
                  Sign Up
                </Link>
                <Link
                  to="/sign-in/admin"
                  className="bg-primary-200 text-white border-primary-200 hover:bg-primary-300 rounded-md border px-2 py-1"
                >
                  Admin
                </Link>
              </div>
              <div
                className={`flex justify-center  w-fit items-center gap-3 ${location.pathname !== "/" ? "" : "hidden"} `}
              >
                <div className={`profile relative`}>
                  <div
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                    className={`block`}
                  >
                    <img
                      className={` h-12 w-12 border-2 rounded-full object-cover ${isHover ? "border-primary-200" : ""} hover:outline-none`}
                      src={userDetails.profileImgUrl || defaultImageUrl}
                      alt="nav-prof"
                    />
                  </div>
                  <div
                    onMouseOver={() => setHover(true)}
                    className="absolute w-full h-2 "
                  ></div>
                  <div
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                    className={`${!isHover ? "fixed left-[-100%]" : " bg-white dark:bg-dark-secondary-400 dark:text-secondary-100 rounded-lg transition-all ease-in-out duration-300 text-secondary-200  absolute mt-2 right-0 w-40 top-auto shadow-lg border"}`}
                  >
                    {userDetails._id && (
                      <>
                        <Link
                          className="block px-4 py-1 hover:text-primary-200 hover:cursor-pointer"
                          to={`/${userType}/profile/${userDetails._id}`}
                        >
                          Profile
                        </Link>
                        {userType === "recruiter" && !isRecruiterPostJob && (
                          <Link
                            className="block px-4 py-1 hover:text-primary-200 hover:cursor-pointer"
                            to={`/${userType}/post-a-job`}
                          >
                            Post A Job
                          </Link>
                        )}
                        <Link
                          className="block px-4 py-1 hover:text-primary-200 hover:cursor-pointer"
                          to={`/${userType}/edit-info`}
                        >
                          Account Settings
                        </Link>
                        <Link
                          className="block px-4 py-1 hover:text-primary-200 hover:cursor-pointer"
                          to="/"
                          onClick={signOutHandler}
                        >
                          Sign Out
                        </Link>
                      </>
                    )}
                  </div>
                </div>

                {/* mobile device hamburger */}
                <div className="block sm:hidden">
                  <Hamburger
                    toggled={isOpen}
                    toggle={setOpen}
                    color="#754ffe"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {/* mobile device hamburger div */}
      <div
        className={` ${isOpen ? " mt-14 fixed top-0 w-full h-full ease-in-out duration-500 md:hidden z-40" : "ease-in-out duration-500 fixed left-[-100%]"}`}
      >
        <div className="bg-white dark:bg-dark-secondary-400 py-4 dark:border-none border-primary-200 border transition-all">
          <ul className="flex flex-col w-full  justify-between text-lg font-medium px-6">
            <Link
              to={`/${userType}/all-jobs`}
              className="hover:text-primary-200 hover:cursor-pointer"
            >
              Home
            </Link>
            {/* <Link
              to={`/${userType}/category`}
              className="hover:text-primary-200 hover:cursor-pointer"
            >
              Categories
            </Link> */}
            <Link
              to={`/${userType}/chat/`}
              className="hover:text-primary-200 hover:cursor-pointer"
            >
              Messages
            </Link>
            {/* <Link
              to="/"
              className="hover:text-primary-200 hover:cursor-pointer"
            >
              Contact Us
            </Link> */}
          </ul>
        </div>
        <div className="backdrop-blur-sm h-full"></div>
      </div>
    </>
  );
}

export default Navbar;
