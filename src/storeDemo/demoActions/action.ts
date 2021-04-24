import { createAction } from "redux-actions";



export const DemoActionCreators = {
    increment_action: createAction('increment_action'),
    decrement: createAction('decrement')
}