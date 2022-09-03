import { Theme } from "@mui/material";

export const THEMES = {
  LIGHT: "light",
  DARK: "dark",
};
export const lightTheme = (theme: Theme) => theme.palette.mode === "light";
export const secondarySideBarWidth = 215;
export const secondarySideBarGap = 80;

// export const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
//   ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
//   : "http://localhost:3000";

// export const url = `${baseUrl}/api/trpc`;
