"use client";
import React, { ReactNode, useContext, useState } from 'react';
interface UserContextType {
    user: any | null;
    setUser: React.Dispatch<React.SetStateAction<any>>;
}

export const UserContext = React.createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({children}: {children: ReactNode})=>{
    const [user, setUser] = useState(null);
    return(
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
};