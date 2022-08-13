import React from "react";
import {
  Div,
  DivHeader,
  Logo,
  DivList,
  Button,
  Settings
} from "../../styles/profile";

export const Header = () => {
  const data = {
    username: "del-alj",
    status: "online",
    rank: 5,
    wins: 12,
    losses: 3
  };

  return (
      <Div>
        <DivHeader>
          <Logo>
            <p>ping pong</p>
          </Logo>
          <DivList>
            {" "}
            <Button>{data.username}</Button>
            <Settings />
          </DivList>
        </DivHeader>
      </Div>

  );
};

