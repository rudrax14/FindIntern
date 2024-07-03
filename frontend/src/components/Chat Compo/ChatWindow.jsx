import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import io from "socket.io-client";
import { timeAgo } from "../../utils/TimeTracker";

const ChatWindow = ({ conversation, onBack }) => {
  const { userType, receiverId } = useParams();
  const selectedUserId = receiverId;
  const currentUserId = useSelector((state) => state.user.userDetails._id);
  const [socket, setSocket] = useState(null);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const chatWindowRef = useRef(null);

  useEffect(() => {
    if (selectedUserId) {
      const receiverRole = userType === "jobseeker" ? "recruiter" : "jobseeker";
      axios
        .get(
          `${import.meta.env.VITE_BACKEND_URL}/chat/history?senderType=${userType}&senderId=${currentUserId}&receiverType=${receiverRole}&receiverId=${selectedUserId}`
        )
        .then((response) => {
          console.log(response.data);
          setMessages(response.data);
          scrollToBottom();
        })
        .catch((error) => console.error("Error fetching chat history:", error));

      const newSocket = io(import.meta.env.VITE_SOCKET_URL || "http://localhost:5000");
      console.log(newSocket);
      setSocket(newSocket);
      const senderDetails = { userType, currentUserId };
      newSocket.emit("join", senderDetails);

      newSocket.on("receiveMessage", (message) => {
        setMessages((prevMessages) => [...prevMessages, message]);
        scrollToBottom();
      });

      return () => {
        newSocket.disconnect();
      };
    }
  }, [selectedUserId, currentUserId]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    if (chatWindowRef.current) {
      chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
    }
  };

  const sendMessage = (messageText) => {
    // console.log(messageText);
    if (socket) {
      const messageData = {
        sender: currentUserId,
        receiver: selectedUserId,
        message: messageText,
        timestamp: new Date().toISOString(), // Use ISO string for proper timestamp
        role: userType,
      };
      if (messageText.trim() === "") return;
      socket.emit("sendMessage", messageData);
      setMessages((prevMessages) => [...prevMessages, messageData]);
      setMessage("");
      scrollToBottom();
    }
  };

  return (
    <div className="flex flex-1 flex-col h-full">
      <div className="p-4 bg-gray-100 dark:bg-gray-700 flex items-center sticky top-0 shadow rounded-t-lg z-10">
        <button
          className="sm:hidden mr-4 text-gray-600 dark:text-gray-300"
          onClick={onBack}
        >
          Back
        </button>
        <div className="flex items-center flex-1">
          <img
            src={conversation.profileImage || defaultAvatar}
            alt="avatar"
            className="w-10 h-10 rounded-full mr-4"
          />
          <div>
            <h3 className="font-bold text-gray-700 dark:text-gray-300">
              {conversation.name}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Active {conversation.time} ago
            </p>
          </div>
        </div>
      </div>

      <div className="flex-1 md:overflow-y-auto  bg-gray-50 dark:bg-gray-900" ref={chatWindowRef}>
        <div className="p-4 space-y-4">
          {messages.length == 0 ? (
            <div className="text-white text-center ">No message here</div>
          ) : (
            messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.receiver.id === currentUserId ? "justify-start" : "justify-end"}`}
              >
                <div
                  className={`p-4 rounded-lg max-w-xs ${message.receiver.id === currentUserId ? "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300" : "bg-blue-500 text-white"}`}
                >
                  <p>{message.message}</p>
                  <p className="text-sm text-gray-200 dark:text-gray-300 mt-2 text-end">
                    {timeAgo(message.timestamp)}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      <div className="p-4 bg-gray-100 fixed bottom-0 w-[92%] md:sticky md:w-auto md:bottom-auto dark:bg-gray-700 flex items-center rounded-b-lg z-10">
        <input
          type="text"
          placeholder="Type your message..."
          value={message}
          className="flex-1 p-2 rounded-l-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 placeholder-gray-500 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              sendMessage(message);
            }
          }}
        />
        <button
          className="bg-blue-500 text-white p-2 rounded-r-lg hover:bg-blue-600 transition duration-200"
          onClick={() => {
            sendMessage(message);
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;