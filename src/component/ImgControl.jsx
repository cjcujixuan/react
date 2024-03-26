import React, { useState } from 'react';

const ImgEvent = () => {

    const smallSize = {
        height: '100px',
        width: '100px',
        border: '2px solid orange',
        padding: '10px',
        margin: '10px'
    };
    const bigSize = {
        height: '200px',
        width: '200px',
        border: '3px solid blue',
        padding: '20px',
        margin: '20px'
    };
    const [myStyle, setMyStyle] = useState(smallSize);
    const handleClickSmall = () => {
        setMyStyle(smallSize)
    };

    const handleClickBig = () => {
        setMyStyle(bigSize);
    };

    return (
        <div>
            <button onClick={handleClickSmall}>smallSize</button>
            <button onClick={handleClickBig}>bigSize</button>
            <br />
            {Array.from({ length: 20 }, (item, index) => (
                <img key={index} src={`https://picsum.photos/300/200?random=${index}`} style={myStyle}></img>
            ))}

        </div>
    );
};

export default ImgEvent;
