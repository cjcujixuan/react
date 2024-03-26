import React, { useState } from 'react';

const EventCounts = () => {
    const [countValue1, setCountValue1] = useState(0);
    const [countValue2, setCountValue2] = useState(0);

    const handleClickCounting = () => {

        setCountValue1(parseInt(inputValue1));
        setCountValue2(parseInt(inputValue2));
    };

    const [inputValue1, setInputValue1] = useState(0);
    const [inputValue2, setInputValue2] = useState(0);

    const handleChangeInput1 = (e) => {
        setInputValue1(e.target.value);
    };

    const handleChangeInput2 = (e) => {
        setInputValue2(e.target.value);
    };

    return (
        <div>
            <span>第一個數 : </span><input type="number" value={inputValue1} onChange={handleChangeInput1} />
            <p></p>
            <span>第二個數 : </span><input type="number" value={inputValue2} onChange={handleChangeInput2} />
            <p></p>
            <button onClick={handleClickCounting}>計算</button>
            <h1>{inputValue1} + {inputValue2} = {countValue1 + countValue2}</h1>
            <h1>{inputValue1} - {inputValue2} = {countValue1 - countValue2}</h1>
            <h1>{inputValue1} * {inputValue2} = {countValue1 * countValue2}</h1>
        </div>
    )
};

export default EventCounts;
