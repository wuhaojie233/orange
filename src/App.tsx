import './App.less'
import React, { FC } from 'react'
import RouterView from './routes/routes'
const App: FC = (props) => {
  return (
    <main>
      {props.children}
      {/* <Home></Home> */}
      <RouterView></RouterView>
    </main>
  )
}

export default App
