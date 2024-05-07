import React, { useState, useEffect } from 'react';
import './TopNavbar.css';
//-------------------------------------------------------------//
const TopNavbar = () => {
    const [currentPage, setCurrentPage] = useState('one');

    const handleItemClick = (num) => {
        setCurrentPage(num);
    };

    return (
        <>
            <div className="top-navbar">
                <ul>
                    <li className={currentPage === 'one' ? 'active' : ''}><button onClick={() => handleItemClick('one')}>One</button></li>
                    <li className={currentPage === 'two' ? 'active' : ''}><button onClick={() => handleItemClick('two')}>Two</button></li>
                    <li className={currentPage === 'three' ? 'active' : ''}><button onClick={() => handleItemClick('three')}>Three</button></li>
                    <li className={currentPage === 'four' ? 'active' : ''}><button onClick={() => handleItemClick('four')}>Four</button></li>
                </ul>
            </div>

            <div className="page-content">
                {currentPage === 'one' && <OnePage />}
                {currentPage === 'two' && <TwoPage />}
                {currentPage === 'three' && <ThreePage />}
                {currentPage === 'four' && <FourPage />}
            </div>
        </>
    );
};
//-------------------------------------------------------------//
const OnePage = () => {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState('');

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/1/todos')
            .then((response) => response.json())
            .then((data) => {
                setData(data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, []);

    const handleFilter = (e) => setFilter(e.target.value);
    const filteredItems = data.filter(user => user.title.toLowerCase().includes(filter.toLowerCase()));

    return (
        <div>
            <input type='text' value={filter} onChange={handleFilter} placeholder="Filter items..." />
            <hr />
            <div className="card-container">
                {data.length > 0 ? (
                    filteredItems.map(user => (
                        <div key={user.userId} className={`card ${user.completed ? 'completed' : 'incomplete'}`}>
                            <h2>{user.id}</h2>
                            <h3>{user.title}</h3>
                            <h5>{user.completed ? 'Completed' : 'Incomplete'}</h5>
                        </div>
                    ))
                ) : (
                    <p>Data loading...</p>
                )}
            </div>
        </div>
    );
};
//-------------------------------------------------------------//
const TwoPage = () => {
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
                        <div key={user.id} className={'card pgTwo'}>
                            <h2>{user.name}</h2>
                            <h3>{user.phone}</h3>
                            <h5>{user.email}</h5>
                            <p>{user.website}</p>
                        </div>
                    ))
                ) : (
                    <p>Data loading...</p>
                )}
            </ul>
        </div>
    );
};
//-------------------------------------------------------------//
const ThreePage = () => {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState('');

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/1/todos')
            .then((response) => response.json())
            .then((data) => {
                setData(data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, []);

    const handleFilter = (e) => setFilter(e.target.value);
    const filteredItems = data.filter(user => user.title.toLowerCase().includes(filter.toLowerCase()));

    return (
        <div>
            <input type='text' value={filter} onChange={handleFilter} placeholder="Filter items..." />
            <hr />
            <div className="card-container">
                {data.length > 0 ? (
                    filteredItems.map(user => (
                        <div key={user.userId} className={`cardThree ${user.completed ? 'completed' : 'incomplete'}`}>
                            <h2>{user.id}</h2>
                            <img src={`https://picsum.photos/300/200?random=${user.id}`} alt="Avatar" className="imgThree" style={{ opacity: '0.85' }} />
                            <h3>{user.title}</h3>
                            <h5>{user.completed ? 'Completed' : 'Incomplete'}</h5>
                        </div>
                    ))
                ) : (
                    <p>Data loading...</p>
                )}
            </div>
        </div>
    );
};
//-------------------------------------------------------------//
const FourPage = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://ap-southeast-1.aws.data.mongodb-api.com/app/data-sjvpeue/endpoint/data/v1/action/find', {
                    method: 'READ',
                    headers: {
                        'Content-Type': 'application/json',
                        'api-key': 'ZIv91drKxnV0haz5hAvYVnN93sybQ6BddVo0PqjS6le6JyEpYlYk74wl5VBvJRxo'
                    },
                    body: JSON.stringify({
                        collection: 'twse',
                        database: 'TwStock',
                        dataSource: 'Cluster0',
                        filter: {},
                        sort: { date: 1 }
                    })
                });

                if (!response.ok) {
                    throw new Error('无法获取数据');
                }

                const responseData = await response.json();
                setData(responseData);
                setLoading(false);
            } catch (error) {
                console.error('获取数据时出错:', error.message);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>第四页</h1>
            {loading ? (
                <p>正在加载数据...</p>
            ) : (
                <div>
                    {data.map((item, index) => (
                        <div key={index} className="data-item">
                            <p><strong>_id:</strong> {item._id}</p>
                            <p><strong>日期:</strong> {item.date}</p>
                            <p><strong>股票编号:</strong> {item.stockno}</p>
                            <p><strong>股份:</strong> {item.shares}</p>
                            <p><strong>金额:</strong> {item.amount}</p>
                            <p><strong>开盘:</strong> {item.open}</p>
                            <p><strong>收盘:</strong> {item.close}</p>
                            <p><strong>最高:</strong> {item.high}</p>
                            <p><strong>最低:</strong> {item.low}</p>
                            <p><strong>差异:</strong> {item.diff}</p>
                            <p><strong>交易量:</strong> {item.turnover}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};


export default TopNavbar;


