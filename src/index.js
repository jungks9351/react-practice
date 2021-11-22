import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { combineReducers } from 'redux';
import { Provider } from 'react-redux';
import countReducer from './redux/counter';
import postReducer from './redux/post';
import { all } from '@redux-saga/core/effects';
import { postSaga } from './redux/post';
import createSagaMiddleWare from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

const reducer = combineReducers({
  countReducer,
  postReducer,
});

function* rootSaga() {
  yield all([postSaga()]);
}

const sagaMiddleWare = createSagaMiddleWare();

const middleware = [sagaMiddleWare, logger];

const store = configureStore({
  reducer,
  middleware,
  devTools: true,
});

// store를 만들고 실행시켜야만 합니다.
sagaMiddleWare.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
