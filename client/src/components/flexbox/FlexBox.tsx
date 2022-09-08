import React from "react";
import { Box } from "@mui/material";

const FlexBox = ({ children, ...props }: { children:any; props:any }) => (
  <Box display="flex" {...props}>
    {children}
  </Box>
);

export default FlexBox;
