import React from "react";
/* eslint-disable @next/next/no-img-element */
import { Button, Grid } from "@mui/material";

const SubmitButton = ({ title }: { title: String }) => {
  return (
    <Grid item xs={12}>
      <Button type="submit" variant="contained">
        {title}
      </Button>
    </Grid>
  );
};

export default SubmitButton;
