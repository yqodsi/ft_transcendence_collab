import React from "react";
/* eslint-disable @next/next/no-img-element */
import { Box, Card, Grid } from "@mui/material";
import logoping from "../../utils/images/logo.png";
import ImageInput from "components/ImageInput";
import SubmitButton from "components/SubmitButton";
import InputField from "components/InputField.tsx";
import LogoAndTitle from "components/LogoAndTitle";
import VerificationEmailBox from "pages-fields/VerificationEmailBox";
import FlexRowAlign from "components/flexbox/FlexRowAlign";

const AddUser = () => {
  return (
    // <FlexRowAlign
    //   style={{ alignSelf: "center" }}
    //   flexDirection="column"
    //   sx={{
    //     height: {
    //       sm: "95vh",
    //     },
       
    //   }}
    // >
    //   <div style={{border:"1px solid black", display:"block", width:"95vh"}}>
 
    <Box pt={2} pb={4}>
      <Grid container spacing={3}>
        <Grid item md={4} xs={12}>
          <Card
            sx={{
              padding: 3,
              minHeight: 400,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <ImageInput />
            {/* change place in mobile */}
            <VerificationEmailBox />
          </Card>
        </Grid>
        <Grid item md={8} xs={12}>
          <Card
            sx={{
              padding: 3,
            }}
          >
            <LogoAndTitle title={"Complet Profile"} logo={logoping} />
            <form
              onSubmit={() => {
                console.log("submit");
              }}
            >
              <Grid container spacing={3}>
                <InputField name="userlName" label="UserName" />
                <SubmitButton title={"Create User"} />
              </Grid>
            </form>
          </Card>
        </Grid>
      </Grid>
    </Box> 
    //  </div> </FlexRowAlign>
  );
};

export default AddUser;
