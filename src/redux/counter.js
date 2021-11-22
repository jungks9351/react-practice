//action

const initialState = {
  count: 0,
  value: '',
};

const increaseAction = {
  type: 'INCREASE_COUNT',
};

const decreaseAction = {
  type: 'DECREASE_COUNT',
};

const changeValueAction = {
  type: 'CHANGE_VALUE',
};

// action 생성자 함수

export const increaseCreateAction = (value) => {
  return { ...increaseAction, payload: value };
};

export const decreaseCreateAction = (value) => {
  return { ...decreaseAction, payload: value };
};

export const changeValueCreateAction = (value) => {
  return { ...changeValueAction, payload: value };
};

// reducer
// state = initialState : 기본값 설정을 해줍니다.
const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREASE_COUNT':
      if (action.payload) {
        return { ...state, count: state.count + action.payload };
      } else {
        return { ...state, count: state.count + 1 };
      }
    case 'DECREASE_COUNT':
      if (action.payload) {
        return { ...state, count: state.count - action.payload };
      } else {
        return { ...state, count: state.count - 1 };
      }
    case 'CHANGE_VALUE':
      return { ...state, value: action.payload };
    default:
      return state;
  }
};

export default countReducer;
