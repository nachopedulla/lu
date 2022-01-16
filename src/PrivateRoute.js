import React from "react";
import { Route } from "react-router-dom";
import LoginForm from './modules/Login';
import { useAuth } from './context/AuthContext';

const PrivateRoute = ({ component: Component, authorities, params, ...rest }) => {
    const auth = useAuth();

    return (
      (auth.logged()) ? (
        <Route
            key={new Date()}
            {...rest}
            render={ props => <Component params={params} {...props} /> }
        /> 
      ) : <LoginForm/>
    );    
}

export default React.memo(PrivateRoute);