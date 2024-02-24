import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const AvatarUploader = ({ profile }) => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [imageUrl, setImageUrl] = useState(profile);

    const { userType } = useParams();

    useEffect(() => {
        setImageUrl(profile);
    }, [profile]);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setImageUrl(reader.result);
            };
            reader.readAsDataURL(file);
            setSelectedFile(file);
        }
    };

    const handleUpdate = () => {
        const jwtToken = localStorage.getItem("userToken");
        const formData = new FormData();
        formData.append('avatar', selectedFile);
        axios.post(`http://localhost:5000/api/v1/${userType}/profile/image/upload`, formData, {
            headers: {
                Authorization: `Bearer ${jwtToken}`,
                'Content-Type': 'multipart/form-data'
            }
        })
            .then((response) => {
                console.log(response);
            })
            .catch((err) => {
                console.log(err);
                const error = err.response.data.message;
            });
    };

    const handleDelete = () => {
        setImageUrl(profile);
    };

    return (
        <div className="profile md:flex md:justify-between space-y-6 items-center w-full">
            <div className='flex items-center gap-4'>
                <img className='w-20 rounded-full border-white border-4 overflow-hidden' src={imageUrl} alt="profile-img" />
                <div className='space-y-1'>
                    <h3 className='text-xl font-semibold text-secondary-300'>Your avatar</h3>
                    <p className='text-secondary-200'>
                        PNG or JPG no bigger than 800px wide and tall.
                    </p>
                </div>
            </div>
            <div className='flex gap-2'>
                <label htmlFor="avatar-upload" className='border border-secondary-200 hover:bg-secondary-200 hover:text-white text-secondary-200 rounded-md font-medium px-2 py-1 cursor-pointer'>Choose File</label>
                <input type="file" id="avatar-upload" style={{ display: "none" }} onChange={handleFileChange} />
                <button onClick={handleUpdate} className='border border-secondary-200 hover:bg-secondary-200 hover:text-white text-secondary-200 rounded-md font-medium px-2 py-1'>Update</button>
                <button onClick={handleDelete} className='border border-red-500  hover:bg-red-500 hover:text-white text-red-500 rounded-md font-medium px-2 py-1'>Delete</button>
            </div>
        </div>
    );
};

export default AvatarUploader;
