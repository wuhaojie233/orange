import { Button } from 'antd'
import React, { useState, FC } from 'react'
import { withRouter } from 'react-router'
import Board from './board/board'
import './game.less'
const Game: FC = (props: any) => {

  const [state, setstate] = useState({
    xIsNext: true, // 当前 步数 X/O
    history: [
      {
        squares: Array(9).fill(null),
      },
    ], // 历史记录
    setpNumber: 0, // 设定数值
  })
  let history = state.history.slice(0, state.setpNumber + 1)
  let current: { squares: Array<string> } = history[state.setpNumber]
  /**
   * @description  每走一步的回调
   * @param {number} i
   */
  const handleClick = (i: number) => {
    const squares = current.squares.slice()
    if (calculateWinner(squares) || squares[i]) {
      return
    }
    squares[i] = state.xIsNext ? 'x' : 'O'
    history = history.concat([{ squares: squares }])
    let setpNumber = history.length - 1
    setstate({
      xIsNext: !state.xIsNext,
      history: history,
      setpNumber,
    })
    console.warn(state.history.length)
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
    ]
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i]
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a]
      }
    }
    return null
  }

  let status
  const winner = calculateWinner(
    state.history[state.history.length - 1].squares
  )
  if (winner) {
    status = `Winner: ${winner}`
  } else {
    status = `Next player: ${state.xIsNext ? 'X' : 'O'}`
  }
  const jumpTo = (i: number) => {
    current = state.history[i]
    calculateWinner(current.squares)
    setstate({
      xIsNext: i % 2 === 0,
      history: state.history,
      setpNumber: i,
    })
  }
  return (
    <section>
      <div className="game">
        <div className="game-board">
          <div className="status">{status}</div>
          <Board
            squares={current.squares}
            onClick={(i: number) => handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div></div>
          <ol>
            {state.history.map((h, i) => {
              return (
                <li key={i}>
                  <Button onClick={() => jumpTo(i)} type="primary">
                    {i ? 'Go to move #' + i : 'Go to game start'}
                  </Button>
                </li>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}

export default withRouter(Game)
