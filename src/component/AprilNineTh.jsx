import React, { useState } from 'react';

const AddTodo = () => {
    const [id, setId] = useState('');
    const [username, setUsername] = useState('');
    const [number, setNumber] = useState('');
    const [dataAll, setDataAll] = useState([]);

    const HandleReset = () => {
        setId('');
        setUsername('');
        setNumber('');
    };

    const HandleSubmit = (e) => {
        e.preventDefault();
        if (!id.trim() || !username.trim() || !number.trim()) {
            return; // 如果任何一個欄位為空，則停止提交
        }
        const newData = { id, username, number };
        setDataAll([...dataAll, newData]);
        HandleReset(); // 提交後重置欄位
    };

    return (
        <>
            <div>
                <span>輸入id:</span><input value={id} onChange={(e) => setId(e.target.value)}/>{!id && <span>...id未填寫...</span>}<br />
                <span>輸入username:</span><input value={username} onChange={(e) => setUsername(e.target.value)}/>{!username && <span>...username未填寫...</span>}<br />
                <span>輸入number:</span><input value={number} onChange={(e) => setNumber(e.target.value)}/>{!number && <span>...number未填寫...</span>}
                <p></p>
                <button onClick={HandleReset}>RESET</button>
                <button onClick={HandleSubmit}>SUBMIT</button>
            </div>
            
            <div>
                {dataAll.map((item, index) => (
                    <p key={index}>id={item.id}   username={item.username}   number={item.number}</p>
                ))}
            </div>
        </>
    );
}

export default AddTodo;
