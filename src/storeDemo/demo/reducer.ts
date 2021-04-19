import { DECREMENT, INCREMENT } from './const'
import DemoState from './state'

const DemoReducer = (prevState: any = DemoState, action: any) => {
  switch (action.type) {
    case INCREMENT:
      return { count: prevState.count + action.payload }
    case DECREMENT:
      return { count: prevState.count - action.payload }
    default:
      return prevState
  }
}
export default DemoReducer
