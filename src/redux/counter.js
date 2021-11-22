import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  count: 0,
  value: '',
};

const countSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increaseCount(state, action) {
      if (action.payload) {
        state.count += action.payload;
      } else {
        state.count++;
      }
    },
    decreaseCount(state, action) {
      if (action.payload) {
        state.count -= action.payload;
      } else {
        state.count--;
      }
    },
    changeValue(state, action) {
      state.value = action.payload;
    },
  },
});
export const increase = () => (dispatch) => {
  setTimeout(() => {
    dispatch(increaseCount());
  }, 1000);
};

export const { increaseCount, decreaseCount, changeValue } = countSlice.actions;
export default countSlice.reducer;
