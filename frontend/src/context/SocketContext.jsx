import { createContext, useContext } from "react";
import { io } from "socket.io-client";
import { useAuthContext } from "../context/AuthContext";
import { useEffect, useState } from "react";

export const SocketContext = createContext();

export const SocketContextProvider = ({children}) => {
    const [socket, setSocket] = useState(null);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const {authUser} = useAuthContext();

    useEffect(() => {
        if (authUser) {
           const socket = io(
    import.meta.env.VITE_API_URL.replace("/api", ""),
    {
        query: {
            userId: authUser._id
        },
        withCredentials: true,
    }
);

            setSocket(socket);

            socket.on("getOnlineUsers", (users) => {
                setOnlineUsers(users);
            });

            return () => socket.close();
        } else {
            if (socket) {
                socket.close();
                setSocket(null);
            }
        }
    },[authUser]);

    return (
        <SocketContext.Provider value={{socket, onlineUsers}}>
            {children}
        </SocketContext.Provider>
    );
};

export const useSocketContext = () => {
	return useContext(SocketContext);
};
