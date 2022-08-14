import React from 'react';
import { Component, Title, ButtonDiv } from '../../styles/signin';
import Form from '../../components/register/index';

export default function Registration() {
  const connect = () => {
    // window.location.href = `${process.env.REACT_APP_SERVER_URL}/api`;
    window.location.href = `http://0.0.0.0:3333/api/auth/login`;
    setDisable(true);
    console.log('get data from api intra');
  };
  return (
    <Component>
      <Title>complet profile</Title>
      <Form />
    </Component>
  );
}
