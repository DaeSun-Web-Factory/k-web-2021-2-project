//import react 
import React from 'react';
import { useState } from 'react';

// import AWS
import Amplify, { Auth } from 'aws-amplify';
import awsconfig from '../../aws-exports';

//import material
import { Button, TextField } from '@material-ui/core';

//import routers
import { useHistory } from 'react-router-dom';

Amplify.configure(awsconfig);


const SignIn = ({onSignIn}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const signIn = async () => {
        try {
            const user = await Auth.signIn(username, password);
            history.push('/');
            onSignIn();

            console.log("user", user);
        } 
        catch (error) {
            console.log('sign in error', error)
        }
    }

    return (
        <div className="signin">
            <TextField
                id="username"
                label="Username"
                value={username}
                onChange={e => setUsername(e.target.value)}
            />

            <TextField
                id="password"
                label="Password"
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
            />

            <Button id="signInButton" color="primary" onClick={signIn}>
                Sign In
            </Button>
        </div>
            
    )
}

export default SignIn;