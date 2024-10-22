import React, { createContext, useContext, useState } from 'react';

// Create the AuthContext
export const AuthContext = createContext();

// AuthProvider component
export default function AuthProvider({ children }) {
  // Retrieve the initial auth user from localStorage
  const initialAuthUser = localStorage.getItem("Users");

  // Initialize the authUser state
  const [authUser, setAuthUser] = useState(
    initialAuthUser ? JSON.parse(initialAuthUser) : undefined
  );

  // Provide authUser and setAuthUser to child components
  return (
    <AuthContext.Provider value={[authUser, setAuthUser]}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook to access the auth context
export const useAuth = () => useContext(AuthContext);
