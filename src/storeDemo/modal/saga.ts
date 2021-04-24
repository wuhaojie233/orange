import { takeEvery, put, delay } from 'redux-saga/effects'
import { SHOWMODAL, SHOWMODAL_ASYNC } from './const';

function* show_async() {
    yield delay(2000)
    yield put({ type: SHOWMODAL })
}

export function* DemoModalSaga() {
    yield takeEvery(SHOWMODAL_ASYNC, show_async)
}