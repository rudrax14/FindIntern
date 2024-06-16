import React, { useEffect, useState } from "react";
import useJobHooks from "../../hooks/jobHooks"
import { useSelector } from "react-redux";
const defaultAvatar = "https://via.placeholder.com/40";

const conversations = [
  { id: 1, name: "Sofia Davis", message: "hey what’s going on?", time: "2h", avatar: defaultAvatar },
  { id: 2, name: "Alex Johnson", message: "Just finished a great book!", time: "45m", avatar: defaultAvatar },
  { id: 3, name: "Maria Gonzalez", message: "Excited for the weekend!", time: "1h", avatar: defaultAvatar },
  { id: 4, name: "Kevin Brown", message: "Who’s up for a movie night?", time: "3h", avatar: defaultAvatar },
  { id: 5, name: "Lily White", message: "Morning coffee is the best!", time: "30m", avatar: defaultAvatar },
  // Add more conversations here if needed
];

const ConversationList = ({ onSelectConversation }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredConversations = conversations.filter((conversation) =>
    conversation.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const {fetchAllAppliedJobs} = useJobHooks();
  useEffect(()=>{
     fetchAllAppliedJobs("chat");
  },[])

  const companiesToChat = useSelector((state)=>state.job.userChatList);

  return (
    <div className="flex flex-1 flex-col h-full w-full sm:w-1/3 rounded-lg border-r border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
      <div className="p-4 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 sticky top-0 z-10">
        <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-300">Conversations</h2>
        <input
          type="text"
          placeholder="Search..."
          className="mt-2 p-2 w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 placeholder-gray-500 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="flex-1 overflow-y-auto">
        {companiesToChat.map((company,i) => (
          <div
            key={i}
            className="p-4 border-b border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer transition duration-200"
            onClick={() => onSelectConversation(conversation)}
          >
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <img src={defaultAvatar} alt={`${company}'s avatar`} className="w-10 h-10 rounded-full mr-3" />
                <h3 className="font-semibold text-gray-800 dark:text-gray-300">{company}</h3>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">2h</p>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">We recently recieved your application</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConversationList;
