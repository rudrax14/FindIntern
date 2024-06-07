import React from "react";
import ChatWindow from "./ChatWindow";
import ConversationList from "./ConversationList";
import Navbar from "../../components/common/Navbar";

function Chat() {
  return (
    <>
      <Navbar />
      <div className="container  mx-auto flex flex-col sm:flex-row mt-4 space-y-4 sm:space-y-0 sm:space-x-4 px-4">
        <ConversationList />
        <ChatWindow />
      </div>
    </>
  );
}

export default Chat;
