import React from "react";
/* eslint-disable @next/next/no-img-element */
import { Button, Grid } from "@mui/material";
import { WidthFull } from "@mui/icons-material";

const SubmitButton = ({ title }: { title: String }) => {
  return (
    <Grid item md={12} xs={12}>
      <Button style={{ width:"100%"}} type="submit" variant="contained">
        {title}
      </Button>
    </Grid>
  );
};

export default SubmitButton;
