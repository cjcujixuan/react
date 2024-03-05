import React from "react";

const DynamicComp  = (props) => {
    const myStyle = {

        border: `${props.thick || 2.5}px solid ${props.color || 'orange'}`,

        marginBottom : `12px`
    };
    return(
        <div style={myStyle}>
            <h1>{props.title}</h1>
            <h3>{props.option? "我是主管": "我是員工"}</h3>
        </div>
    );
};
export default DynamicComp;