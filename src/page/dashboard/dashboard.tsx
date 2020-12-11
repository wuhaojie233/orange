import React, { FC } from 'react'
import { Button, List } from 'antd';
import GroupState from '../../store/group-state';
const Dashboard: FC<{ list: Array<string>, onIncreaseClick: any }> = (props) => {
  // const { list, onIncreaseClick } = props
  const increaseAction = { type: 'todoList', list: ['hello', 'redux-One', 'Reducer-Two', 'Action-tree', 'Store-flow'] }
  const inDefaultAction = { type: 'todoList', list: ['66666666', 'Reducer-Two', 'Action-tree', '77777777'] }
  console.warn(props)
  return (
    <div>
      <h1>Hello Redex</h1>
      <div>
        {/* <Button onClick={() => onIncreaseClick(increaseAction)} type="primary">onIncreaseClick</Button> */}
        {/* <Button onClick={() => onIncreaseClick(inDefaultAction)} type="primary">inDefaultAction</Button> */}
      </div>
      {/* <List
        itemLayout="horizontal"
        dataSource={list}
        renderItem={item => (
          <List.Item>
            {item}
          </List.Item>
        )}
      />, */}

    </div>
  )
}
export default GroupState(Dashboard, {
  reducer: 'auth',
  states: ['userInfo']
})
// export default connect((state: any) => {
//   return {
//     list: state.list
//   }
// },
//   (dispatch) => {
//     return {
//       onIncreaseClick: (data: any) => dispatch(data),
//     }
//   })(Dashboard)


