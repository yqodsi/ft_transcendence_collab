import React from "react";
/* eslint-disable @next/next/no-img-element */
import { Box, Switch } from "@mui/material";
import { Small, Tiny } from "components/Typography";
import { SwitchWrapper } from "./styles";
const VerificationEmailBox = () => {
  return (
    <Box maxWidth={250} marginTop={5} marginBottom={1}>
      <SwitchWrapper>
        <Small display="block" fontWeight={600}>
          Email Verified
        </Small>
        <Switch defaultChecked />
      </SwitchWrapper>
      <Tiny display="block" color="text.secondary" fontWeight={500}>
        Disabling this will automatically send the user a verification email
      </Tiny>
    </Box>
  );
};

export default VerificationEmailBox;
