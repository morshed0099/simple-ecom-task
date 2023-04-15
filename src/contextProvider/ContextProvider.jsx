import React, { createContext, useEffect, useState } from 'react';
import useCardView from '../Hooks/useCardView';

export const userAuth = createContext()

const ContextProvider = ({ children }) => {
    const [user, setUser] = useState('')
    const [loader, setLoader] = useState(true);
    console.log(user, loader, '8')
    const [card,refetch]=useCardView(user)
    const token = localStorage.getItem("token")
    useEffect(() => {
        if (!token) {
            return console.log('token miss')
        } else {
            fetch('https://simple-ecom-server.vercel.app/aboutme', {
                method: "POST",
                headers: {
                    authorization: `Bearer ${localStorage.getItem('token')}`
                }
            }).then(res => res.json()).then(data => {
                setUser(data);
                setLoader(false);                
                refetch()

            })
        }
    }, [token,refetch])

    const userInfo = {
        setUser,
        user,
        loader,
        setLoader,
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