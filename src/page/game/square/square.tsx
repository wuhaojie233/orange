import React from 'react';
import './square.less'

const Square: React.FC<any> = (props) => {
    return (
        <button onClick={props.onClick} className="square">
            {props.value}
        </button>
    )
}

export default Square





