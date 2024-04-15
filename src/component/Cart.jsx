import React, { useState } from 'react';

const Cart = () => {
    const [title, setTitle] = useState('');
    const [quantity, setQuantity] = useState(0);
    const [productList, setProductList] = useState([]);
    const [total, setTotal] = useState(0);

    const handleSubmit = () => {
        const newData = { title, quantity: parseInt(quantity) };
        setProductList([...productList, newData]);
        setTotal(total + parseInt(quantity));
        setTitle('');
        setQuantity(0);
    };

    return (
        <>
            <div>
                <input type='text' placeholder='購買品項名稱' value={title} onChange={(e) => setTitle(e.target.value)} />
                <input type='number' value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                <button onClick={handleSubmit}>加入「購物車」</button>
                <ul>
                    {productList.map((item, index) => (
                        <li key={index}>{item.title} - 數量: {item.quantity}</li>
                    ))}
                </ul>
                <hr />
                <h1>購物車內容總覽</h1>
                <p>不同品項數目: {productList.length}</p>
                <p>商品的總數量: {total}</p>
            </div>
        </>
    );
}

export default Cart;
