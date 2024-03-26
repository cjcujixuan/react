import React, { useState } from 'react';

const ImgEvent2 = () => {
    const [isBigSize, setIsBigSize] = useState(false);

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

    const handleClickSmall = () => {
        setIsBigSize(false);
    };

    const handleClickBig = () => {
        setIsBigSize(true);
    };

    return (
        <div>
            <button onClick={handleClickSmall}>smallSize</button>
            <button onClick={handleClickBig}>bigSize</button>
            <br />
            {Array.from({ length: 20 }, (item, index) => (
                <img key={index} src={`https://picsum.photos/300/200?random=${index}`} style={isBigSize ? bigSize : smallSize}></img>
            ))}

        </div>
    );
};

export default ImgEvent2;