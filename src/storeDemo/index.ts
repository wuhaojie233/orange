import { createStore } from 'redux'
import DemoReducer from './demo/reducer'
export const DemoStore = createStore(DemoReducer)
