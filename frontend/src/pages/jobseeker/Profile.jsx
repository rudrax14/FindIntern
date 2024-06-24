import React, { useEffect } from "react";
import Navbar from "../../components/common/Navbar";
import ProfileHeader from "../../components/Profile/ProfileHeader";
import ProfileCards from "../../components/Profile/ProfileCards";
import ProfileDetails from "../../components/Profile/ProfileDetails";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUserDetails, fetchUserData } from "../../redux/Slice/userSlice"; // Ensure fetchUserData is defined and imported correctly

function User() {
    const dispatch = useDispatch();
    const { userType, userId } = useParams();
    const userDetails = useSelector((state) =>
        userType === 'visit' ? state.user.userProfiles : state.user.userDetails
    );

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    console.log("profile", userDetails);

    return (
        <>
            <Navbar />
            <section className="bg-secondary-100 dark:text-secondary-100 py-12 px-3 dark:bg-dark-secondary-500">
                <ProfileHeader />
                <ProfileDetails userDetails={userDetails} userType={userType} />
                {userId === userDetails._id && <ProfileCards userType={userType} />}
            </section>
        </>
    );
}

export default User;
