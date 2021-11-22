import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const UserForm = () => {
  const schema = yup.object({
    userId: yup.string().required(),
    userPw: yup.string().length(4).required(),
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    console.log(data);
  };
  console.log(errors);
  console.log(watch('userId'));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input placeholder='아이디' type='text' {...register('userId')} />
      {errors.userId && <p>실패</p>}
      <input placeholder='비밀번호' type='password' {...register('userPw')} />
      {errors.userPw && <p>실패</p>}
      <input type='submit' />
    </form>
  );
};

export default UserForm;
