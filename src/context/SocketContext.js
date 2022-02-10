import React from "react";
import { createContext } from "react";
import { useSocket } from "../hooks/useSocket";

export const SocketContext = createContext();

export const SocketProvider = ({ children }) => {
  const { socket, online } = useSocket(
    process.env.REACT_APP_ENV_MODE === "development"
      ? process.env.REACT_APP_DOMAIN_DEV
      : process.env.REACT_APP_DOMAIN_PROD
  );
  return (
    <SocketContext.Provider value={{ socket, online }}>
      {children}
    </SocketContext.Provider>
  );
};
