// import { createContext, useEffect, useState } from "react";
// import { toast } from 'react-toastify';
// import axios from "axios";

//  const AppContent = createContext();

// export const AppContextProvider = (props) => {
//   axios.defaults.withCredentials = true;
//   const backendUrl = import.meta.env.VITE_BACKEND_URL;

//   if (import.meta.env.DEV) {
//     console.log("Backend URL is:", backendUrl);
//   }

//   const [isLoggedin, setIsLoggedin] = useState(false);
//   const [userData, setUserData] = useState({});
  

//   const getAuthState = async () => {
//     try {
//       const { data } = await axios.get(backendUrl + '/api/auth/is-auth');
//       if (data.success) {
//         setIsLoggedin(true);
//         await getUserData();
//       }
//     } catch (error) {
//       toast.error(error?.response?.data?.message || error.message);
//     }
//   };

//   const getUserData = async () => {
//     try {
//       const { data } = await axios.get(backendUrl + "/api/user/data");
//       if (data.success) {
//         setUserData(data.userData);
//       } else {
//         toast.error(data.message);
//       }
//     } catch (error) {
//       toast.error(error?.response?.data?.message || error.message);
//     }
//   };

//   useEffect(() => {
//     getAuthState();
//   }, []);

//   const value = {
//     backendUrl,
//     isLoggedin, setIsLoggedin,
//     userData, setUserData,
//     getUserData
//   };

//   return (
//     <AppContent.Provider value={value}>
//       {props.children}
//     </AppContent.Provider>
//   );
// };

import { createContext, useContext, useEffect, useState } from "react";
import { toast } from 'react-toastify';
import axios from "axios";

// ✅ Set axios config globally (once)
axios.defaults.withCredentials = true;

// ✅ Create context (not exported directly to avoid HMR issue)
const AppContent = createContext();

// ✅ Custom hook for using context
export const useAppContext = () => useContext(AppContent);

export const AppContextProvider = ({ children }) => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  if (import.meta.env.DEV) {
    console.log("Backend URL is:", backendUrl);
  }

  const [isLoggedin, setIsLoggedin] = useState(false);
  const [userData, setUserData] = useState(false);

  const getAuthState = async () => {
    try {
      const { data } = await axios.get(`${backendUrl}/api/auth/is-auth`, {
        withCredentials: true
      });
      if (data?.success) {
        setIsLoggedin(true);
        await getUserData();
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message);
    }
  };

  const getUserData = async () => {
    try {
      const { data } = await axios.get(backendUrl + "/api/user/data");
      if (data?.success) {
        setUserData(data.userData);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message);
    }
  };

  useEffect(() => {
    getAuthState();
  }, []);

  const value = {
    backendUrl,
    isLoggedin, setIsLoggedin,
    userData, setUserData,
    getUserData
  };

  return (
    <AppContent.Provider value={value}>
      {children}
    </AppContent.Provider>
  );
};
