import React from 'react';
import Counter from './components/Counter';
import PostList from './components/PostList';
import Practice from './components/Practice';
import { connect } from 'react-redux';
import { increase } from './redux/counter';
import { postLoadThunk } from './redux/post';
import Container from './components/Container';

function App({ value, increase, postList, postLoadThunk }) {
  return (
    <>
      <Practice increase={increase} value={value} />
      <Counter />
      <Container />
    </>
  );
}

export default connect(
  (state) => ({
    value: state.value,
  }),
  { increase }
)(App);
