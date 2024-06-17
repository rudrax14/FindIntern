import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from "axios";
import { io } from "socket.io-client";

const ChatWindow = ({ conversation, onBack }) => {
  const { sendId } = useParams();
  const selectedUserId = sendId || conversation.id;
  const currentUserId = useSelector((state) => state.user.userDetails._id);
  const [socket, setSocket] = useState(null);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (selectedUserId) {
      axios.get(`/api/chat/history/${currentUserId}/${selectedUserId}`)
        .then(response => setMessages(response.data))
        .catch(error => console.error('Error fetching chat history:', error));

      const newSocket = io('http://localhost:4000');
      setSocket(newSocket);

      newSocket.emit('join', currentUserId);

      newSocket.on('receiveMessage', (message) => {
        setMessages(prevMessages => [...prevMessages, message]);
      });

      return () => {
        newSocket.disconnect();
      };
    }
  }, [selectedUserId, currentUserId]);

  const sendMessage = (messageText) => {
    if (socket && messageText.trim()) {
      const messageData = {
        sender: currentUserId,
        receiver: selectedUserId,
        message: messageText
      };
      socket.emit('sendMessage', messageData);
      setMessages(prevMessages => [...prevMessages, messageData]);
    }
  };

  return (
    <div className="flex flex-1 flex-col h-full sticky">
      <div className="p-4 bg-gray-100 dark:bg-gray-700 flex items-center sticky top-0 shadow rounded-t-lg z-10">
        <button className="sm:hidden mr-4 text-gray-600 dark:text-gray-300" onClick={onBack}>
          Back
        </button>
        <div className="flex items-center flex-1">
          <div className="w-10 h-10 bg-gray-300 dark:bg-gray-600 rounded-full mr-4"></div>
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

      <div className="flex-1 overflow-y-auto bg-gray-50 dark:bg-gray-900">
        <div className="p-4 space-y-4">
          {messages.map((message, index) => (
            <div key={index} className={`flex ${message.sender === currentUserId ? "justify-end" : "justify-start"}`}>
              <div className={`p-4 rounded-lg max-w-xs ${message.sender === currentUserId ? "bg-blue-500 text-white" : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"}`}>
                <p>{message.message}</p>
                <p className="text-sm text-gray-400 dark:text-gray-500 mt-2">
                  {message.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="p-4 bg-gray-100 sticky bottom-0 dark:bg-gray-700 flex items-center rounded-b-lg z-10">
        <input
          type="text"
          placeholder="Type your message..."
          className="flex-1 p-2 rounded-l-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 placeholder-gray-500 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              sendMessage(e.target.value);
              e.target.value = '';
            }
          }}
        />
        <button className="bg-blue-500 text-white p-2 rounded-r-lg hover:bg-blue-600 transition duration-200" onClick={() => {
          const input = document.querySelector('input[type="text"]');
          sendMessage(input.value);
          input.value = '';
        }}>
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;
