import axios from "axios";

function profileHooks() {
  const jwtToken = localStorage.getItem("userToken");
  const profile = async (profileId, username) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/v1/all/profile/${profileId}?username=${username}`,

        {
          username: username,
        },
        {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        }
      );
      console.log("profile-hooks", response.data);
      return response.data;
    } catch (err) {
      console.log(err);
    }
  };
  return {
    // Add your code here
    profile,
  };
}

export default profileHooks;
