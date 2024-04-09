import React, { useState } from 'react';

const InputControl = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [data, setData] = useState([]);

    const ResetButton = () => {
        setUsername('');
        setPassword('');
    }

    const SubmitButton = () => {
        if (username !== '' && password !== '') {
            setData([...data, { username, password }]);
            setUsername('');
            setPassword('');
        }
    }

    return (
        <>
            <div>
                <span>Username</span>
                <input type='text' id='username' value={username} onChange={(e) => setUsername(e.target.value)} />
                {username === '' && <span>...名稱未填寫...</span>}
            </div>
            <div>
                <span>Password</span>
                <input type='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                {password === '' && <span>...密碼未填寫...</span>}
            </div>
            <button onClick={SubmitButton}>送出</button>
            <button onClick={ResetButton}>重置</button>
            <hr />
            <div>
                <h1>填寫的資料</h1>
                {data.map((item, index) => (
                    <p key={index}>使用者名稱:{item.username}<br />使用者密碼:{item.password}</p>

                ))}
            </div>
        </>
    );
}

export default InputControl;
