import React from 'react'
import DemoGroupState from 'storeDemo/demoGroupState.ts'
import { Button } from 'antd'
const DemoActionsComponent = (props: any) => {

    return <div>
        <hr />
        <h3>Demo Actions Redux</h3>
        {/* <Button type="primary" onClick={() => props.show()}>
            Open Modal
        </Button> */}
        <Button type="primary" onClick={() => props.increment_action(100)}>
            increment
        </Button>
        <span>{props.count}</span>
        <Button type="primary" onClick={() => props.decrement(100)}>
            decerment
        </Button>

    </div>

}
// export default DemoActionsComponent
export default DemoGroupState(DemoActionsComponent, { reducer: 'demoAction', states: ['modal'] })