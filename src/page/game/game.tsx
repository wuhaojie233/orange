import React, { FC } from 'react';
import Board from './board/board'
import './game.less'
const Game: FC = () => {
    return (
        <section>
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        </section>
    )
}

export default Game

