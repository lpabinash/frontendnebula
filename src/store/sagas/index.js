import { all } from 'redux-saga/effects'
import musicSaga from './musicSaga';
function* rootSaga() {
    yield all([musicSaga()])
}

export default rootSaga;