import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import DemoAction from './demo/action-creators'
import GroupCreatorsAction from './demoGroupCreators'
// const mapStateTpProps = (states: any) => {
//   console.log(states)
//   return states
// }
// const mapDispatchtoProps = (dispatch: any) =>
//   bindActionCreators(GroupCreatorsAction, dispatch)
const DemoGroupState = (
  ViewComponent: any,
  options: { reducer: string; states: Array<string> }
) => {
  return connect(
    (states: any) => {
      console.log(states)
      return states[options.reducer]
    },
    (dispatch: any) => {
      return bindActionCreators(GroupCreatorsAction[options.reducer], dispatch)
    }
  )(ViewComponent)
}
export default DemoGroupState
