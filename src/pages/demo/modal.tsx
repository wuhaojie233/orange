import React from 'react'
import DemoGroupState from 'storeDemo/demoGroupState.ts'
import { Modal, Button } from 'antd'
const ModalComponent = (props: any) => {

    return <div>
        {/* <Button type="primary" onClick={() => props.show()}>
            Open Modal
        </Button> */}
        <Button type="primary" onClick={() => props.show_async()}>
            async Open Modal
        </Button>
        <Modal title="Basic Modal" visible={props.showState} onOk={() => { props.hide() }} onCancel={() => { props.hide() }}>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
        </Modal>
    </div>

}
export default DemoGroupState(ModalComponent, { reducer: 'modal', states: ['modal'] })