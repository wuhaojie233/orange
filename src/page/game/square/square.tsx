import React, { useState } from 'react';
import './square.less'

const Square: React.FC<any> = (props) => {
    // const [state, setstate] = useState('')

    return (
        <button onClick={props.onClick} className="square">
            {props.value}
        </button>
    )
}

export default Square





