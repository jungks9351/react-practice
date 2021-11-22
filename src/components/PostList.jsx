import React, { useEffect } from 'react';
import { useQuery } from 'react-query';
import { readPostList } from '../lib/post';
import PostItem from './PostItem';

const PostList = () => {
  const { isLoading, error, data, status } = useQuery(
    'postLoad',
    readPostList,
    { retry: 5 }
  );
  useEffect(() => {}, [data]);
  console.log(data);
  return (
    <>
      <ul>
        {!isLoading &&
          data?.map((postItem) => {
            return <PostItem key={postItem.postId} postItem={postItem} />;
          })}
      </ul>
    </>
  );
};
export default PostList;
