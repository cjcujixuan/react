import React, { useState, useEffect } from 'react';

const EffectLoadData = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((data) => {
                setData(data);
            });
    }, []);
    return (<ul>{data ? (data.map(post => (<li key={post.id}><h3>{post.name}</h3>{JSON.stringify(post)}</li>)
    )) : (<p>資料載入中...</p>)}</ul>
    );
};






















export default EffectLoadData;