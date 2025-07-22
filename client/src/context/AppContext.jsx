import { createContext, useContext, useState } from "react";
import {useNavigate} from 'react-router-dom';

export const AppContext  = createContext();

//Provider function
export const AppContextProvider = ({children})=>{

    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [seller, setIsSeller] = useState(false);

    const value = {navigate, user, setUser, seller, setIsSeller}
    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}

export const useAppContext = useContext(AppContext);