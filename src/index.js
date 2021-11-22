import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import reducer from './redux';
import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

// const sagaMiddleWare = createSagaMiddleWare();

const middleware = [thunk, logger];

const store = configureStore({
  reducer,
  middleware,
  devTools: true,
});

// store를 만들고 실행시켜야만 합니다.
// sagaMiddleWare.run(rootSaga);

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
