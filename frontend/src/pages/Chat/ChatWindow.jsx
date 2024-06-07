import React from "react";

const messages = [
  {
    sender: "Sofia Davis",
    text: "Hey hope you're doing well! We should catch up sometime soon. 🙏",
    time: "2h",
    isSent: false,
  },
  {
    sender: "You",
    text: "Sure! I'm free this weekend if you want to grab a coffee.",
    time: "2h",
    isSent: true,
  },
  {
    sender: "Sofia Davis",
    text: "Sounds good! Let's meet at the Starbucks on 5th Ave.",
    time: "1h",
    isSent: false,
  },
  {
    sender: "You",
    text: "I'll message you on Saturday.",
    time: "1h",
    isSent: true,
  },
  {
    sender: "You",
    text: "I'll message you on Saturday.",
    time: "1h",
    isSent: true,
  },
  {
    sender: "You",
    text: "I'll message you on Saturday.",
    time: "1h",
    isSent: true,
  },
  {
    sender: "You",
    text: "I'll message you on Saturday.",
    time: "1h",
    isSent: true,
  },
  {
    sender: "You",
    text: "I'll message you on Saturday.",
    time: "1h",
    isSent: true,
  },
  // Add more messages here if needed
];

const ChatWindow = () => {
  return (
    <div className="flex flex-1 flex-col h-screen">
      {/* Chat header */}
      <div className="p-4 bg-gray-100 dark:bg-gray-700 flex items-center rounded-t-lg z-10">
        <div className="flex items-center flex-1">
          <div className="w-10 h-10 bg-gray-300 dark:bg-gray-600 rounded-full mr-4"></div>
          <div>
            <h3 className="font-bold text-gray-700 dark:text-gray-300">
              Sofia Davis
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Active 2h ago
            </p>
          </div>
        </div>
      </div>

      {/* Chat box */}
      <div className="flex-1 overflow-y-auto bg-gray-50 dark:bg-gray-900">
        <div className="p-4 space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.isSent ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`p-4 rounded-lg max-w-xs ${
                  message.isSent
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                }`}
              >
                <p>{message.text}</p>
                <p className="text-sm text-gray-400 dark:text-gray-500 mt-2">
                  {message.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat input */}
      <div className="p-4 bg-gray-100 dark:bg-gray-700 flex items-center  rounded-b-lg z-10 mb-20">
        <input
          type="text"
          placeholder="Type your message..."
          className="flex-1 p-2 rounded-l-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 placeholder-gray-500 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="bg-blue-500 text-white p-2 rounded-r-lg hover:bg-blue-600 transition duration-200">
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;
