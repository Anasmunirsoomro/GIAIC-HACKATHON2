import React, { createContext, useState, useContext } from 'react';

// Create the AdminContext
const AdminContext = createContext();

// Create a custom hook for consuming the AdminContext
export const useAdmin = () => {
  return useContext(AdminContext);
};

// AdminProvider Component
const AdminProvider = ({ children }) => {
  // State to manage admin-related data
  const [isAdmin, setIsAdmin] = useState(false); // Example: whether the user is an admin
  const [adminData, setAdminData] = useState({}); // Example: additional admin data

  // Function to log in as admin
  const loginAsAdmin = (data) => {
    setIsAdmin(true);
    setAdminData(data);
  };

  // Function to log out as admin
  const logoutAsAdmin = () => {
    setIsAdmin(false);
    setAdminData({});
  };

  // Context value to be shared with the application
  const value = {
    isAdmin,
    adminData,
    loginAsAdmin,
    logoutAsAdmin,
  };

 
}
