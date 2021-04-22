import { handleActions } from "redux-actions";
// import { DemoActionCreators } from './action';

const initCounter = {
    count: 500
}

const handleIncrement = (state: any, action: any) => {
    console.warn(action)
    return { count: state.count + action.payload }
}
// ({ count: state.count + action.payload })
const handleDecrement = (state: any, action: any) => ({ count: state.count - action.payload })


export const DemoActionReducer = handleActions({
    increment_action: handleIncrement,
    decrement: handleDecrement
}, initCounter)