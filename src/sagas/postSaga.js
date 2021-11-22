import { put, call, takeLatest } from 'redux-saga/effects';
import { readPostList, readPostById } from '../lib/post';
import { getPostList, getPostById } from '../redux/post';

function* getPostListSaga(action) {
  console.log(action);
  try {
    const data = yield call(readPostList);
    yield put({ type: `${action.type}Success`, payload: data });
  } catch (err) {
    yield put({ type: `${action.type}Fail`, payload: err });
  }
}

function* getPostByIdSaga(action) {
  console.log(action);
  try {
    // yield call effect는 인자로 함수로 정의되어있는 변수를 넣는다. 단!, 함수에 추가로 인자가 필요할 경우 콜백 패턴을 사용해야한다.
    const data = yield call(() => readPostById(action.payload));
    yield put({ type: `${action.type}Success`, payload: data });
  } catch (err) {
    yield put({ type: `${action.type}Fail`, payload: err });
  }
}

export function* postSaga() {
  yield takeLatest(getPostList, getPostListSaga);
  yield takeLatest(getPostById, getPostByIdSaga);
}
