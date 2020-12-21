import React, { Fragment } from 'react'

import { Route, Redirect, useRouteMatch, Router, Link } from 'react-router-dom';

import { RouteIF } from './defaultRoutes'

const RouterView = (props: any) => {
  let match = useRouteMatch();
  /**
   * @description 解析路由
   */
  const resolveRouter = (routers: Array<RouteIF>): any => {
    let route = []
    for (const { path, component, routes, exact } of routers) {
      route.push(
        <Route exact={exact} key={path} path={`${match.url}` + path} component={component} />
      )
      route.push(
        <li><Link to={`${match.url}` + path}>{`${match.url}` + path}</Link></li>

      )
      if (routes && routes.length) {
        route.push(resolveRouter(routes))
      }
    }
    return route
  }
  return (
    <Fragment>
      {resolveRouter(props.routes)}
      {/* <Route exact path="/" component={Login} /> */}
      {/* <Redirect to="/login"></Redirect> */}
    </Fragment>
  )
}

export default RouterView
