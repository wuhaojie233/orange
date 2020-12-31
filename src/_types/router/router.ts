import { FC } from 'react'

export interface RouteIF {
  path?: string
  component?: FC
  exact?: boolean
  routes?: Array<RouteIF>
  render?: any
  to?: string
}
