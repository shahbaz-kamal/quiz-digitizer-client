import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { createContext, useState } from "react";
import useAxiosPublic from "../Hooks/useAxiosPublic";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [uploading, setUploading] = useState(false);
  const [showJSONData, setShowJSONData] = useState(false);
  const axiosPublic = useAxiosPublic();

  // 3️⃣ Data fetching (was previously in separate provider)
  const {
    data: allQuestion,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["allData", showJSONData],
    queryFn: async () => {
      const res = await axios.get("/sampleData.json"); // Or your backend endpoint
      return res.data;
    },
    refetchOnWindowFocus: false,
    staleTime: 0,
  });

  const authInfo = {
    uploading,
    setUploading,
    allQuestion,
    isLoading,
    refetch,
    showJSONData,
    setShowJSONData,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
