import React, { createContext, useState } from 'react';


export const AuthContext = createContext();
const initialState = {
    isAuth: false,
    userName: '',
    password: '',
    email: '',
}
export const AuthContextProvider = ( { children } ) => {
    const [isAuth, setIsAuth] = useState( initialState );

    const loginUser = () => {

    }

    const logoutUser = () => {

    }

    return (
        <AuthContext.Provider value={{ isAuth, setIsAuth }}>
            {children}
        </AuthContext.Provider>
    )
}

