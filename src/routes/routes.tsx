import React, { Fragment } from 'react'

import { Route, Redirect, useRouteMatch, Router, Link, Switch } from 'react-router-dom';

import { RouteIF } from './publicRoutes';

const RouterView = (props: any) => {
  let match = useRouteMatch()
  console.warn('match------->' + JSON.stringify(match))
  /**
   * @description 解析路由
   */
  const resolveRouter = (routers: Array<RouteIF>): any => {
    let route = []
    for (const { path, component, routes, exact, render } of routers) {
      if (render) {
        route.push(render())
      } else {
        route.push(
          <Route
            exact={exact}
            key={path}
            path={`${match.url}` + path}
            component={component}
          />
        )
      }

      // route.push(
      //   <li>
      //     <Link to={`${match.url}` + path}>{`${match.url}` + path}</Link>
      //   </li>
      // )
      // if (routes && routes.length) {
      //   route.push(resolveRouter(routes))
      // }
    }
    return route
  }
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
