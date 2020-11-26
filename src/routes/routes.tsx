
import React from "react";

import { Route, Switch, Redirect } from "react-router-dom";

import { RouteIF } from './defaultRoutes';
import routes from './defaultRoutes';

const RouterView = () => {
  // constructor(props:any) {
  //   super(props);
  // };

  /**
   * @description 解析路由
   */
  const resolveRouter = (routers: Array<RouteIF>): any => {
    let route = []
    for (const { path, component, routes, exact } of routers) {
      route.push(<Route exact={exact} key={path} path={path} component={component} />)
      if (routes && routes.length) {

        route.push(resolveRouter(routes))
      }
    }
    return route
  }
  return (
    <Switch>
      {resolveRouter(routes)}
      {/* <Route exact path="/" component={Home} /> */}
      {/* <Route path="/about" component={About} /> */}
      <Redirect to='/'></Redirect>
    </Switch>
  );

}

export default RouterView;
