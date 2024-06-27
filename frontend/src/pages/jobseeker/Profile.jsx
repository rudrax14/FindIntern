import React, { useEffect } from "react";
import Navbar from "../../components/common/Navbar";
import ProfileHeader from "../../components/Profile/ProfileHeader";
import ProfileCards from "../../components/Profile/ProfileCards";
import ProfileDetails from "../../components/Profile/ProfileDetails";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUserProfiles } from "../../redux/Slice/userSlice";
import profileHooks from "../../hooks/profileHooks";

function User() {
    const { profile } = profileHooks();
    const dispatch = useDispatch();
    const { userType, profileId, username } = useParams();
    const userDetails = useSelector((state) =>
        userType === 'visit' ? state.user.userProfiles : state.user.userDetails
    );

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await profile(profileId, username);
                if (data && data.data) {
                    dispatch(setUserProfiles(data.data));
                } else {
                    console.error("No data received from profile function");
                }
            } catch (error) {
                console.error("Error fetching profile data", error);
            }
        }
        if (userType === 'visit') {
            fetchData();
        }
        window.scrollTo(0, 0);
    }, [profileId]);

    console.log("profile-page", userDetails);

    return (
        <>
            <Navbar />
            <section className="bg-secondary-100 dark:text-secondary-100 py-12 px-3 dark:bg-dark-secondary-500">
                <ProfileHeader userDetails={userDetails} userType={userType} />
                <ProfileDetails userDetails={userDetails} userType={userType} />
                {userType == 'visit' && profileId === userDetails._id || 'profile' && <ProfileCards userType={userType} />}
            </section>
        </>
    );
}

export default User;
