import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getPostActionCreator,
  getPostByIdActionCreator,
  deletePostActionCreator,
} from '../redux/post';
import PostItem from './PostItem';

const PostList = () => {
  const [postId, setPostId] = useState('');

  const { postList, err } = useSelector(({ postReducer }) => {
    return { postList: postReducer.postList, err: postReducer.err };
  });

  console.log(postList);

  const dispatch = useDispatch();

  const deletePost = () => {
    dispatch(deletePostActionCreator(postId));
  };

  const changeId = (e) => {
    setPostId(+e.target.value);
  };

  const readPostById = () => {
    dispatch(getPostByIdActionCreator(postId));
  };

  useEffect(() => {
    dispatch(getPostActionCreator());
  }, [dispatch]);
  return (
    <>
      <input type='text' onChange={changeId} />
      <button onClick={readPostById}>포스트 불러오기</button>
      <button onClick={deletePost}>포스트 삭제</button>
      {/* {err && <p>{err}</p>} */}
      <ul>
        {postList.map((postItem) => {
          return <PostItem key={postItem.postId} postItem={postItem} />;
        })}
      </ul>
    </>
  );
};
export default PostList;
