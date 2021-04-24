import { HIDEMODAL, SHOWMODAL } from './const'
import state from './state'
const DemoModalReducer = (prevState: any = state, action: any) => {
  switch (action.type) {
    case SHOWMODAL:
      return { showState: true }
    case HIDEMODAL:
      return { showState: false }
    default:
      return prevState
  }
}
export default DemoModalReducer
