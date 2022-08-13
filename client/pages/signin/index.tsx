import React from "react";
import { Component, Title, ButtonDiv } from "../../styles/signin";
const Signin = () => {
  const [disable, setDisable] = React.useState(false);
  const connect = () => {
    // window.location.href = `${process.env.REACT_APP_SERVER_URL}/api`;
    window.location.href = `http://0.0.0.0:3333/api/auth/login`;
    setDisable(true);
    console.log("get data from api intra");
  }
  return (
<Component>
  <Title><h1>ping pong</h1></Title>
  <ButtonDiv><button disabled={disable} onClick={connect}>Sign in</button></ButtonDiv>   
  </Component>);
};

export default Signin;