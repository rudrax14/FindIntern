import React, { useState } from "react";
import ChatWindow from "./ChatWindow";
import ConversationList from "./ConversationList";
import Navbar from "../../components/common/Navbar";

function Chat() {
  const [selectedConversation, setSelectedConversation] = useState(null);

  return (
    <>
      <Navbar />
      <div className="container sm:p-4 mx-auto flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 px-4 h-[calc(100vh-64px)]">
        <div className={`sm:flex ${selectedConversation ? 'hidden' : 'flex'} sm:flex w-full sm:w-1/3`}>
          <ConversationList onSelectConversation={setSelectedConversation} />
        </div>
        <div className={`sm:flex ${selectedConversation ? 'flex' : 'hidden'} sm:w-2/3 w-full relative`}>
          {selectedConversation && (
            <ChatWindow
              conversation={selectedConversation}
              onBack={() => setSelectedConversation(null)}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default Chat;
