import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import MessageContainer from "../../components/messages/MessageContainer";

import useConversation from "../../zustand/useConversation";

const HomePage = () => {
  const { selectedConversation } = useConversation();

  return (
    <div className="flex h-[80vh] w-full md:w-auto sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
      <div
        className={`w-full md:w-auto ${
          selectedConversation ? "hidden" : "block"
        } md:block`}
      >
        <Sidebar />
      </div>
      <div className={`${!selectedConversation ? "hidden" : "block"} md:block h-full w-full`}>
        <MessageContainer />
      </div>
    </div>
  );
};

export default HomePage;
