import React, { useEffect, useState } from "react";
import useJobHooks from "../../hooks/jobHooks";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../Spinner";

const defaultAvatar = "https://via.placeholder.com/40";

const ConversationList = ({ onSelectConversation }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const { userType } = useParams();
  const { fetchAllAppliedJobs, fetchAllCompanyJobs } = useJobHooks();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      if (userType === "jobseeker") {
        await fetchAllAppliedJobs();
      } else {
        await fetchAllCompanyJobs();
      }
      setLoading(false);
    };
    fetchData();
  }, [userType]);

  const userChatList = useSelector((state) => state.userChat.userList);
  const navigate = useNavigate();

  return (
    <div className="flex flex-1 flex-col h-full w-full sm:w-1/3 rounded-lg border-r border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
      <div className="p-4 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 sticky top-0 z-10">
        <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
          Conversations
        </h2>
        <input
          type="text"
          placeholder="Search..."
          className="mt-2 p-2 w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 placeholder-gray-500 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="flex-1 overflow-y-auto">
        {loading ? (
          <Loader />
        ) : userChatList.length > 0 ? (
          userChatList.map((chat, i) => (
            <div
              key={i}
              className="p-4 border-b border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer transition duration-200"
              onClick={() => {
                onSelectConversation(chat);
                navigate(`/${userType}/chat/${chat.userId}`);
              }}
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <img
                    src={chat.profileImage || defaultAvatar}
                    alt="avatar"
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div className="flex flex-col">
                    <h3 className="font-semibold text-gray-800 dark:text-gray-300">
                      {chat.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      {chat.title}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">2h</p>
              </div>
            </div>
          ))
        ) : (
          <h1 className="text-center text-2xl my-4">No conversations found</h1>
        )}
      </div>
    </div>
  );
};

export default ConversationList;
