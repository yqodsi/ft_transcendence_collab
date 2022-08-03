import React from "react";

import { Items, Title, Number } from "../../styles/profile";

export const ItemsDiv = (props) => {
  const {title, value} = props;
  return (
    <Items>
      <Title>{title}</Title>
      <Number>{value}</Number>
    </Items>
  );
};
