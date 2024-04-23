import React, { useState, useEffect } from 'react';

const CardTest = () => {
    const myStyle = {
        color: 'purple',
        width: '24%',
        display: 'inline-block',
        border: '3px solid blue',
        margin: '10px'
    };

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState('');

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

    const handleFilter = (e) => setFilter(e.target.value);
    const filteredItems = data.filter(user => user.name.toLowerCase().includes(filter.toLowerCase()));

    return (
        <div>
            <input type='text' value={filter} onChange={handleFilter} placeholder="Filter items..." />
            <hr />
            <ul>
                {data.length > 0 ? (
                    filteredItems.map(user => (
                        <li key={user.id} className="card" style={myStyle}>
                            <h2>{user.name}</h2>
                            <h3>{user.phone}</h3>
                            <h5>{user.email}</h5>
                            <p>{user.website}</p>
                        </li>
                    ))
                ) : (
                    <p>Data loading...</p>
                )}
            </ul>
        </div>
    );
}

export default CardTest;