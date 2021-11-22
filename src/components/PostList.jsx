import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector, connect } from 'react-redux';
import { getPostList, getPostById, deletePost } from '../redux/post';
import PostItem from './PostItem';
import { postLoadThunk } from '../redux/post';

const PostList = () => {
  const [postId, setPostId] = useState('');

  const { postList } = useSelector(({ postReducer }) => {
    return { postList: postReducer.postList, err: postReducer.err };
  });

  const dispatch = useDispatch();

  const removePost = () => {
    dispatch(deletePost(postId));
  };

  const changeId = (e) => {
    setPostId(+e.target.value);
  };

  const readPostById = () => {
    dispatch(getPostById(postId));
  };
  useEffect(() => {
    postLoadThunk();
  }, [postLoadThunk]);
  console.log(postList);
  return (
    <>
      <input type='text' onChange={changeId} />
      <button onClick={readPostById}>포스트 불러오기</button>
      <button onClick={removePost}>포스트 삭제</button>
      {/* {err && <p>{err}</p>} */}
      <ul>
        {postList?.map((postItem) => {
          return <PostItem key={postItem.postId} postItem={postItem} />;
        })}
      </ul>
    </>
  );
};
export default PostList;
