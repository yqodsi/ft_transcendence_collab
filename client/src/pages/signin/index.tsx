import React from "react";
import { Box, Button } from "@mui/material";
import RootLayout from "pages-fields/RootLayout";
import FlexRowAlign from "components/flexbox/FlexRowAlign";
import { H1, Paragraph } from "components/Typography";

const Singin = () => {
  return (
    <RootLayout imgLink="/static/images/signin.png">
      <FlexRowAlign height="100%">
        <Box textAlign="center" maxWidth={420} width="100%" padding={4}>
          <img src="/static/images/logo.png" width={150} alt="Logo" style={{ transform: "rotate(25deg)"}} />
          <H1 fontWeight={700} mt={2}>
            Sign in to PingPong</H1>
          <Paragraph color="text.disabled" fontWeight={500}>
            Connect whit you 42 account</Paragraph>

          <Button sx={{
            marginTop: "20px",
          }} variant="contained" fullWidth>
            Sign in
          </Button>

        </Box>
      </FlexRowAlign>
    </RootLayout>
  );
};

export default Singin;
