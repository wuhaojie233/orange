import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import GroupCreatorsAction from './group-creators-action'
const GroupState = (
  ViewComponent: any,
  options: { reducer: string; states: Array<string> }
) => {
  return connect(
    (state: any) => {
      let { reducer, states } = options
      let _state = {}
      states &&
        states.forEach((item: any) => {
          _state[item] = state
          // _state[item] = state?.getIn([reducer, item])
        })
      return _state
    },
    (dispatch) => {
      let z = GroupCreatorsAction[options.reducer]
      console.warn(z)
      console.warn(dispatch + z)
      return bindActionCreators(GroupCreatorsAction[options.reducer], dispatch)
    }
  )(ViewComponent)
}

export default GroupState
