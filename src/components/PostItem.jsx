import React from 'react';
import styled from 'styled-components';
import { IoMdHeartEmpty, IoMdEye } from 'react-icons/io';

const PostItem = ({ postItem }) => {
  // console.log(postItem);
  return (
    <PostItemContainer>
      <div className='post-img-container'>
        <div className='post-img'></div>
      </div>
      <div className='post-info'>
        <h4 className='post-title'>{postItem.title}</h4>
        <p className='post-description'>{postItem.description}</p>
      </div>
      <div className='user-info-container'>
        <div className='user-profile-info'>
          {/* <img alt='user-profile-img' className='user-profile-img' /> */}
          <span>{postItem.userNickname}</span>
        </div>
        <div className='views-like'>
          <div className='views'>
            <div className='views-icon'>
              <IoMdEye />
            </div>
            <p>{postItem.views}</p>
          </div>
          <div className='like'>
            <div className='like-icon'>
              <IoMdHeartEmpty />
            </div>
            <p>{postItem.likes}</p>
          </div>
        </div>
      </div>
      <div className='sub-info'>
        <span>{postItem.date}</span>
        <span>{postItem.reply}</span>
      </div>
    </PostItemContainer>
  );
};

const PostItemContainer = styled.li`
  margin: 3rem auto;
  width: 30%;
  box-shadow: 1px 5px 15px 1px rgba(0, 0, 0, 0.2);
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  font-size: 1.4rem;
  .post-img {
    width: 100%;
    height: 100px;
    object-fit: cover;
    margin-bottom: 1.2rem;
    background-color: #acefff;
  }
  .post-info {
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    .post-title {
      font-weight: bold;
      margin-bottom: 0.5rem;
    }
    .post-description {
      height: 3rem;
    }
  }
  .user-info-container {
    padding: 0 0.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .user-profile-info {
      display: flex;
      align-items: center;
      .user-profile-img {
        width: 20px;
        height: 20px;
        border-radius: 100%;
        margin-right: 0.5rem;
      }
    }
    .views-like {
      display: flex;
      align-items: center;
      font-size: 1.2rem;

      .views {
        display: flex;
        align-items: center;
        gap: 0.2rem;
        .views_icon {
          font-size: 1.5rem;
        }
      }

      .like {
        margin-left: 0.5rem;
        display: flex;
        align-items: center;
        gap: 0.2rem;
        .like-icon {
          font-size: 1.5rem;
        }
      }
    }
  }
  .sub-info {
    padding: 0.5rem;
    font-size: 1.2rem;
    display: flex;
    justify-content: space-between;
  }
`;

export default PostItem;
