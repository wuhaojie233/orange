import React, { useState } from 'react';
import './square.less'

const Square: React.FC<any> = (props) => {
    const [state, setstate] = useState('')
    const handleClick = (value: number) => {

    }
    return (
        <button onClick={() => { handleClick(props.value) }} className="square">
            {props.value}
        </button>
    )
}

export default Square





