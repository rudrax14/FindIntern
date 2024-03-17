import React, { useState, useContext } from "react";
import InputField from "./InputField";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
// import { UserContext } from "../../context/UserContext";
function SignupForm() {
    // const { setSignupData, setUserType } = useContext(UserContext);
    const [formData, setFormData] = useState({
        username: "",
        name: "",
        email: "",
        password: "",
        cPassword: "",
        // accountType: '',
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

    const submitHandler = (e) => {
        e.preventDefault();

        // if (formData.password !== formData.cPassword) {
        //     toast.error("Passwords do not match");
        //     return;
        // }

        // if (!formData.username || !formData.email || !formData.password) {
        //     toast.error("Enter All Details");
        //     return;
        // }
        // formData.accountType = accountType;
        const accountData = {
            ...formData,
            role: userType,
        };
        console.log(accountData);
        if (userType === "jobseeker") {
            userType === "jobseeker";
            navigate(`/${userType}/more-info`);
        } else {
            userType === "recruiter";
            navigate(`/${userType}/more-info`);
        }
        axios
            .post(`http://localhost:5000/api/v1/auth/register`, accountData)
            .then((response) => {
                // console.log(response.data);
                // setSignupData(response.data);
                toast.success("Account Created");
            })
            .catch((err) => {
                console.log("signup-error", err.response);
                const error = err.response.data.message;
                toast.error(error);
            });
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
            {/* <div className='flex gap-2 text-secondary-200'>
                <input type="checkbox" name="" id="" className='' onClick={() => {
                    const newAccountType = accountType === 'company' ? 'jobseeker' : 'company';
                    setAccountType(newAccountType);
                }} />
                <span>Check if you want to register a company.</span>
            </div> */}
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
