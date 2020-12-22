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
          // _state[item] = state
          _state[item] = state[reducer]?.getIn([item])
        })
      return _state
    },
    (dispatch) => {
      return bindActionCreators(GroupCreatorsAction[options.reducer], dispatch)
    }
  )(ViewComponent)
}

export default GroupState
