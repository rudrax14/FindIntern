import React, { useState } from "react";

// Placeholder avatar image
const defaultAvatar = "https://via.placeholder.com/40";

const conversations = [
  {
    name: "Sofia Davis",
    message: "hey what’s going on?",
    time: "2h",
    avatar: defaultAvatar,
  },
  {
    name: "Alex Johnson",
    message: "Just finished a great book!",
    time: "45m",
    avatar: defaultAvatar,
  },
  {
    name: "Maria Gonzalez",
    message: "Excited for the weekend!",
    time: "1h",
    avatar: defaultAvatar,
  },
  {
    name: "Kevin Brown",
    message: "Who’s up for a movie night?",
    time: "3h",
    avatar: defaultAvatar,
  },
  {
    name: "Lily White",
    message: "Morning coffee is the best!",
    time: "30m",
    avatar: defaultAvatar,
  },
  {
    name: "Lily White",
    message: "Morning coffee is the best!",
    time: "30m",
    avatar: defaultAvatar,
  },
  {
    name: "Lily White",
    message: "Morning coffee is the best!",
    time: "30m",
    avatar: defaultAvatar,
  },
  {
    name: "Lily White",
    message: "Morning coffee is the best!",
    time: "30m",
    avatar: defaultAvatar,
  },
  {
    name: "Lily White",
    message: "Morning coffee is the best!",
    time: "30m",
    avatar: defaultAvatar,
  },
  {
    name: "Lily White",
    message: "Morning coffee is the best!",
    time: "30m",
    avatar: defaultAvatar,
  },
  {
    name: "Lily White",
    message: "Morning coffee is the best!",
    time: "30m",
    avatar: defaultAvatar,
  },
  {
    name: "Lily White",
    message: "Morning coffee is the best!",
    time: "30m",
    avatar: defaultAvatar,
  },
  {
    name: "Lily White",
    message: "Morning coffee is the best!",
    time: "30m",
    avatar: defaultAvatar,
  },
  {
    name: "Lily White",
    message: "Morning coffee is the best!",
    time: "30m",
    avatar: defaultAvatar,
  },
  {
    name: "Lily White",
    message: "Morning coffee is the best!",
    time: "30m",
    avatar: defaultAvatar,
  },
  {
    name: "Lily White",
    message: "Morning coffee is the best!",
    time: "30m",
    avatar: defaultAvatar,
  },
  {
    name: "Lily White",
    message: "Morning coffee is the best!",
    time: "30m",
    avatar: defaultAvatar,
  },
];

const ConversationList = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredConversations = conversations.filter((conversation) =>
    conversation.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full sm:w-1/3 rounded-lg border-r border-gray-200 dark:border-gray-700 h-screen bg-gray-50 dark:bg-gray-900 overflow-y-auto">
      <div className="p-4 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
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
      <div>
        {filteredConversations.map((conversation, index) => (
          <div
            key={index}
            className="p-4 border-b border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer transition duration-200"
          >
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <img
                  src={conversation.avatar}
                  alt={`${conversation.name}'s avatar`}
                  className="w-10 h-10 rounded-full mr-3"
                />
                <h3 className="font-semibold text-gray-800 dark:text-gray-300">
                  {conversation.name}
                </h3>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {conversation.time}
              </p>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              {conversation.message}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConversationList;
