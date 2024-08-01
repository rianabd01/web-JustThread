import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// import { asyncSetAuthUser } from '../states/authUser/action';
import { asyncRegisterUser } from '../states/users/action';
import Register from '../components/Register';

export default function RegisterPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onRegister = ({ name, email, password }) => {
    dispatch(asyncRegisterUser({ name, email, password }));

    navigate('/login');
  };
  return (
    <section className="login-wrap">
      <Register register={onRegister} />
    </section>
  );
}
