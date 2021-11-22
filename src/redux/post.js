import { put, call, takeLatest } from 'redux-saga/effects';
import { readPostList, readPostById } from '../lib/post';

const initialState = {
  postList: [],
  post: null,
  loading: false,
  err: null,
};

const getPostAction = 'GET_POSTLIST';
const getPostActionSuccess = 'GET_POSTLIST_SUCCESS';
const getPostActionFail = 'GET_POSTLIST_FAIL';

const getPostByIdAction = 'GET_POST_BY_ID';
const getPostByIdActionSuccess = 'GET_POST_BY_ID_SUCESS';
const getPostByIdActionFail = 'GET_POST_BY_ID_FAIL';

const deletePostAction = 'DELETE_POST';

export const getPostActionCreator = (payload) => {
  return { type: getPostAction, payload };
};

export const getPostByIdActionCreator = (payload) => {
  return { type: getPostByIdAction, payload };
};

export const deletePostActionCreator = (payload) => {
  return { type: deletePostAction, payload };
};

function* getPostListSaga(action) {
  try {
    const data = yield call(readPostList);
    yield put({ type: `${action.type}_SUCCESS`, payload: data });
  } catch (err) {
    yield put({ type: `${action.type}_FAIL`, payload: err });
  }
}

function* getPostByIdSaga(action) {
  console.log(action);
  try {
    // yield call effect는 인자로 함수로 정의되어있는 변수를 넣는다. 단!, 함수에 추가로 인자가 필요할 경우 콜백 패턴을 사용해야한다.
    const data = yield call(() => readPostById(action.payload));
    yield put({ type: `${action.type}_SUCCESS`, payload: data });
  } catch (err) {
    yield put({ type: `${action.type}_FAIL`, payload: err });
  }
}

export function* postSaga() {
  yield takeLatest(getPostAction, getPostListSaga);
  yield takeLatest(getPostByIdAction, getPostByIdSaga);
}

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_POSTLIST':
      return { ...state, loading: true, err: null };
    case 'GET_POSTLIST_SUCCESS':
      return { ...state, loading: false, postList: action.payload };
    case 'GET_POSTLIST_FAIL':
      return { ...state, loading: false, err: action.payload };
    case 'GET_POST_BY_ID':
      return { ...state, loading: true, err: null };
    case 'GET_POST_BY_ID_SUCESS':
      return { ...state, loading: false, post: action.payload };
    case 'GET_POST_BY_ID_FAIL':
      return { ...state, loading: false, err: action.payload };
    case 'DELETE_POST':
      const idArr = state.postList.map((postItem) => postItem.postId);

      const checkedId = idArr.includes(action.payload);

      if (checkedId) {
        return {
          ...state,
          postList: state.postList.filter(
            (postItem) => postItem.postId !== action.payload
          ),
          err: null,
        };
      } else {
        return { ...state, err: '존재하지않는 게시물입니다.' };
      }
    default:
      return state;
  }
};

export default postReducer;
