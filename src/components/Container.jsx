import React from 'react';
import PostList from './PostList';
import { postLoadThunk } from '../redux/post';
import { connect } from 'react-redux';

const Container = () => {
  return (
    <div>
      <PostList />
    </div>
  );
};

export default Container;
