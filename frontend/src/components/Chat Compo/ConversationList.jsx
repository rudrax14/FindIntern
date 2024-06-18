import React, { useEffect, useState } from "react";
import useJobHooks from "../../hooks/jobHooks";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
const defaultAvatar = "https://via.placeholder.com/40";

const conversations = [
  {
    id: 1,
    name: "Sofia Davis",
    message: "hey what’s going on?",
    time: "2h",
    avatar: defaultAvatar,
  },
  {
    id: 2,
    name: "Alex Johnson",
    message: "Just finished a great book!",
    time: "45m",
    avatar: defaultAvatar,
  },
  {
    id: 3,
    name: "Maria Gonzalez",
    message: "Excited for the weekend!",
    time: "1h",
    avatar: defaultAvatar,
  },
  {
    id: 4,
    name: "Kevin Brown",
    message: "Who’s up for a movie night?",
    time: "3h",
    avatar: defaultAvatar,
  },
  {
    id: 5,
    name: "Lily White",
    message: "Morning coffee is the best!",
    time: "30m",
    avatar: defaultAvatar,
  },
  // Add more conversations here if needed
];

const ConversationList = ({ onSelectConversation }) => {
  // search chat list
  const [searchTerm, setSearchTerm] = useState("");
  // const filteredConversations = conversations.filter((conversation) =>
  //   conversation.name.toLowerCase().includes(searchTerm.toLowerCase())
  // );
  const { userType } = useParams();
  // fetch all companies name to chat
  const { fetchAllAppliedJobs, fetchAllCompanyJobs } = useJobHooks();

  useEffect(() => {
    if (userType === "jobseeker") fetchAllAppliedJobs();
    fetchAllCompanyJobs()
  }, []);

  // fetch companies name from redux
  const userChatList = useSelector((state) => state.userChat.userList);
  if (userChatList.length > 0) {
    console.log("userChatList", userChatList);
  }


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
        {userChatList.length > 0 && userChatList?.map((chat, i) => (
          <div
            key={i}
            className="p-4 border-b border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer transition duration-200"
            onClick={() => {
              onSelectConversation(conversations)
            }}
          >
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <img
                  src={chat.profileImage}
                  alt={defaultAvatar}
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div className="flex flex-col">
                  <h3 className="font-semibold text-gray-800 dark:text-gray-300">
                    {chat.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 ">
                    {chat.title}
                  </p>
                </div>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">2h</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConversationList;
