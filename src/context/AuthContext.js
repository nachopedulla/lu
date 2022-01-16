import React from 'react';
import { LocalStorageHelper } from '../helpers/LocalStorageHelper';

const AuthContext = React.createContext();

const AuthProvider = (props) => {

    let localStorageHelper = new LocalStorageHelper();

    const login = (password) => {
        const compare = String.fromCharCode(109, 111, 110, 111, 110, 97);
        if (password === compare) {
            localStorageHelper.setItem('logged', true);
            window.location.reload();
            return true;
        }
        return false;
    }

    const logged = () => {
        const isLogged = localStorageHelper.getItem('logged');
        return (isLogged === null) ? false : isLogged;
    }

    const logout = () => { 
        localStorageHelper.setItem('logged', false);
        window.location.reload();
    }

    return (
        <AuthContext.Provider value={{login, logout, logged}} {...props}/>
    )
}

const useAuth = () => React.useContext(AuthContext);


export { AuthProvider, useAuth };