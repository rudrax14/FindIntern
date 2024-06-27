import React, { useState, useEffect } from "react";
import JobsCards from "../components/common/JobsCard";
import Navbar from "../components/common/Navbar";
import Searchbar from "../components/common/Searchbar";
import TimeTracker from "../utils/TimeTracker";
import { useParams } from "react-router-dom";
import useJobHooks from "../hooks/jobHooks";
import { useSelector } from "react-redux";

function StartupPage() {
  const { userType } = useParams();
  const { fetchAllJobs } = useJobHooks();
  const allJobs = useSelector((state) => state.job.allJobs);

  // State to hold the userType
  const [currentUserType, setCurrentUserType] = useState(userType);

  useEffect(() => {
    fetchAllJobs(true);
    // Set userType to "guest" when at the "/" page
    if (window.location.pathname === "/") {
      setCurrentUserType("guest");
    }
  }, []);

  return (
    <>
      <Navbar />
      {/* Hero section */}
      <section className="bg-secondary-100 py-20 flex dark:bg-dark-secondary-100">
        <div className="container xl:grid grid-cols-2 flex 2xl px-6">
          <div className="flex flex-col gap-12 w-full sm:flex-wrap text-center sm:text-start justify-center 2xl:px-20">
            <div className="flex flex-col gap-6">
              <h1 className="sm:text-6xl text-4xl font-bold text-wrap text-secondary-300 dark:text-dark-secondary-300">
                Find your dream job that you love to do.
              </h1>
              <p className="md:font-semibold font-medium md:text-xl text-lg text-secondary-200 dark:text-dark-secondary-200">
                The largest remote work community in the world. Sign up and post
                a job or create your developer profile.
              </p>
            </div>
            <div>
              <Searchbar />
            </div>
            <p className="text-secondary-200 dark:text-dark-secondary-200">
              Currently listing 30,642 jobs from 5,717 companies
            </p>
          </div>
          <div className="hero-image xl:flex justify-center hidden flex-shrink w-full px-12 ">
            <div className="relative">
              <img
                src="https://codescandy.com/geeks-bootstrap-5/assets/images/job/png/job-hero-section.png"
                alt=""
                className="w-[519px] h-[568px] shrink"
              />
              <div className="absolute top-0 mt-[3rem] -ml-[6rem] start-0">
                <img
                  src="https://codescandy.com/geeks-bootstrap-5/assets/images/job/job-hero-block-1.svg"
                  alt=""
                />
              </div>
              <div className="absolute bottom-0 -mr-[5.5rem] mb-[15.5rem] end-0">
                <img
                  src="https://codescandy.com/geeks-bootstrap-5/assets/images/job/job-hero-block-2.svg"
                  alt=""
                />
              </div>
              <div className="absolute bottom-0 -ml-[3rem] -mb-[1.5rem] start-0">
                <img
                  src="https://codescandy.com/geeks-bootstrap-5/assets/images/job/job-hero-block-3.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* top-comp */}
      <section className="top-comp bg-white dark:bg-dark-secondary-500">
        <div className="container  mx-auto py-12 dark:bg-dark-secondary-500">
          <div className="flex flex-row flex-wrap text-center gap-12 justify-center">
            <img
              src="https://codescandy.com/geeks-bootstrap-5/assets/images/brand/gray-logo-airbnb.svg"
              alt=""
            />
            <img
              src="https://codescandy.com/geeks-bootstrap-5/assets/images/brand/gray-logo-discord.svg"
              alt=""
            />
            <img
              src="https://codescandy.com/geeks-bootstrap-5/assets/images/brand/gray-logo-intercom.svg"
              alt=""
            />
            <img
              src="https://codescandy.com/geeks-bootstrap-5/assets/images/brand/gray-logo-stripe.svg"
              alt=""
            />
            <img
              src="https://codescandy.com/geeks-bootstrap-5/assets/images/brand/gray-logo-netflix.svg"
              alt=""
            />
          </div>
        </div>
      </section>
      {/* companies */}
      <section className="company-list pt-20 bg-white dark:bg-dark-secondary-500">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center pb-6">
            <span className="text-primary-200 text-base font-semibold uppercase tracking-widest">
              Latest Job Opening
            </span>
            <h2 className="font-bold text-3xl text-secondary-300 mt-6 dark:text-dark-secondary-300">
              Explore remote friendly, flexible job opportunities.
            </h2>
          </div>
          <div className="mx-4">
            {allJobs.slice(0, 3).map((job, index) => (
              <JobsCards
                key={index}
                logo={job.postedBy.profileImgUrl}
                title={job.title}
                type={job.type}
                company={job.company}
                salary={job.salary}
                location={job.location}
                id={job._id}
                period={job.period}
                timeAgo={TimeTracker(job.createdAt)}
                appliedUsers={job.appliedUsers}
              />
            ))}
          </div>
          <div className="flex items-center justify-center pb-10">
            <button className="hover:bg-primary-200 hover:text-white border border-primary-200 text-primary-200 font-medium p-3 rounded-lg">
              Browse All Jobs Postings
            </button>
          </div>
        </div>
      </section>
      {/* companies */}
    </>
  );
}

export default StartupPage;
