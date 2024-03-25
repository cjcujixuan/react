import React, { useState } from 'react';

const EventCounts = () => {
    const [countValue, setCountValue] = useState(0)
    const handleClickAdd = () => [
        setCountValue(countValue + 1)
    ]
    const handleClickReduce = () => [
        setCountValue(countValue - 1)
    ]

    const [inputValue, setInputValue] = useState("")
    const handelChange = (e) => [
        setInputValue(e.target.value)
    ]

    const [lightSwitch, setLightSwitch] = useState(false)
    const myStyle = {
        color : lightSwitch ? "#AE0000" : "#0088FF",
        fontSize : countValue
    };

    return (
        <div>
            <button onClick={handleClickAdd}>+</button>
            <button onClick={handleClickReduce}>-</button>
            <p>{countValue}</p>
            <hr />
            <input type="text" onChange={handelChange}></input>
            <h1>{inputValue}</h1>
            <hr />
            <button onClick={() => setLightSwitch(!lightSwitch)}>SWITCH</button>
            <p style={myStyle}>{lightSwitch? "on": "off"}</p>
        </div>
    )


}

export default EventCounts;