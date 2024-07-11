import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import io from "socket.io-client";
import { timeAgo } from "../../utils/TimeTracker";
const defaultAvatar = "https://via.placeholder.com/40";
import { IoMdArrowRoundBack } from "react-icons/io";
const ChatWindow = ({ conversation, onBack }) => {
  const { userType, receiverId } = useParams();
  const selectedUserId = receiverId;
  const currentUserId = useSelector((state) => state.user.userDetails._id);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const chatWindowRef = useRef(null);
  const socketRef = useRef(null);

  const generateRoomId = (userId1, userId2) => {
    return [userId1, userId2].sort().join("_");
  };

  useEffect(() => {
    const fetchChatHistory = async () => {
      const receiverRole = userType === "jobseeker" ? "recruiter" : "jobseeker";
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/chat/history?senderType=${userType}&senderId=${currentUserId}&receiverType=${receiverRole}&receiverId=${selectedUserId}`
        );
        setMessages(response.data);
        scrollToBottom();
      } catch (error) {
        console.error("Error fetching chat history:", error);
      }
    };

    if (selectedUserId) {
      fetchChatHistory();

      if (!socketRef.current) {
        socketRef.current = io(import.meta.env.VITE_SOCKET_URL || "http://localhost:5000");
      }

      const socket = socketRef.current;
      const roomId = generateRoomId(currentUserId, selectedUserId);
      socket.emit("join", { roomId });

      socket.on("receiveMessage", (message) => {
        setMessages((prevMessages) => [...prevMessages, message]);
        scrollToBottom();
      });

      return () => {
        socket.off("receiveMessage");
        socket.emit("leave", { roomId });
      };
    }
  }, [selectedUserId, userType, currentUserId]);

  useEffect(() => {
    return () => {
      if (socketRef.current) {
        socketRef.current.disconnect();
        socketRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    if (chatWindowRef.current) {
      chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
    }
  };

  const sendMessage = (messageText) => {
    if (socketRef.current && messageText.trim() !== "") {
      const messageData = {
        sender: currentUserId,
        receiver: selectedUserId,
        message: messageText,
        timestamp: new Date().toISOString(),
        role: userType,
      };
      socketRef.current.emit("sendMessage", messageData);
      // setMessages((prevMessages) => [...prevMessages, messageData]);
      setMessage("");
      scrollToBottom();
    }
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    sendMessage(message);
  };

  return (
    <div className="flex flex-1 flex-col h-full">
      <div className="p-4 bg-gray-100 dark:bg-gray-700 flex items-center sticky top-14 shadow rounded-t-lg z-10">
        <button
          className="lg:hidden mr-4 text-gray-600 dark:text-gray-300"
          onClick={onBack}
        >
          <IoMdArrowRoundBack />
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

      <div className="flex-1 sm:overflow-y-auto bg-gray-50 dark:bg-gray-900" ref={chatWindowRef}>
        <div className="p-4 space-y-4">
          {messages.length === 0 ? (
            <div className="text-white text-center overflow-y-clip h-screen mt-10 lg:mt-0">No message here</div>
          ) : (
            messages.map((message, index) => (
              <div
                key={index}
                className={`flex mt-10 lg:mt-0 ${message.receiver.id === currentUserId ? "justify-start" : "justify-end"}`}
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
      {/* p-4 bg-gray-100 dark:bg-gray-700 flex items-center sticky top-0 shadow rounded-t-lg z-10 */}
      <div className="w-full sticky bottom-0">
        <form className="p-4 bg-gray-100  md:sticky md:w-auto md:bottom-auto dark:bg-gray-700 flex items-center rounded-b-lg z-10" onSubmit={handleSendMessage}>
          <input
            type="text"
            placeholder="Type your message..."
            value={message}
            className="flex-1 p-2 rounded-l-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 placeholder-gray-500 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-r-lg hover:bg-blue-600 transition duration-200"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatWindow;
