import React, { useState } from 'react';

const Login = () => {

    const [passwordIn, setPasswordIn] = useState('');
    const [logStatus, setLogStatus] = useState(false);

    const handleSubmit = () => {
        if (logStatus === false && passwordIn !== '') {
            setLogStatus(true);
        } else {
            setLogStatus(false);
            setPasswordIn('');
        }
    };

    return (
        <>
            <input type='password' value={passwordIn} onChange={(e) => setPasswordIn(e.target.value)}/>
            <button onClick={handleSubmit}>{logStatus ? 'logout' : 'login'}</button>
            <p>{logStatus ? `welcome, ${passwordIn}` : ''}</p>
        </>
    );
}

export default Login;
