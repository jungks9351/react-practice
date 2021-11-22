import axios from 'axios';

export const readPostList = async () => {
  const { data } = await axios.get('http://localhost:4000/post');
  return data;
};

export const readPostById = async (postId) => {
  const { data } = await axios.get(`http://localhost:4000/post/${postId}`);
  return data;
};
