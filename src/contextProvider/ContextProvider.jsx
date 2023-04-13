import React, { createContext, useState } from 'react';

export const userAuth = createContext()

const ContextProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    const userInfo = {
        setUser,
        user,
    }
    return (
        <div>
         <userAuth.Provider value={userInfo}>
            {children}
         </userAuth.Provider>
        </div>
    );
};

export default ContextProvider;