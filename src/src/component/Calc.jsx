import React from "react";

const CalcOne = ({numOne, numTwo}) => {
    const ansOne = numOne * numTwo;
    return (
    <h1>{ansOne}</h1>
    )
};

export default CalcOne;