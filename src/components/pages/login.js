import React from 'react';
import { Redirect } from 'react-router-dom';


const LoginPage = ({ isLogin, onLogin }) => {

    if (isLogin) {
        return <Redirect to="/secret/" />
    }

    return (
        <div className="jumbotron">
            <p>Login to see the secret page {':)'}</p>
            <button
                onClick={onLogin} 
                className="btn btn-small btn-primary">
                Login
            </button>
        </div>
    );
}

export default LoginPage;