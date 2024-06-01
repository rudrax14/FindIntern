import React, { useState, useEffect, useContext } from "react";
import logo from "../../../public/logo.png";
import { Twirl as Hamburger } from "hamburger-react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setUserMode, fetchUserData } from "../../redux/Slice/userSlice";
import { ThemeContext } from "../../context/ThemeContext"; // Import ThemeContext
import { FaSun, FaMoon } from "react-icons/fa"; // Import icons

function Navbar() {
    const navigate = useNavigate();
    const { userType } = useParams();
    const [isHover, setHover] = useState(false);
    const [isOpen, setOpen] = useState(false);
    const location = useLocation();

    const dispatch = useDispatch();
    const userDetails = useSelector((state) => state.user.userDetails);

    const { theme, toggleTheme } = useContext(ThemeContext); // Use ThemeContext

    if (location.pathname === "/") {
        localStorage.removeItem("userToken");
    }

    const clickHandler = () => {
        localStorage.removeItem("userToken");
    };

    const navigateHandler = () => {
        if (userType) {
            navigate(`/${userType}/feed`);
        } else {
            navigate("/");
        }
    };

    useEffect(() => {
        if (location.pathname === "/") return;
        dispatch(fetchUserData(userType));
    }, [dispatch, userType, location.pathname]);

    const isRecruiterPostJob = location.pathname === "/recruiter/post-a-job";

    return (
        <>
            <nav className="sticky top-0 bg-white z-20 dark:bg-secondary-300">
                <div className="flex h-14 shadow-md px-2">
                    <div className="container xl:px-24 flex justify-between items-center">
                        <div
                            className="flex items-center hover:cursor-pointer"
                            onClick={navigateHandler}
                        >
                            <img src={logo} className="w-48" alt="" />
                        </div>
                        <div className="flex gap-3 items-center">
                            <ul className="lg:flex gap-4 justify-between text-lg font-medium hidden text-secondary-300 dark:text-dark-secondary-300">
                                <Link
                                    to="/jobseeker/feed"
                                    className="hover:text-primary-200 hover:cursor-pointer"
                                >
                                    Home
                                </Link>
                                <Link
                                    to={`/${userType}/all-jobs`}
                                    className="hover:text-primary-200 hover:cursor-pointer"
                                >
                                    Jobs
                                </Link>
                                <Link
                                    to="/"
                                    className="hover:text-primary-200 hover:cursor-pointer"
                                >
                                    Categories
                                </Link>
                                <Link
                                    to="/"
                                    className="hover:text-primary-200 hover:cursor-pointer"
                                >
                                    Top Companies
                                </Link>
                                <Link
                                    to="/"
                                    className="hover:text-primary-200 hover:cursor-pointer"
                                >
                                    Contact Us
                                </Link>
                            </ul>
                            {/* Theme Toggle Button */}
                            <button
                                onClick={toggleTheme}
                                className="flex items-center justify-center p-2 rounded-full bg-primary-200 text-white hover:bg-primary-300 focus:outline-none"
                            >
                                {theme === "light" ? <FaMoon /> : <FaSun />}
                            </button>
                            {/* login signup button */}
                            <div
                                className={`buttons flex text-center font-medium text-lg ${location.pathname == "/" ? "" : "hidden"}`}
                            >
                                <Link
                                    to="/onboarding/sign-in"
                                    onClick={() => {
                                        dispatch(setUserMode("sign-in"));
                                    }}
                                    className="text-primary-200 border-primary-200 hover:bg-primary-200 hover:text-white rounded-md border px-2 py-1 mr-2"
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
                                            src={userDetails.profileImgUrl}
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
                                        <Link
                                            className="block px-4 py-1  hover:text-primary-200 hover:cursor-pointer"
                                            to={`/${userType}/profile`}
                                        >
                                            Profile
                                        </Link>
                                        {userType === "recruiter" && !isRecruiterPostJob && (
                                            <Link
                                                className="block px-4 py-1  hover:text-primary-200 hover:cursor-pointer"
                                                to={`/${userType}/post-a-job`}
                                            >
                                                Post A Job
                                            </Link>
                                        )}
                                        <Link
                                            className="block px-4 py-1  hover:text-primary-200 hover:cursor-pointer"
                                            to={`/${userType}/edit-info`}
                                        >
                                            Account Settings
                                        </Link>
                                        <Link
                                            className="block px-4 py-1 hover:text-primary-200 hover:cursor-pointer"
                                            to="/"
                                            onClick={clickHandler}
                                        >
                                            Sign Out
                                        </Link>
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
                <div className="bg-white py-4 border-primary-200 border transition-all">
                    <ul className="flex flex-col w-full justify-between text-lg font-medium px-6">
                        <li className="border-b-[2px] pb-1  hover:text-primary-200 hover:cursor-pointer">
                            Home
                        </li>
                        <li className="border-b-[2px] pb-1  hover:text-primary-200 hover:cursor-pointer">
                            Jobs
                        </li>
                        <li className="border-b-[2px] pb-1  hover:text-primary-200 hover:cursor-pointer">
                            About Us
                        </li>
                    </ul>
                </div>
                <div className="backdrop-blur-sm h-full"></div>
            </div>
        </>
    );
}

export default Navbar;
