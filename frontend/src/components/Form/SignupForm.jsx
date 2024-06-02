import React, { useState } from "react";
import InputField from "./InputField";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import authService from "../../services/authService";

function SignupForm() {
    const [formData, setFormData] = useState({
        username: "",
        name: "",
        email: "",
        password: "",
        cPassword: "",
    });

    const navigate = useNavigate();
    const { userType } = useParams();

    const changeHandler = (event) => {
        const { name, value } = event.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const submitHandler = async (e) => {
        e.preventDefault();

        const accountData = {
            ...formData,
            role: userType,
        };

        try {
            const accData = await authService.createAccount(accountData);
            if (accData) {
                toast.success("Account Created");

                // Navigate to more-info page after successful account creation
                navigate(`/${userType}/more-info`);
            } else {
                toast.error("Something went wrong");
            }
        } catch (err) {
            toast.error(err.message || "An error occurred");
        }
    };

    return (
        <form className="flex flex-col gap-4" onSubmit={submitHandler}>
            <InputField
                name="name"
                data={formData.name}
                event={changeHandler}
                label="Full Name"
                ph="Full Name"
                type="text"
                imp="*"
            />
            <InputField
                name="username"
                data={formData.username}
                event={changeHandler}
                label="User name"
                ph="User Name"
                type="text"
                imp="*"
            />
            <InputField
                type="email"
                data={formData.email}
                event={changeHandler}
                name="email"
                label="Email"
                ph="Email"
                imp="*"
            />
            <InputField
                name="password"
                data={formData.password}
                event={changeHandler}
                label="Password"
                ph="**************"
                type="password"
                imp="*"
            />
            <InputField
                name="cPassword"
                data={formData.cPassword}
                event={changeHandler}
                label="Confirm Password"
                ph="**************"
                type="password"
                imp="*"
            />
            <div className="">
                <button
                    type="submit"
                    className="bg-primary-200 text-white rounded-md w-full py-2 font-medium"
                >
                    Create Free Account
                </button>
            </div>
        </form>
    );
}

export default SignupForm;
