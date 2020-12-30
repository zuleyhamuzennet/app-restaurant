import React, { useLayoutEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {  Route, Redirect } from 'react-router';
import axios from 'axios';

const AuthContext = React.createContext();
const AuthProvider = props => {

    const [contextState, setContextState] = useState({
        authorize: false,
        username: "",
        password: "",
    });
    const { children } = props;

    const onLogout = () => {
        setContextState({
            ...contextState,
            authorize: false,
            username: "",
            password: ""
        });
    };

    const signIn = model => {
        setContextState({
            ...contextState,
            backdrop: true,
        });
        axios.get('http://localhost:8080/login/',{
            auth:{
                username:model.username,
                password:model.password
            }
        })
            .then(res=>{
                if(res.status===200){

                    localStorage.setItem("username", model.username);
                    localStorage.setItem("password", model.password);
                    localStorage.setItem("rememberMe", true)
                    setContextState({
                        authorize: true,
                        username: localStorage.getItem("username"),
                        password: localStorage.getItem("password")
                    });
                }
                else{
                    window.alert("Username or Password wrong!!")
                    this.props.history.push("/");
                    this.setState({loadingVisible: false});
                    setContextState({
                        authorize: false,
                        username: "",
                        password: ""
                    });
                }
            })
    }

    useLayoutEffect(() => {
        const auth = localStorage.getItem("rememberMe");
        if (auth) {
            setContextState({
                authorize: true,
                username: localStorage.getItem("username"),
                password: localStorage.getItem("password")
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <AuthContext.Provider
            value={{
                authorize: localStorage.getItem("rememberMe"),
                onLogout,
                signIn,
                username: localStorage.getItem("rememberMe") ? localStorage.getItem("username"): "",
                password: localStorage.getItem("rememberMe")  ? localStorage.getItem("password"): ""
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

const AuthRoute = ({ component: Component, ...rest }) => (
    <AuthContext.Consumer>
        {({ authorize, checkAuth }) => {
            let content = '';
            if (authorize) {
                content = (
                    <Route
                        render={props => (
                            <Component {...props} />
                        )}
                        {...rest}
                    />
                );
            } else if (checkAuth && !authorize) {
                content = <Redirect to="/" />;
            }
            return content;
        }}
    </AuthContext.Consumer>
);

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
export { AuthContext, AuthProvider, AuthRoute };
