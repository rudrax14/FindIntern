import React, { useState } from "react";
import { LiaUserSolid } from "react-icons/lia";
import InputField from "./InputField";
function PostAJobForm() {
    const [formData, setFormData] = useState({
        title: "",
        company: "",
        location: "",
        salary: "",
        department: "",
        type: "Full Time",
        description: "",
    });
    function changeHandler(event) {
        setFormData((prev) => ({
            ...prev,
            [event.target.name]: event.target.value,
        }));
    }

    function submitHandler(e) {
        e.preventDefault();
        console.log(formData);


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
                    label="Loaction"
                    ph="Loaction"
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
                        <option value="Full Time">Full Time</option>
                        <option value="Part Time">Part Time</option>
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
