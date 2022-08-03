import React from "react";
import { Component } from "../../styles/profile";
import { Header } from "../../components/header";
import { FirstSection } from "./firstSection";
import { SecondSection } from "./SecondSection";

import { DivMain } from "../../styles/profile";


const profile = () => {
  // const data = {
  //   username: "del-alj",
  //   status: "online",
  //   rank: 5,
  //   wins: 12,
  //   losses: 3
  // };
  // const listMatch = [
  //   {
  //     user1: "del-alj",
  //     user2: "ael-makk",
  //     status: "Win",
  //     score: "3 vs 0"
  //   },
  //   {
  //     user1: "del-alj",
  //     user2: "ael-makk",
  //     status: "Loss",
  //     score: "3 vs 0"
  //   }
  // ];
  
  return (
    <Component>
      <Header />
      <DivMain>
        <FirstSection />
        <SecondSection />
      </DivMain>
    </Component>
  );
};

export default profile;
