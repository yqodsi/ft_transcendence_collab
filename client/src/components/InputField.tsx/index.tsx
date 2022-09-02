import React from "react";
/* eslint-disable @next/next/no-img-element */
import { Grid } from "@mui/material";
import AppTextField from "components/input-fields/AppTextField";

const InputField = ({ name, label }: { name: String; label: String }) => {
  return (
    <Grid item sm={6} xs={12}>
      <AppTextField fullWidth name={name} label={label} />
    </Grid>
  );
};
export default InputField;
