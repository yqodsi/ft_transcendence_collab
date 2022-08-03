import React from "react";

import { Titel, TitelsDiv, MatchItems } from "../../styles/profile";

export const SecondSection = () => {
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
    },
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
      },
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
      },
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
      },
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
  );
};
