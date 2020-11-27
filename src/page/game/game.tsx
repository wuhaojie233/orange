import { Button } from 'antd';
import React, { useState, FC } from 'react';
import Board from './board/board'
import './game.less'
const Game: FC = () => {
    const [state, setstate] = useState({
        xIsNext: true, history: [{
            squares: Array(9).fill(null)
        }],
    })
    let history = state.history
    let current: { squares: Array<string> } = history[history.length - 1]
    /**
     * @description 
     * @param {number} i
     */
    const handleClick = (i: number) => {
        const squares = current.squares.slice()
        if (calculateWinner(squares) || squares[i]) {
            return
        }
        squares[i] = state.xIsNext ? 'x' : 'O'
        setstate({ xIsNext: !state.xIsNext, history: history.concat([{ squares: squares }]) })
    }

    /**
     * @description 计算赢家
     * @param squares 
     */
    const calculateWinner = (squares: Array<string>) => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }

    let status;
    const winner = calculateWinner(state.history[state.history.length - 1].squares)
    if (winner) {
        status = `Winner: ${winner}`
    } else {
        status = `Next player: ${state.xIsNext ? 'X' : 'O'}`
    }
    const jumpTo = (i: number) => {
        debugger
        current = history[i]
        calculateWinner(current.squares)
    }
    return (
        <section>
            <div className="game">
                <div className="game-board">
                    <div className="status">{status}</div>
                    <Board squares={current.squares} onClick={(i: number) => handleClick(i)} />
                </div>
                <div className="game-info">
                    <div>
                    </div>
                    <ol>
                        {history.map((h, i) => {
                            return <li>
                                <Button onClick={() => jumpTo(i)} type="primary">{i ?
                                    'Go to move #' + i :
                                    'Go to game start'}
                                </Button>
                            </li>

                        })}
                    </ol>
                </div>
            </div>
        </section>
    )
}

export default Game

