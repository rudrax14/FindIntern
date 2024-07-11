import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { updateProfileImage } from '../../redux/Slice/userSlice'; // Ensure the correct path to userSlice

const AvatarUploader = ({ profile }) => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [imageUrl, setImageUrl] = useState(profile);
    const dispatch = useDispatch();
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
        formData.append('imageFile', selectedFile);

        axios.post(`${import.meta.env.VITE_BACKEND_URL}/${userType}/profile/image/upload`, formData, {
            headers: {
                Authorization: `Bearer ${jwtToken}`,
            }
        })
            .then((response) => {
                const newImageUrl = response.data.imageUrl;
                dispatch(updateProfileImage(newImageUrl));
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const handleDelete = () => {
        setImageUrl(profile);
    };

    const defaultImageUrl = 'https://res.cloudinary.com/dipv5sufo/image/upload/v1708846305/FindIntern/Assets/stock-profile.jpg';

    return (
        <div className="profile xl:flex md:justify-between space-y-6 items-center w-full">
            <div className='xl:flex items-center gap-4'>
                <div className='w-fit flex-shrink-0'>
                    <img className='w-20 h-20 object-cover overflow-hidden rounded-full border-white border-4' src={imageUrl || defaultImageUrl} alt="profile-img" />
                </div>
                <div className='space-y-1'>
                    <h3 className='text-xl font-semibold text-secondary-300'>Your avatar</h3>
                    <p className='text-secondary-200'>
                        PNG or JPG no bigger than 800px wide and tall.
                    </p>
                </div>
            </div>
            <div className='flex gap-2'>
                <label htmlFor="avatar-upload" className='border border-secondary-200 hover:bg-secondary-200 hover:text-white text-secondary-200 rounded-md font-medium flex justify-center items-center w-20 h-10'>Select File</label>
                <input type="file" id="avatar-upload" className='hidden' onChange={handleFileChange} />
                <button onClick={handleUpdate} className='border border-secondary-200 hover:bg-secondary-200 hover:text-white text-secondary-200 rounded-md font-medium px-2 py-1 w-20 h-10'>Update</button>
                <button onClick={handleDelete} className='border border-red-500 hover:bg-red-500 hover:text-white text-red-500 rounded-md font-medium px-2 py-1 w-20 h-10'>Delete</button>
            </div>
        </div>
    );
};

export default AvatarUploader;
