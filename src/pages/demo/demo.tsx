import React, { useEffect, useReducer, useRef } from 'react'
import { Button } from 'antd'
const DemoReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
    default:
      return state
  }
}
const Demo = () => {
  const inputELement: any = useRef()
  const focus = () => {
    inputELement.current.focus()
  }

  const [state, dispatch] = useReducer(DemoReducer, 1)
  //   useeffect
  //   useEffect(() => {
  //     console.log('挂载之后,数据发生更新之后')
  //   })
  return (
    <div>
      <h1>Demo</h1>
      <h3>获取焦点:</h3>
      <input placeholder="获取焦点" ref={inputELement} type="text" />
      <Button type="primary" onClick={focus}>
        focut
      </Button>
      <hr />
      <h3>useReducer:</h3>
      <span>reducerState:{state}</span>
      <Button type="primary" onClick={() => dispatch({ type: 'increment' })}>
        increment
      </Button>
      <Button type="primary" onClick={() => dispatch({ type: 'decrement' })}>
        decrement
      </Button>
    </div>
  )
}
export default Demo
