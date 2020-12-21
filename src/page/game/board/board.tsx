import React, { FC } from 'react';
import Square from '../square/square';
import './board.less'
const Board: FC<any> = (props) => {
    // const [state, setstate] = useState({
    //     squares: Array(9).fill(null), xIsNext: true, history: [{
    //         squares: Array(9).fill(null)
    //     }],
    // })
    // const status = `Next player: ${state.xIsNext ? 'x' : 'O'}`
    const renderSquare = (i: number) => {
        return <Square onClick={() => props.onClick(i)} value={props.squares[i]} />;
    }
    return (
        <div>

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
