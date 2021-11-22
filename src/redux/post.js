import { createSlice } from '@reduxjs/toolkit';

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
