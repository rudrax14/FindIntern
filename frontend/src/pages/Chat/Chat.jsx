import React, { useState } from "react";
import ChatWindow from "./ChatWindow";
import ConversationList from "./ConversationList";
import Navbar from "../../components/common/Navbar";
import { useParams } from "react-router-dom";

function Chat() {
  const param = useParams();
  console.log(param);

  const [selectedConversation, setSelectedConversation] = useState(null);

  return (
    <>
      <Navbar />
      <div className="container sm:p-4 mx-auto flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 px-4 h-[calc(100vh-64px)]">
        <div
          className={`sm:flex ${selectedConversation ? "hidden" : "flex"} sm:flex w-full sm:w-1/3`}
        >
          <ConversationList onSelectConversation={setSelectedConversation} />
        </div>
        <div
          className={`sm:flex ${selectedConversation ? "flex" : "hidden"} sm:w-2/3 w-full relative`}
        >
          {!selectedConversation ? (
            <ChatWindow
              conversation={selectedConversation}
              onBack={() => setSelectedConversation(null)}
            />
          ) : (
            <div className="flex text-2xl h-screen justify-center items-center w-full">
              Select a conversation to start chatting
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Chat;

// import React, { useEffect, useState } from 'react';
// import io from 'socket.io-client';
// import axios from 'axios';

// const Chat = ({ selectedUser, currentUser }) => {
//   const [socket, setSocket] = useState(null);
//   const [messages, setMessages] = useState([]);

//   useEffect(() => {
//     if (selectedUser) {
//       // Fetch chat history when selectedUser changes
//       axios.get(/api/chat/history/${currentUser._id}/${selectedUser._id})
//         .then(response => {
//           setMessages(response.data);
//         })
//         .catch(error => {
//           console.error('Error fetching chat history:', error);
//         });

//       const newSocket = io('http://localhost:4000');
//       setSocket(newSocket);

//       newSocket.emit('join', currentUser._id);

//       newSocket.on('receiveMessage', (message) => {
//         console.log('New message received:', message);
//         setMessages(prevMessages => [...prevMessages, message]);
//       });

//       return () => {
//         newSocket.disconnect();
//       };
//     }
//   }, [selectedUser, currentUser]);
//
//   const sendMessage = (message) => {
//     if (socket) {
//       const messageData = {
//         sender: currentUser._id,
//         receiver: selectedUser._id,
//         message: message
//       };
//       socket.emit('sendMessage', messageData);
//       setMessages(prevMessages => [...prevMessages, messageData]);
//     }
//   };

//   return (
//     <div>
//       <h2>Chat with {selectedUser.name}</h2>
//       <div>
//         {messages.map((msg, index) => (
//           <div key={index}>
//             <strong>{msg.sender === currentUser._id ? 'You' : selectedUser.name}:</strong> {msg.message}
//           </div>
//         ))}
//       </div>
//       {/* Add your chat UI here */}
//       <button onClick={() => sendMessage('Hello!')}>Send Message</button>
//     </div>
//   );
// };

// export default Chat;
