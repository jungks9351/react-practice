import { createSlice } from '@reduxjs/toolkit';
import { put, call, takeLatest } from 'redux-saga/effects';
import { readPostList, readPostById } from '../lib/post';

const initialState = {
  postList: [],
  post: null,
  loading: false,
  err: null,
};

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    getPostList(state) {
      state.loading = true;
      state.err = null;
    },
    getPostListSuccess(state, action) {
      console.log(action);
      state.loading = false;
      state.postList = action.payload;
    },
    getPostListFail(state, action) {
      state.loading = false;
      state.err = action.payload;
    },
    getPostById(state, action) {
      state.loading = true;
      state.err = null;
    },
    getPostByIdSuccess(state, action) {
      state.loading = false;
      state.post = action.payload;
    },
    getPostByIdFail(state, action) {
      state.loading = false;
      state.err = action.payload;
    },
    deletePost(state, action) {
      const idArr = state.postList.map((postItem) => postItem.postId);
      const checkedId = idArr.includes(action.payload);

      if (checkedId) {
        state.postList = state.postList.filter(
          (postItem) => postItem.id !== action.payload
        );
        state.err = null;
      } else {
        state.err = '존재하지 않는 게시물입니다.';
      }
    },
  },
});

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

export const {
  getPostList,
  getPostListSuccess,
  getPostListFail,
  getPostById,
  getPostByIdSuccess,
  getPostByIdFail,
  deletePost,
} = postSlice.actions;

export default postSlice.reducer;
