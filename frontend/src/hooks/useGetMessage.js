import React, { useEffect, useState } from 'react'
import useConversation from '../zustand/useConversation';
import { toast } from 'react-hot-toast';

const useGetMessage = () => {
  const [loading, setLoading] = useState(false);

  const {messages, setMessages, selectedConversation, setSelectedConversation} = useConversation();

  useEffect(() => {
    const getMessages = async () => {
      try {
        setLoading(true);
      const res = await fetch(
  `${import.meta.env.VITE_API_URL}/messages/${selectedConversation._id}`,
  {
    credentials: "include",
  }
);
        const data = await res.json();
        if (data.error) {
          throw new Error(data.error);
        }
        setMessages(data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    }
    if (selectedConversation?._id) getMessages();
    
  }, [selectedConversation?._id, setMessages]);

  return {loading, messages}
}

export default useGetMessage
