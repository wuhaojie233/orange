import React, { useState, FC } from 'react'
import store from '../../store/store'
import { Avatar, Button, List } from 'antd';
const Dashboard: FC = (props) => {
  const [state, setState] = useState(store.getState())
  store.subscribe(() => {

    console.warn(store.getState().list)
  })
  const dispatchRedux = () => {
    store.dispatch({ type: 'UPDATE', list: ['redux-One', 'Reducer-Two', 'Action-tree', 'Store-flow'] })
  }
  return (
    <div>
      <h1>Hello Redex</h1>
      <div>
        <Button onClick={dispatchRedux} type="primary">修改Redux</Button>
      </div>
      <List
        itemLayout="horizontal"
        dataSource={state.list}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
              title={<a href="https://ant.design">{item}</a>}
              description="Ant Design, a design language for background applications, is refined by Ant UED Team"
            />
          </List.Item>
        )}
      />,

    </div>
  )
}

export default Dashboard
