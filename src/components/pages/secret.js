import React from 'react'


const SecretPage = ({ isLogin }) => {

    if (isLogin) {
        return (
            <div className="jumbotron">
                <h1>This page is full of secrets {':)'}</h1>
            </div>
        );
    }

    return (
        <div>
            <p>This is a secret page</p>
        </div>
    );
}

export default SecretPage;