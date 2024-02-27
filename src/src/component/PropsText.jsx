import React from "react";
import TextSeed from "./TextTestData";

const PropsText = () => {
    const props = TextSeed();
    return <h1>{props.text.address}</h1>; 
};

export default PropsText;