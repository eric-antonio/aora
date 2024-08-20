import { createContext, useContext, useState, useEffect } from "react";
import { getCurrentUser } from "../lib/appwrite";


const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);

export const GlobalProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    getCurrentUser().then((res)=>{
        if(res){
            setUser(res);
            setIsLoggedIn(true);
        }else{
            setUser(null);
            setIsLoggedIn(false);
        }
    }).catch((err)=>{
        console.log(err);
    }).finally(()=>{
        setLoading(false);
    });
    
  }, []);

  return (
    <GlobalContext.Provider value={{ isLoggedIn,setIsLoggedIn,user,setUser,isLoading}}>
      {children}
    </GlobalContext.Provider>
  );
};
