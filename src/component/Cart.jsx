import React, { useState } from 'react';

const Cart = () => {
    const [title, setTitle] = useState('');
    const [quantity, setQuantity] = useState(0);
    const [productList, setProductList] = useState([]);
    const [total, setTotal] = useState(0);

    const HandleSubmit = () => {
        const newData = { title, quantity: parseInt(quantity) };
        setProductList([...productList, newData]);
        setTotal(total + parseInt(quantity));
        setTitle('');
        setQuantity(0);
    };

    const [filter, setFilter] = useState('');
    const handleFilter = (e) => setFilter(e.target.value);
    const filteredItems = productList.filter(item =>
        item.title.toLowerCase().includes(filter.toLowerCase()));

    return (
        <>
            <div>
                <input type='text' placeholder='購買品項名稱' value={title} onChange={(e) => setTitle(e.target.value)} />
                <input type='number' value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                <button onClick={HandleSubmit}>加入「購物車」</button>
                <ul>
                    {productList.map((item, index) => (
                        <li key={index}>{item.title} - 數量: {item.quantity}</li>
                    ))}
                </ul>
                <hr />
                <h1>購物車內容總覽</h1>
                <p>不同品項數目: {productList.length}</p>
                <p>商品的總數量: {total}</p>
                <hr />
                <input type='text' value={filter} onChange={handleFilter} />
                <h1>過濾</h1>
                <ul>
                    {filteredItems.map(item => (<li key={item.title}>{item.title} - 數量: {item.quantity}</li>))}
                </ul>
            </div>
        </>
    );
}

export default Cart;
