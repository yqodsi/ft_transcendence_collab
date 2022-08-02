import React from "react";
import {
  Component,
  Div,
  DivHeader,
  Logo,
  DivList,
  Button,
  Settings
} from "../../styles/profile";
import {
  DivMain,
  RowOne,
  RowTwo,
  Name,
  Status,
  Column,
  LiveButton,
  Button1,
  Titel
} from "../../styles/profile";

import {
  Picture,
  Card,
  Items,
  Title,
  Number,
  TitelsDiv,
  MatchItems
} from "../../styles/profile";

const profile = () => {
  const data = {
    username: "del-alj",
    status: "online",
    rank: 5,
    wins: 12,
    losses: 3
  };
  const listMatch = [
    {
      user1: "del-alj",
      user2: "ael-makk",
      status: "Win",
      score: "3 vs 0"
    },
    {
      user1: "del-alj",
      user2: "ael-makk",
      status: "Loss",
      score: "3 vs 0"
    }
  ];
  return (
    <Component>
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
      <DivMain>
        <RowOne>
          <Column>
            <Name>{data.username}</Name>
            {/* for other users        */}
            {/* <Status> {`(${data.status})`}</Status> */}
          </Column>

          {data.username == "del-alj" ? (
            <Column>
              <LiveButton>
                <div></div>
                Live
              </LiveButton>
              <Button1>follow</Button1>
            </Column>
          ) : (
            <Column>
              <Button1> play</Button1>
            </Column>
          )}
        </RowOne>
        <RowTwo>
          <Picture />
          <Card>
            <Items>
              <Title>Rank</Title>
              <Number>{data.rank}</Number>
            </Items>
            <Items>
              <Title>wins</Title>
              <Number>{data.wins}</Number>
            </Items>
            <Items>
              <Title>Losses</Title>
              <Number>{data.losses}</Number>
            </Items>
          </Card>
        </RowTwo>
        <div style={{ marginTop: "3em" }}>
          <Titel>Matches</Titel>
          <div
            style={{
              marginTop: "6em",
              display: "flex",
              alignItems: "center",
              flexDirection: "column"
            }}
          >
            <TitelsDiv>
              <div>
                <p></p>
                <p>user1</p>
                <p>user2</p>
              </div>
              <div>
                <p>status</p>
                <p>score</p>
              </div>
            </TitelsDiv>
            {
              <div
                style={{
                  width: "100%",
                  alignItems: "center",
                  display: "flex",
                  flexDirection: "column"
                }}
              >
                {listMatch.map((match, index) => (
                  <MatchItems key={`match${index}`}>
                    <div>
                      <p>{index}</p>
                      <p>{match.user1}</p>
                      <p>{match.user2}</p>
                    </div>
                    <div>
                      <p>{match.status}</p>
                      <p>{match.score}</p>
                    </div>
                  </MatchItems>
                ))}
              </div>
            }
          </div>
        </div>
      </DivMain>
    </Component>
  );
};

export default profile;
