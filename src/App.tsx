import './App.less'
import React, { FC } from 'react'
import RouterView from './routes/routes'
import routes from './routes/defaultRoutes';
import { renderRoutes } from 'react-router-config'
const App: FC = (props: any) => {
  return (

    <main>
      {/* {props.children} */}
      {/* <Home></Home> */}
      {/* <RouterView routes={routes} ></RouterView> */}
      {renderRoutes(routes)}
    </main>

  )
}

export default App
