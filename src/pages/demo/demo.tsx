import React, { useEffect, useReducer, useRef } from 'react'
import { Button } from 'antd'
import DemoGroupState from 'storeDemo/demoGroupState.ts';
import ModalComponent from './modal'
// study 16(3/2)
const Demo = (props: any) => {
  const inputELement: any = useRef()
  const focus = () => {
    inputELement.current.focus()
  }

  // const [state, dispatch] = useReducer(DemoReducer, 1)
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
      <span>reducerState:{props.count}</span>
      <Button type="primary" onClick={() => props.increment(10)}>
        increment
      </Button>
      <Button type="primary" onClick={() => props.increment_async(100)}>
        increment_async
      </Button>
      <Button type="primary" onClick={() => props.increment_saga_async(1000)}>
        increment_async_saga
      </Button>
      <Button type="primary" onClick={() => props.decrement(5)}>
        decrement
      </Button>
      <hr />
      <h3>modal</h3>
      <ModalComponent></ModalComponent>
    </div>
  )
}
export default DemoGroupState(Demo, { reducer: 'demo', states: ['demo'] })
