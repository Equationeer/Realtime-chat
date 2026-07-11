import React from 'react'
import { useAuthContext } from '../context/AuthContext';
import { toast } from 'react-hot-toast';
import { useState } from 'react';

const useLogout = () => {
  const [loading, setLoading] = useState(false);
  const {setAuthUser} = useAuthContext();

  const logout = async () => {
    setLoading(true);
    try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
         credentials: "include",
        body: JSON.stringify({ username, password }),
      }) 
        const data = await res.json();
        
        if (data.error) {
            throw new Error(data.error);
        }

        localStorage.removeItem('chat-user');
        setAuthUser(null);
        toast.success("Logout successful");
    } catch (error) {
        toast.error(error.message);
    } finally {
        setLoading(false);
    }
  }

  return {logout, loading};
}

export default useLogout
