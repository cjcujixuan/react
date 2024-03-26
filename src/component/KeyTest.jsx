import React, { useState } from 'react';

const KeyPressEvent = () => {

    const [keyValue1, setKeyValue1] = useState("");
    const [keyValue2, setKeyValue2] = useState("");
    const [mousePosition, setMousePosition] = useState({ x: null, y: null })
    const [topPos, setTopPos] = useState(0);

    const handleKeyPressDown = (e) => {
        setKeyValue2(e.key);
    };
    const handleKeyPressUp = (e) => {
        setKeyValue1(e.key);
    };
    const handelMousePosition = (e) => {
        setMousePosition({
            x: e.nativeEvent.offsetX,
            y: e.nativeEvent.offsetY,
        })
    }
    const handleScroll = (e) => {
        setTopPos(e.target.scrollTop);
    };

    return (
        <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
            <div style={{ height: '50%', backgroundColor: '#E0E0E0' }}>
                <input type="text" onKeyDown={handleKeyPressDown} onKeyUp={handleKeyPressUp} placeholder="按任意键" />
                <p>按下:{keyValue2}</p>
                <p>放开:{keyValue1}</p>
            </div>
            <div style={{ height: '50%', backgroundColor: '#C4E1E1' }} onMouseMove={handelMousePosition}>
                <ul style={{ overflow: 'auto', height: '200px' }} onScroll={handleScroll}>
                    {Array.from({ length: 30 }, (item, index) => (
                        <li key={index}>項目-----{index + 1}</li>
                    ))}
                </ul>
                <h1 style={{ padding: '10px 20px', height: '30px' }}>
                    <p>滾動的最上方座標: {topPos}</p>
                </h1>

                <h1>{mousePosition.x} , {mousePosition.y}</h1>
            </div>
        </div>
    )
}

export default KeyPressEvent;