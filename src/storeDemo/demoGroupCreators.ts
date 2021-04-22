import { DemoActionCreators } from './demoActions/action';
import DemoModalAction from './modal/action-creators'
import DemoAction from './demo/action-creators';

export default {
    demo: DemoAction,
    modal: DemoModalAction,
    demoAction: DemoActionCreators
}
