import { HIDEMODAL, SHOWMODAL, SHOWMODAL_ASYNC } from './const';

const DemoModalAction = {
  show() {
    return (dispatch: any) => {
      dispatch({ type: SHOWMODAL })
    }
  },
  show_async() {
    return { type: SHOWMODAL_ASYNC }
  },
  hide() {
    return { type: HIDEMODAL }
  },
}
export default DemoModalAction
