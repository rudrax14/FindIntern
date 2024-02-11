import React, { useContext, useState } from "react";
import { LiaUserSolid } from "react-icons/lia";
import InputField from "./InputField";
import { useNavigate } from "react-router-dom";
import { JobContext } from "../context/JobContext";
import axios from "axios";

function PostAJobForm() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: "",
        company: "",
        location: "",
        salary: "",
        department: "",
        type: "Full-Time",
        requirements: [],
        description: "",
    });
    const { job, setJob } = useContext(JobContext);
    function changeHandler(event) {
        const { name, value } = event.target;
        if (name === "requirements") {
            const requirementsArray = value.split(',').map(skill => skill.trim());

            setFormData(prev => ({
                ...prev,
                [name]: requirementsArray,
            }));
        }
        else {

            setFormData((prev) => ({
                ...prev,
                [name]: value,
            }));

        }

    }

    function submitHandler(e) {
        e.preventDefault();
        const jwtToken = localStorage.getItem("userToken");
        axios.post(`http://localhost:5000/api/v1/job`, formData, {
            headers: {
                Authorization: `Bearer ${jwtToken}`,
            }
        }).then((response) => {
            setJob(response.data.newJob);
            navigate(`/recruiter/job-profile/${response.data.newJob._id}`)

        }).catch((err) => {
            console.log(err);
        })


    }

    return (
        <form
            onSubmit={submitHandler}
            action=""
            className="lg:grid flex flex-col gap-6 grid-cols-2 py-6 lg:px-24 pt-12"
        >
            <div className="flex flex-col gap-3">
                <div className="text-5xl text-primary-200">
                    <LiaUserSolid />
                </div>
                <h3 className="text-xl font-semibold text-secondary-300">
                    Job information
                </h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit lacerat amet
                    ac.
                </p>
            </div>
            <div className="flex flex-col gap-6">
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
                <InputField name="size" label="Size" ph="Size" type="number" imp="*" />
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
                    ph="Web Design"
                    type="text"
                    imp="*"
                    event={changeHandler}
                />
                <div className="space-y-2">
                    <label htmlFor="" className="text-secondary-300 font-semibold">
                        Job Type
                    </label>
                    <span className="text-red-500 ml-1">*</span>
                    <select
                        name="type"
                        id=""
                        className="border text-secondary-200 border-[#cbd5e1] w-full py-2 px-4 rounded-md placeholder:text-secondary-200 focus:border-primary-100 focus:shadow-sm focus:shadow-primary-100 focus:outline-none"
                        onChange={changeHandler}
                    >
                        <option value="Full-Time">Full Time</option>
                        <option value="Part-Time">Part Time</option>
                    </select>
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="" className="text-secondary-300 font-semibold">
                        Job description
                    </label>
                    <textarea
                        name="description"
                        id=""
                        cols=""
                        rows="3"
                        placeholder="Write about job"
                        className="border text-secondary-200 border-[#cbd5e1] w-full py-2 px-4 rounded-md placeholder:text-secondary-200 focus:border-primary-100 focus:shadow-sm focus:shadow-primary-100 focus:outline-none"
                        onChange={changeHandler}
                    ></textarea>
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="" className="text-secondary-300 font-semibold">
                        Job Requirements
                    </label>
                    <textarea
                        name="requirements"
                        id=""
                        cols=""
                        rows="3"
                        placeholder="Write about job"
                        className="border text-secondary-200 border-[#cbd5e1] w-full py-2 px-4 rounded-md placeholder:text-secondary-200 focus:border-primary-100 focus:shadow-sm focus:shadow-primary-100 focus:outline-none"
                        onChange={changeHandler}
                    ></textarea>
                </div>
                <div className="">
                    <button type="submit" className="bg-primary-200 text-white rounded-md lg:w-2/6 w-full py-2 font-medium">
                        Submit for Approval
                    </button>
                </div>
            </div>
        </form>
    );
}

export default PostAJobForm;
