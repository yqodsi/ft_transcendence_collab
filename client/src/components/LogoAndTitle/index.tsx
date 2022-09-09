import React from "react";
/* eslint-disable @next/next/no-img-element */
import { Box, Grid, Stack } from "@mui/material";
import FlexRowAlign from "components/flexbox/FlexRowAlign";
import { H1 } from "components/Typography";
const LogoAndTitle = ({ title}: { title: String; }) => {
  return (
    <Grid item md={6} xs={12}>
      <Stack alignItems="center" justifyContent="center" height="100%">
        <FlexRowAlign  padding={4}>
        <img src="/static/images/logo.png" width={80} alt="Logo" style={{ transform: "rotate(25deg)"}} />
          <H1  width={"200px"} fontWeight={700} fontSize={24} >
            {title}
          </H1>
        </FlexRowAlign>
      </Stack>
    </Grid>
  );
};

export default LogoAndTitle;
