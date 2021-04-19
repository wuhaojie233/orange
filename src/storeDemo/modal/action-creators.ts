import { HIDEMODAL, SHOWMODAL } from './const'

const DemoModalAction = {
  show() {
    return (dispatch: any) => {
      dispatch({ type: SHOWMODAL })
    }
  },
  hide() {
    return (dispatch: any) => {
      dispatch({ type: HIDEMODAL })
    }
  },
}
export default DemoModalAction
