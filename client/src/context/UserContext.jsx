import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import api from "../utils/axios";

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await api.get("/users/profile", {
          withCredentials: true,
        });
        setUser(response.data.data);
        setIsAuthenticated(true);
      } catch (error) {
        console.error("Error fetching user data: ", error);
        setIsAuthenticated(false);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);
  return (
    <UserContext.Provider value={{ user, isAuthenticated, loading }}>
      {children}
    </UserContext.Provider>
  );
};
