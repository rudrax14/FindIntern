import React, { useEffect, useState } from "react";
import InputField from "./InputField";
import { LiaUserSolid } from "react-icons/lia";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
function CompanyDetailsForm() {
    const [formData, setFormData] = useState({
        industry: "",
        size: "",
        location: "",
        website: "",
        logo: "",
        jobDescription: "",
    });

    const { userType } = useParams();
    const context = useContext(UserContext);
    const { userDetails, userData } = context;

    useEffect(() => {
        userData(userType);
        if (userDetails) {
            setFormData((prevFormData) => ({
                ...prevFormData,
                industry: userDetails.industry || "",
                size: userDetails.size || "",
                location: userDetails.location || "",
                website: userDetails.website || "",
                logo: userDetails.logo || "",
                jobDescription: userDetails.jobDescription || "",
            }));
        }
    }, []);

    const changeHandler = (event) => {
        const { name, value } = event.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const submitHandler = (e) => {
        e.preventDefault();
        console.log("Form Submitted");
    };

    return (
        <form
            action=""
            className="lg:grid flex flex-col gap-6 grid-cols-2 py-6 lg:px-24 pt-12"
            onSubmit={submitHandler}
        >
            <div className="flex flex-col gap-3">
                <div className="text-5xl text-primary-200">
                    <LiaUserSolid />
                </div>
                <h3 className="text-xl font-semibold text-secondary-300">
                    Your information - Recruiter
                </h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit lacerat amet
                    ac.
                </p>
            </div>
            <div className="flex flex-col gap-6">
                <InputField
                    data={formData.industry}
                    event={changeHandler}
                    name="industry"
                    label="Industry"
                    ph="Write the Job Title"
                    type="text"
                    imp="*"
                />
                <InputField
                    data={formData.size}
                    event={changeHandler}
                    name="size"
                    label="Size"
                    ph="Eg: 12"
                    type="number"
                    imp="*"
                />
                <InputField
                    data={formData.location}
                    event={changeHandler}
                    name="location"
                    label="Location"
                    ph="Location"
                    type="text"
                    imp="*"
                />
                <InputField
                    data={formData.website}
                    event={changeHandler}
                    name="website"
                    label="Website"
                    ph="Your Website Link"
                    type="text"
                    imp="*"
                />
                <InputField
                    data={formData.logo}
                    event={changeHandler}
                    name="logo"
                    label="Logo URL"
                    ph="Your Logo URL"
                    type="text"
                    imp="*"
                />
                <div className="flex flex-col gap-2">
                    <label htmlFor="" className="text-secondary-300 font-semibold">
                        Job description
                    </label>
                    <textarea
                        data={formData.jobDescription}
                        name=""
                        id=""
                        cols=""
                        rows="3"
                        placeholder="Write about job"
                        className="border text-secondary-200 border-[#cbd5e1] w-full py-2 px-4 rounded-md placeholder:text-secondary-200 focus:border-primary-100 focus:shadow-sm focus:shadow-primary-100 focus:outline-none"
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

export default CompanyDetailsForm;
