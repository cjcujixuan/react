import React from "react";

const Mobile =({name}) => {
    return <p> Phone --- {name}</p>
};

const CombinedComponent = () => {
    return (
        <div>
            <h1>Mobile Products</h1>
            <Mobile name="iPhone-15" />
            <Mobile name="Galaxy-S23" />
        </div>
    )
}

export default CombinedComponent;