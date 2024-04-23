import React, { useState, useEffect } from 'react';

const CardTest = () => {
    const myStyle = {
        color: 'purple',
        width: '24%',
        display: 'inline-block',
        border: '3px solid blue',
        margin: '10px'
    };

    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((data) => {
                setData(data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, []);

    return (
        <ul>
            {data ? (
                data.map(user => (
                    <li key={user.id} style={myStyle}>
                        <h2>{user.name}</h2>
                        <h3>{user.phone}</h3>
                        <h5>{user.email}</h5>
                        <p>{user.website}</p>
                    </li>
                ))
            ) : (
                <p>資料載入中...</p>
            )}
        </ul>
    );
}

export default CardTest;
