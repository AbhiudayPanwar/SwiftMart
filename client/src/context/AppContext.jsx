import { createContext, useContext, useState } from "react";

export const AppContext  = createContext();

//Provider function
export const AppContextProvider = ({children})=>{

    const [user, setUser] = useState(null);
    const [seller, setIsSeller] = useState(false);
    const [showUserLogin, setShowUserLogin] = useState(false);


    const value = { user, setUser, seller, setIsSeller, showUserLogin, setShowUserLogin}
    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}

export const useAppContext = () => useContext(AppContext);