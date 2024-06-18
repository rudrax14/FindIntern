import React, { useState } from "react";
import Navbar from "../../components/common/Navbar";
import ChatWindow from "../../components/Chat Compo/ChatWindow";
import ConversationList from "../../components/Chat Compo/ConversationList";

function Chat() {
  const [selectedConversation, setSelectedConversation] = useState(null);

  return (
    <>
      <Navbar />
      <div className="container sm:p-4 mx-auto flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 px-4 h-[calc(100vh-64px)]">
        <div className={`sm:w-1/3 ${selectedConversation ? "hidden sm:flex" : "flex"} w-full`}>
          <ConversationList onSelectConversation={setSelectedConversation} />
        </div>
        <div className={`sm:w-2/3 ${selectedConversation ? "flex" : "hidden sm:flex"} w-full relative`}>
          {selectedConversation ? (
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
