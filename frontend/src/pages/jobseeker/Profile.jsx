import React from "react";
import Navbar from "../../components/common/Navbar";
import ProfileHeader from "../../components/Profile/ProfileHeader";
import ProfileCards from "../../components/Profile/ProfileCards";
import ProfileDetails from "../../components/Profile/ProfileDetails";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function User() {
    const { userType } = useParams();
    const { userId } = useParams();
    const userDetails = useSelector((state) => state.user.userDetails);
    return (
        <>
            <Navbar />
            <section className="bg-secondary-100 dark:text-secondary-100 py-12 px-3 dark:bg-dark-secondary-500">
                <ProfileHeader />
                <ProfileDetails userDetails={userDetails} userType={userType}/>
                {userId === userDetails._id && <ProfileCards userType={userType} />}
            </section>
        </>
    );
}
export default User;
