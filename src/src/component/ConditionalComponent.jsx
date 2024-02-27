import React from 'react';

const ConditionalComponent= ({isVIP}) => {
    return (
    <div>
        {isVIP ? <p>Merry Christmas Mr. Lawrence"true"</p>: <p>Illustrated Musical Encyclopedia"false"</p>}
    </div>
    );
};

export default ConditionalComponent;