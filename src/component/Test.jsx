import React, { useState } from 'react';
import './TopNavbar.css';

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

//1頁面
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
//1頁面
const OnePage = () =>
    <>
        <div>
            <button onClick={handleClickSmall}>smallSize</button>
            <button onClick={handleClickBig}>bigSize</button>
            <br />
            {Array.from({ length: 20 }, (_item, index) => (
                <img key={index} src={`https://picsum.photos/300/200?random=${index}`} style={myStyle}></img>
            ))}

        </div>
    </>

//2頁面
const TwoPage = () =>
    <>
        <div>
            2
        </div>
    </>
//3頁面
const ThreePage = () =>
    <>
        <div>
            3
        </div>
    </>
//4頁面
const FourPage = () =>
    <>
        <div>
            4
        </div>
    </>

export default TopNavbar;
