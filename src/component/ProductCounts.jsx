import React, { useState } from 'react';

const ProductCounts = () => {
    const [formContent, setFormContent] = useState([{ id: 0, name: "", count: 0 }]);

    const handleRemove = (id) => {
        setFormContent((prevFields) => prevFields.filter((field) => field.id !== id));
    };

    const handleAdd = () => {
        setFormContent((prevFields) => [...prevFields, { id: Date.now(), name: '', count: 0 }]);
    };

    const handleCheckOut = (e) => {
        e.preventDefault();
        console.log('表單欄位:', formContent);
    };

    const handleChangeN = (id, name) => {
        setFormContent((prevFields) => (
            prevFields.map((field) => (field.id === id ? { ...field, name } : field))
        ));
    };

    const handleChangeC = (id, count) => {
        setFormContent((prevFields) => (
            prevFields.map((field) => (field.id === id ? { ...field, count: parseInt(count, 10) } : field))
        ));
    };

    // Calculate total count
    const totalCount = formContent.reduce((total, field) => total + field.count, 0);

    return (
        <form>
            {formContent.map((field) => (
                <div key={field.id}>
                    <input type="text" value={field.name} onChange={(e) => handleChangeN(field.id, e.target.value)} />
                    <input type="number" value={field.count} onChange={(e) => handleChangeC(field.id, e.target.value)} />
                    <button type="button" onClick={() => handleRemove(field.id)}>移除</button>
                </div>
            ))}

            <hr />
            <button type='button' onClick={handleAdd}>新增</button>
            <button type='submit' onClick={handleCheckOut}>結帳</button>
            <p>Total count: {totalCount}</p>
        </form>
    );
}

export default ProductCounts;
