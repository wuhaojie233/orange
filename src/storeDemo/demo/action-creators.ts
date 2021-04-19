import { INCREMENT, DECREMENT } from './const'
const DemoAction = {
  increment(params: any = 1) {
    return (dispatch: any) => {
      dispatch({ type: INCREMENT, payload: params })
    }
  },
  decrement(params: any = 1) {
    return (dispatch: any) => {
      dispatch({ type: DECREMENT, payload: params })
    }
  },
}
export default DemoAction
