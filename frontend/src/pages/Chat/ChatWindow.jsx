import { useEffect, useState } from 'react';
import io from 'socket.io-client';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ChatWindow = ({ onBack }) => {



  const messages2 = [
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
    }
  ];

  const userID = useParams();
  const selectedUser = (userID.sendId);
  console.log("selectUSer", selectedUser);
  const currentUser = useSelector((state) => state.user.userDetails);
  console.log("currentUser", currentUser);
  const [socket, setSocket] = useState(null);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (selectedUser) {
      // Fetch chat history when selectedUser changes
      axios.get(`/api/chat / history/${currentUser._id}/${selectedUser._id}`)
        .then(response => {
          setMessages(response.data);
        })
        .catch(error => {
          console.error('Error fetching chat history:', error);
        });

      const newSocket = io('http://localhost:4000');
      setSocket(newSocket);

      newSocket.emit('join', currentUser._id);

      newSocket.on('receiveMessage', (message) => {
        console.log('New message received:', message);
        setMessages(prevMessages => [...prevMessages, message]);
      });

      return () => {
        newSocket.disconnect();
      };
    }
  }, [selectedUser, currentUser]);

  const sendMessage = (message) => {
    if (socket) {
      const messageData = {
        sender: currentUser._id,
        receiver: selectedUser._id,
        message: message
      };
      socket.emit('sendMessage', messageData);
      setMessages(prevMessages => [...prevMessages, messageData]);
    }
  };

  return (
    <>
      <div className="flex flex-1 flex-col h-full sticky">
        {/* Chat header */}
        <div className="p-4 bg-gray-100 dark:bg-gray-700 flex items-center sticky top-0 shadow rounded-t-lg z-10">
          <button className="sm:hidden mr-4 text-gray-600 dark:text-gray-300" onClick={onBack}>
            Back
          </button>
          <div className="flex items-center flex-1">
            <div className="w-10 h-10 bg-gray-300 dark:bg-gray-600 rounded-full mr-4"></div>
            <div>
              <h3 className="font-bold text-gray-700 dark:text-gray-300">
                {}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Active {} ago
              </p>
            </div>
          </div>
        </div>

        {/* Chat box */}
        <div className="flex-1 overflow-y-auto bg-gray-50 dark:bg-gray-900">
          <div className="p-4 space-y-4">
            {messages2.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.isSent ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`p-4 rounded-lg max-w-xs ${message.isSent
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
        <div className="p-4 bg-gray-100 sticky bottom-0 dark:bg-gray-700 flex items-center rounded-b-lg z-10">
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
    </>
  );
};

export default ChatWindow;
