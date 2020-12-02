import React, { useState, FC } from 'react'
import store from '../../store/store'
const Dashboard: FC = (props) => {
  const [state, setState] = useState(store)
  return (
    <div>
      <h1>Hello Redex</h1>
      {state.getState().list.map((l) => (
        <i key={l}>{l}</i>
      ))}
    </div>
  )
}

export default Dashboard
