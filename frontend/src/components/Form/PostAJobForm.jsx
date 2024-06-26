import React, { useState } from "react";
import InputField from "./InputField";
import { useNavigate } from "react-router-dom";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import jobService from "../../services/jobService";
import { setJob } from "../../redux/Slice/jobSlice";

function PostAJobForm() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: "",
        company: "",
        location: "",
        salary: "",
        description: "",
        requirements: "",
        department: "",
        type: "Full-Time",
        period: "1 Month",
    });
    const dispatch = useDispatch();

    function changeHandler(event) {
        const { name, value } = event.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

    async function submitHandler(e) {
        e.preventDefault();
        try {
            const newJob = await jobService.postJob(formData);
            dispatch(setJob(newJob));
            navigate(`/recruiter/job-profile/${newJob._id}`);
            toast.success("Job posted successfully!");
        } catch (err) {
            console.error(err);
            toast.error("Failed to post job. Please try again.");
        }
    }

    return (
        <form
            onSubmit={submitHandler}
            className="lg:grid flex flex-col gap-2 grid-cols-2 py-6 lg:px-24 pt-12"
        >
            <div className="flex flex-col gap-3">
                <div className="text-5xl text-primary-200">
                    <HiOutlineBuildingOffice2 />
                </div>
                <h3 className="text-xl font-semibold text-secondary-300 dark:text-secondary-100">
                    Job information
                </h3>
                <p className="dark:text-secondary-200">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit lacerat amet ac.
                </p>
            </div>
            <div className="flex flex-col gap-6 rounded-lg p-8 border-gray-300 border">
                <InputField
                    name="title"
                    label="Job Title"
                    ph="Write the Job Title"
                    type="text"
                    imp="*"
                    event={changeHandler}
                />
                <InputField
                    name="company"
                    label="Company"
                    ph="Company"
                    type="text"
                    imp="*"
                    event={changeHandler}
                />
                <InputField
                    name="location"
                    label="Location"
                    ph="Location"
                    type="text"
                    imp="*"
                    event={changeHandler}
                />
                <InputField
                    name="size"
                    label="Size"
                    ph="Size"
                    type="number"
                    imp="*"
                    event={changeHandler}
                />
                <InputField
                    name="salary"
                    label="Job salary"
                    ph="Numbers"
                    type="number"
                    imp="*"
                    event={changeHandler}
                />
                <InputField
                    name="department"
                    label="Department"
                    ph="Eg: Web Design"
                    type="text"
                    imp="*"
                    event={changeHandler}
                />
                <div className="space-y-2">
                    <label htmlFor="" className="text-secondary-300 font-semibold dark:text-secondary-100">
                        Period
                    </label>
                    <span className="text-red-500 ml-1">*</span>
                    <select
                        name="period"
                        className="border dark:bg-dark-secondary-300 text-secondary-200 border-[#cbd5e1] w-full py-2 px-4 rounded-md placeholder:text-secondary-200 focus:border-primary-100 focus:shadow-sm focus:shadow-primary-100 focus:outline-none"
                        value={formData.period}
                        onChange={changeHandler}
                    >
                        <option value="1 Month">1 Month</option>
                        <option value="2-4 Month">2-4 Month</option>
                        <option value="3-6 Month">3-6 Month</option>
                        <option value="6+ Month">6+ Month</option>
                    </select>
                </div>
                <div className="space-y-2">
                    <label htmlFor="" className="text-secondary-300 font-semibold dark:text-secondary-100">
                        Job Type
                    </label>
                    <span className="text-red-500 ml-1">*</span>
                    <select
                        name="type"
                        className="border dark:bg-dark-secondary-300 text-secondary-200 border-[#cbd5e1] w-full py-2 px-4 rounded-md placeholder:text-secondary-200 focus:border-primary-100 focus:shadow-sm focus:shadow-primary-100 focus:outline-none"
                        value={formData.type}
                        onChange={changeHandler}
                    >
                        <option value="Full-Time">Full Time</option>
                        <option value="Part-Time">Part Time</option>
                    </select>
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="" className="text-secondary-300 font-semibold dark:text-secondary-100">
                        Job description
                    </label>
                    <textarea
                        name="description"
                        cols=""
                        rows="3"
                        placeholder="Write about job"
                        className="border text-secondary-200 dark:bg-dark-secondary-300 border-[#cbd5e1] w-full py-2 px-4 rounded-md placeholder:text-secondary-200 focus:border-primary-100 focus:shadow-sm focus:shadow-primary-100 focus:outline-none"
                        onChange={changeHandler}
                    ></textarea>
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="" className="text-secondary-300 font-semibold dark:text-secondary-100">
                        Job Requirements
                    </label>
                    <textarea
                        name="requirements"
                        cols=""
                        rows="3"
                        placeholder="Write about job"
                        className="border dark:bg-dark-secondary-300 text-secondary-200 border-[#cbd5e1] w-full py-2 px-4 rounded-md placeholder:text-secondary-200 focus:border-primary-100 focus:shadow-sm focus:shadow-primary-100 focus:outline-none"
                        onChange={changeHandler}
                    ></textarea>
                </div>
                <div className="">
                    <button
                        type="submit"
                        className="bg-primary-200 text-white rounded-md lg:w-2/6 w-full py-2 font-medium"
                    >
                        Submit for Approval
                    </button>
                </div>
            </div>
        </form>
    );
}

export default PostAJobForm;
