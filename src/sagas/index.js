import { all } from '@redux-saga/core/effects';
import { postSaga } from './postSaga';

function* rootSaga() {
  yield all([postSaga()]);
}

export default rootSaga;
