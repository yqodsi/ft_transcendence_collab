import React from "react";

import {
  RowOne,
  RowTwo,
  Name,
  Status,
  Column,
  LiveButton,
  Button1,
  Picture,
  Card,
} from "../../styles/profile";

import { ItemsDiv } from "../../components/globalComponents/items";

export const FirstSection = () => {
  const data = {
    username: "del-alj",
    status: "online",
    rank: 5,
    wins: 12,
    losses: 3
  };
  return (
    <>
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
          <ItemsDiv title={"Rank"} value={data.rank} />
          <ItemsDiv title={"wins"} value={data.wins} />
          <ItemsDiv title={"Losses"} value={data.losses} />
        </Card>
      </RowTwo>
    </>
  );
};
