import React from 'react';
import ReactDOM from 'react-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import countReducer from './redux/counter';
import postReducer from './redux/post';
import { all } from '@redux-saga/core/effects';
import { postSaga } from './redux/post';
import createSagaMiddleWare from 'redux-saga';

const rootReducer = combineReducers({
  countReducer,
  postReducer,
});

function* rootSaga() {
  yield all([postSaga()]);
}

const sagaMiddleWare = createSagaMiddleWare();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleWare))
);

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
