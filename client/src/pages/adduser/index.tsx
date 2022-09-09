import React from "react";
/* eslint-disable @next/next/no-img-element */
import { Box, Card, Grid } from "@mui/material";
import logoping from "../../public/images/logo.png";

import ImageInput from "components/ImageInput";
import SubmitButton from "components/SubmitButton";
import InputField from "components/InputField.tsx";
import LogoAndTitle from "components/LogoAndTitle";
import VerificationEmailBox from "pages-fields/VerificationEmailBox";
import FlexRowAlign from "components/flexbox/FlexRowAlign";

const AddUser = () => {
  return (
    <FlexRowAlign
      style={{ alignSelf: "center" }}
      flexDirection="column"
      sx={{
        height: {
          sm: "95vh",
        },

      }}
    >
      <div>

    <Box p={4} pt={12} pb={4}  >
      <form
        onSubmit={() => {
          console.log("submit");
        }}
      >
        <Grid container spacing={3} sx={{
      //  flexDirection: {sm:"column-reverse"}
      }}
      >
        <Grid item md={6} xs={12}>
            <Card
              sx={{
                padding: 3,
                minHeight: 400,
                minWidth: "400px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
              }}
            >
             
              <Grid
              container
                sx={{
                  padding: 3,
                  paddingTop: 5,
                  width: "400px",
                  minHeight: 180,

                }}
              >
                <InputField name="userlName" label="UserName" />
                <VerificationEmailBox />
                <SubmitButton title={"Create User"} />
              </Grid>
            </Card>
          </Grid>
          <Grid item md={6} xs={12}>
            <Card
              sx={{
                padding: 3,
                minHeight: 400,
                minWidth: "400px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
              }}
            >
                 <LogoAndTitle title={"Complet Profile"} />
              <ImageInput />
              {/* change place in mobile */}
          
            </Card>
          </Grid>
       
        </Grid>
      </form>
    </Box>
    </div> </FlexRowAlign>
  );
};

export default AddUser;
