import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increaseCount, decreaseCount, changeValue } from '../redux/counter';

const Practice = () => {
  const value = useSelector(({ countReducer }) => {
    return countReducer.value;
  });

  const dispatch = useDispatch();

  const increase = () => {
    dispatch(increaseCount(value));
  };
  const decrease = () => {
    dispatch(decreaseCount(value));
  };

  const changeInput = (e) => {
    console.log(e.target.value);
    dispatch(changeValue(+e.target.value));
  };

  return (
    <div>
      <input type='text' onChange={changeInput} />
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
};

export default Practice;
