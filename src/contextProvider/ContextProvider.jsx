import React, { createContext, useEffect, useState } from 'react';

export const userAuth = createContext()

const ContextProvider = ({ children }) => {
    const [user, setUser] = useState('')
    const [loader, setLoader] = useState(true);
    console.log(user, loader, '8')
    const token = localStorage.getItem("token")
    useEffect(() => {
        if (!token) {
            return console.log('token miss')
        } else {
            fetch('http://localhost:5000/aboutme', {
                method: "POST",
                headers: {
                    authorization: `Bearer ${localStorage.getItem('token')}`
                }
            }).then(res => res.json()).then(data => {
                setUser(data);
                setLoader(false);

            })
        }
    }, [token])

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