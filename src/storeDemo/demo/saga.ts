
import { takeEvery, put, delay } from 'redux-saga/effects'
import actions from './action-creators'
import { INCREMENT_ASYNC, INCREMENT } from './const';
function* incerment_async_fn(action: any) {
    yield delay(2000)
    yield put({ type: INCREMENT, payload: action.payload })
}
export default function* DemoSaga() {
    // 接受action 
    yield takeEvery(INCREMENT_ASYNC, incerment_async_fn)
}