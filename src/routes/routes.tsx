import React, { Fragment } from 'react'

import { Route, Redirect, useRouteMatch, Switch } from 'react-router-dom';


const RouterView = (props: any) => {
  let match = useRouteMatch()

  return (
    <Fragment>
      <Switch>
        {props.routes.map((route: any, index: number) => {
          if (route.auth && !sessionStorage.getItem('user')) {
            return <Redirect to="/login"></Redirect>
          } else {
            return <Route exact={route.exact}
              key={index}
              path={route.path}
              {...route.routes}
              render={p => (
                <route.component {...p} routes={route.routes}
                ></route.component>)
              }></Route>
          }
        })
        }
        {/* { resolveRouter(props.routes)} */}
        {/* <Route exact path="/" component={Login} /> */}
        {/* <Redirect to="/login"></Redirect> */}
      </Switch>
    </Fragment >
  )
}

export default RouterView
