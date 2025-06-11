import React, { createContext, useState } from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [uploading, setUploading] = useState(false);

  const handleSubmit = (file) => {
    console.log(file);
  };
  const authInfo = { uploading, setUploading, handleSubmit };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
