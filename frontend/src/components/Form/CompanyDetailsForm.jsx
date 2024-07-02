import React, { useEffect, useState } from "react";
import InputField from "./InputField";
import { LiaUserSolid } from "react-icons/lia";
import { useNavigate, useParams } from "react-router-dom";
import AvatarUploader from "./AvatarUploader";
import axios from "axios";
import { useSelector } from "react-redux";
function CompanyDetailsForm() {
    const [formData, setFormData] = useState({
        industry: "",
        size: "",
        location: "",
        website: "",
        logo: "",
        description: "",
    });

    const { userType } = useParams();
    const userDetails = useSelector((state) => state.user.userDetails);
    const navigate = useNavigate();

    useEffect(() => {
        if (userDetails) {
            setFormData((prevFormData) => ({
                ...prevFormData,
                industry: userDetails.industry || "",
                size: userDetails.size || "",
                location: userDetails.location || "",
                website: userDetails.website || "",
                // logo: userDetails.logo || "",
                description: userDetails.description || "",
            }));
        }
    }, [userDetails]);

    const changeHandler = (event) => {
        const { name, value } = event.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const submitHandler = (e) => {
        e.preventDefault();
        const jwtToken = localStorage.getItem("userToken");
        const accountData = { ...formData };
        console.log(accountData);
        axios.patch(`${import.meta.env.VITE_BACKEND_URL}/${userType}/profile`, accountData, {
            headers: {
                Authorization: `Bearer ${jwtToken}`,
            },
        })
            .then((response) => {
                console.log(response);
            })
            .catch((err) => {
                console.log(err);
                const error = err.response.data.message;
            });
        navigate(`/${userType}/profile/${userDetails._id}`)
    };

    return (
        <form
            action=""
            className="lg:grid flex flex-col gap-2 grid-cols-2 py-6 lg:px-24 pt-12 "
            onSubmit={submitHandler}
        >
            <div className="flex flex-col gap-3">
                <div className="text-5xl text-primary-200">
                    <LiaUserSolid />
                </div>
                <h3 className="text-xl font-semibold text-secondary-300 dark:text-secondary-100 ">
                    Your information - Recruiter
                </h3>
                <p className="dark:text-secondary-200 ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit lacerat amet
                    ac.
                </p>
            </div>
            <div className="flex flex-col gap-6 rounded-lg p-8 border-gray-300 border dark:bg-dark-secondary-400" >
                <div>
                    <AvatarUploader profile={userDetails.profileImgUrl} />
                </div>
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
                {/* <InputField
                    data={formData.logo}
                    event={changeHandler}
                    name="logo"
                    label="Logo URL"
                    ph="Your Logo URL"
                    type="text"
                    imp="*"
                /> */}
                <div className="flex flex-col gap-2">
                    <label htmlFor="" className="text-secondary-300 font-semibold dark:text-secondary-100 ">
                        Job description
                    </label>
                    <textarea
                        value={formData.description}
                        onChange={changeHandler}
                        name="description"
                        id=""
                        cols=""
                        rows="3"
                        placeholder="Write about job"
                        className="border text-secondary-200 dark:bg-dark-secondary-300 border-[#cbd5e1] w-full py-2 px-4 rounded-md placeholder:text-secondary-200 focus:border-primary-100 focus:shadow-sm focus:shadow-primary-100 focus:outline-none"
                    ></textarea>
                </div>
                <div className="">
                    <button
                        type="submit"
                        className="bg-primary-200 text-white rounded-md lg:w-2/6 w-full py-2 font-medium"
                    >
                        Update
                    </button>
                </div>
            </div>
        </form>
    );
}

export default CompanyDetailsForm;
