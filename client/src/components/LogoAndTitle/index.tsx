import React from "react";
/* eslint-disable @next/next/no-img-element */
import { Box, Grid, Stack } from "@mui/material";
import { H1 } from "components/Typography";

const LogoAndTitle = ({ title, logo }: { title: String; logo: any }) => {
  return (
    <Grid item md={6} xs={12}>
      <Stack alignItems="center" justifyContent="center" height="100%">
        <Box textAlign="center" maxWidth={550} width="100%" padding={4}>
          <img src={String(logo)} width={40} alt="Logo" />
          <H1 fontWeight={700} fontSize={24} mt={2}>
            {title}
          </H1>
        </Box>
      </Stack>
    </Grid>
  );
};

export default LogoAndTitle;
