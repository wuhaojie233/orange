import { all } from 'redux-saga/effects'
import DemoSaga from './demo/saga';
import { DemoModalSaga } from './modal/saga';

export function* DemoGroupSagas() {
    yield all([DemoSaga(), DemoModalSaga()])
}