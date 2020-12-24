import './App.less'
import React, { FC } from 'react'
import routes from './routes/defaultRoutes'
import { renderRoutes } from 'react-router-config'
import RouterView from './routes/routes'
const App: FC = () => {
  return (
    <main>
      <RouterView routes={routes} ></RouterView>
      {/* {renderRoutes(routes)} */}
    </main>
  )
}

export default App
