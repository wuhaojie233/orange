import './App.less'
import React, { FC, Suspense } from 'react'
import routes from './routes/publicRoutes'
import RouterView from './routes/routes'
const App: FC = () => {
  return (
    <main>
      <Suspense fallback={<div>loading...</div>}>
        <RouterView routes={routes} ></RouterView>
      </Suspense>
    </main>
  )
}

export default App
