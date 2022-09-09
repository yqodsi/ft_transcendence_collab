import { Box, Grid, useMediaQuery } from "@mui/material";
import FlexRowAlign from "components/flexbox/FlexRowAlign";

// --------------------------------------------------------------
const RootLayout = ({ children, imgLink }: { children:any, imgLink:any }) => {
  const downMd = useMediaQuery((theme) => theme?.breakpoints?.down("md"));
  return (
    <Grid container height="100vh">
      <Grid item md={6} xs={12} order={downMd ? 2 : 1}>
        <FlexRowAlign
          sx={{
            height: "100%",
            background: "#A2E4F8"
          }}
        >
          <Box>
            <img width="100%" alt="sign in" src={imgLink} />
          </Box>
        </FlexRowAlign>
      </Grid>

      <Grid item md={6} xs={12} order={downMd ? 1 : 2}>
        {children}
      </Grid>
    </Grid>
  );
};

export default RootLayout;
