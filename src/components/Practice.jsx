import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  increaseCreateAction,
  decreaseCreateAction,
  changeValueCreateAction,
} from '../redux/counter';

const Practice = () => {
  const value = useSelector(({ countReducer }) => {
    return countReducer.value;
  });

  const dispatch = useDispatch();

  const increase = () => {
    dispatch(increaseCreateAction(value));
  };
  const decrease = () => {
    dispatch(decreaseCreateAction(value));
  };

  const changeValue = (e) => {
    console.log(e.target.value);
    dispatch(changeValueCreateAction(+e.target.value));
  };

  return (
    <div>
      <input type='text' onChange={changeValue} />
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
};

export default Practice;
