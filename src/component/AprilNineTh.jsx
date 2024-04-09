import React, { useState } from 'react';

const AddTodo = () => {
    const [dataOne, setDataOne] = useState({ id: '', username: '', number: '' });
    const [dataAll, setDataAll] = useState([]);

    const HandleReset = () => {
        setDataOne({ id: '', username: '', number: '' });
    };

    const HandleSubmit = (e) => {
        e.preventDefault();
        if (!dataOne.id.trim()) {

        } else if (!dataOne.username.trim()) {

        } else if (!dataOne.number.trim()) {

        } else {
            setDataAll([...dataAll, dataOne]);
        }
        setDataOne({ id: '', username: '', number: '' });
        console.log(dataAll)
    }



    return (
        <>
            <div>
                <span>輸入id:</span><input value={dataOne.id} onChange={(e) => setDataOne(e.target.value)}/>{dataOne.id === '' && <span>...id未填寫...</span>}<br />
                <span>輸入username:</span><input value={dataOne.username} onChange={(e) => setDataOne(e.target.value)}/>{dataOne.username === '' && <span>...username未填寫...</span>}<br />
                <span>輸入number:</span><input value={dataOne.number} onChange={(e) => setDataOne(e.target.value)}/>{dataOne.number === '' && <span>...number未填寫...</span>}
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
