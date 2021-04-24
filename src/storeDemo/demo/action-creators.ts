import { INCREMENT, DECREMENT, INCREMENT_ASYNC } from './const'
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
  increment_async(params: any) {
    return (dispatch: any) =>
      setTimeout(() => {
        dispatch({ type: INCREMENT, payload: params })
      }, 2000)
  },
  increment_saga_async(params: any) {
    return { type: INCREMENT_ASYNC, payload: params }
    // (dispatch: any) => {
    //   dispatch()
    // }
  },
}
export default DemoAction
