import React, { FC, useState } from 'react';
import Square from '../square/square';
import './board.less'
const Board: FC = () => {
    const renderSquare = (i: number) => {
        return <Square value={state.squares[i]} />;
    }
    const status = 'Next player: X';
    const [state, setstate] = useState({ squares: Array(9).fill(null) })
    return (
        <div>
            <div className="status">{status}</div>
            <div className="board-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
    )
}

export default Board
