import React, { useEffect, useState } from "react";
import InputField from "./InputField";
import { useNavigate, useParams } from "react-router-dom";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import jobService from "../../services/jobService";
import { setJob } from "../../redux/Slice/jobSlice";

function EditAJobForm() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [formData, setFormData] = useState({
        title: "",
        company: "",
        location: "",
        salary: "",
        description: "",
        requirements: "",
        department: "",
        type: "Full-Time",
        period: "",
    });

    useEffect(() => {
        async function fetchJob() {
            try {
                const job = await jobService.getSingleJob(id);
                console.log(job);
                setFormData({
                    title: job.title || "",
                    company: job.company,
                    location: job.location,
                    salary: job.salary,
                    description: job.description,
                    requirements: job.requirements.join(", "),
                    department: job.department,
                    type: job.type,
                    period: job.period,
                });
            } catch (error) {
                console.log(error);
                toast.error("Failed to fetch job details");
            }
        }
        fetchJob();
    }, [id]);

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
            const updatedJob = await jobService.updateJob(id, {
                ...formData,
                requirements: formData.requirements.split(",").map(skill => skill.trim())
            });
            dispatch(setJob(updatedJob));
            navigate(`/recruiter/profile`);
        } catch (err) {
            console.log(err);
            toast.error(err.message || "Failed to update job");
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
                    data={formData.title}
                />
                <InputField
                    name="company"
                    label="Company"
                    ph="Company"
                    type="text"
                    imp="*"
                    event={changeHandler}
                    data={formData.company}
                />
                <InputField
                    name="location"
                    label="Location"
                    ph="Location"
                    type="text"
                    imp="*"
                    event={changeHandler}
                    data={formData.location}
                />
                {/* <InputField
                    name="size"
                    label="Size"
                    ph="Size"
                    type="number"
                    imp="*"
                    event={changeHandler}
                    data={formData.size}
                /> */}
                <InputField
                    name="salary"
                    label="Job salary"
                    ph="Numbers"
                    type="number"
                    imp="*"
                    event={changeHandler}
                    data={formData.salary}
                />
                <InputField
                    name="department"
                    label="Department"
                    ph="Eg: Web Design"
                    type="text"
                    imp="*"
                    event={changeHandler}
                    data={formData.department}
                />
                <InputField
                    name="period"
                    label="Period"
                    ph="Eg: 1-2 months, 1-5 months, 1-10 months"
                    type="text"
                    imp="*"
                    event={changeHandler}
                    data={formData.period}
                />
                <div className="space-y-2">
                    <label htmlFor="type" className="text-secondary-300 font-semibold dark:text-secondary-100">
                        Job Type
                    </label>
                    <span className="text-red-500 ml-1">*</span>
                    <select
                        name="type"
                        id="type"
                        className="border dark:bg-dark-secondary-300 text-secondary-200 border-[#cbd5e1] w-full py-2 px-4 rounded-md placeholder:text-secondary-200 focus:border-primary-100 focus:shadow-sm focus:shadow-primary-100 focus:outline-none"
                        onChange={changeHandler}
                        value={formData.type}
                    >
                        <option data="Full-Time">Full Time</option>
                        <option data="Part-Time">Part Time</option>
                    </select>
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="description" className="text-secondary-300 font-semibold dark:text-secondary-100">
                        Job description
                    </label>
                    <textarea
                        name="description"
                        id="description"
                        cols=""
                        rows="3"
                        placeholder="Write about job"
                        className="border text-secondary-200 dark:bg-dark-secondary-300 border-[#cbd5e1] w-full py-2 px-4 rounded-md placeholder:text-secondary-200 focus:border-primary-100 focus:shadow-sm focus:shadow-primary-100 focus:outline-none"
                        onChange={changeHandler}
                        value={formData.description}
                    ></textarea>
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="requirements" className="text-secondary-300 font-semibold dark:text-secondary-100">
                        Job Requirements
                    </label>
                    <textarea
                        name="requirements"
                        id="requirements"
                        cols=""
                        rows="3"
                        placeholder="Write about job requirements"
                        className="border dark:bg-dark-secondary-300 text-secondary-200 border-[#cbd5e1] w-full py-2 px-4 rounded-md placeholder:text-secondary-200 focus:border-primary-100 focus:shadow-sm focus:shadow-primary-100 focus:outline-none"
                        onChange={changeHandler}
                        value={formData.requirements}
                    ></textarea>
                </div>
                <div className="">
                    <button
                        type="submit"
                        className="bg-primary-200 text-white rounded-md lg:w-2/6 w-full py-2 font-medium"
                    >
                        Edit Job
                    </button>
                </div>
            </div>
        </form>
    );
}

export default EditAJobForm;
