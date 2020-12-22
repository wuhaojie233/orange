import './App.less'
import React, { FC } from 'react'
import routes from './routes/defaultRoutes'
import { renderRoutes } from 'react-router-config'
const App: FC = () => {
  return (
    <main>
      {/* <RouterView routes={routes} ></RouterView> */}
      {renderRoutes(routes)}
    </main>
  )
}

export default App
