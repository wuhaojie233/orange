import React, { FC } from 'react'
import { Button } from 'antd';
import GroupState from '../../store/group-state';
import { fromJS } from 'immutable';
const Dashboard: FC<{ list: Array<string>, onIncreaseClick: any }> = (props) => {
  // const { list, onIncreaseClick } = props
  const increaseAction = { type: 'todoList', list: ['hello', 'redux-One', 'Reducer-Two', 'Action-tree', 'Store-flow'] }
  const inDefaultAction = { type: 'todoList', list: ['66666666', 'Reducer-Two', 'Action-tree', '77777777'] }
  const list = { data: 'redux - dashboard', name: 'reducer' }
  let imdata = fromJS(list)
  console.warn(props)
  const getIm = () => {
    console.warn(imdata.get('data'))
    let im1 = imdata.set('name', 'state - perv')
    let im2 = imdata.set('prevState', 'state - perv')
    console.warn(im1.getIn(['name']))
    console.warn(im2.getIn(['prevState']))
  }
  return (
    <div>
      <h1>Hello Redex</h1>

      <div>
        {/* <Button onClick={() => onIncreaseClick(increaseAction)} type="primary">onIncreaseClick</Button> */}
        {/* <Button onClick={() => onIncreaseClick(inDefaultAction)} type="primary">inDefaultAction</Button> */}
        <Button onClick={getIm} type="primary">getIm</Button>
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
  states: ['user']
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


