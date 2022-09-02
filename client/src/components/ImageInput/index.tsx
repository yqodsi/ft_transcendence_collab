import React from "react";
/* eslint-disable @next/next/no-img-element */
import { IconButton } from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";
import { Small } from "components/Typography";
import { ButtonWrapper, UploadButton } from "./styles";

const ImageInput = () => {
  return (
    <>
      <ButtonWrapper>
        <UploadButton>
          <label htmlFor="upload-btn">
            <input
              accept="image/*"
              id="upload-btn"
              type="file"
              style={{
                display: "none",
              }}
            />
            <IconButton component="span">
              <PhotoCamera
                sx={{
                  fontSize: 26,
                  color: "white",
                }}
              />
            </IconButton>
          </label>
        </UploadButton>
      </ButtonWrapper>
      <Small
        marginTop={2}
        maxWidth={200}
        lineHeight={1.9}
        display="block"
        textAlign="center"
        color="text.secondary"
      >
        Allowed *.jpeg, *.jpg, *.png, *.gif max size of 3.1 MB
      </Small>{" "}
    </>
  );
};

export default ImageInput;
