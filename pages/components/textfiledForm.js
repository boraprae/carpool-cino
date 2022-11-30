import * as React from "react";
import { alpha, styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";

const CssTextField = styled(TextField)({
  backgroundColor: "#E7E7E7",
  borderRadius: "20px",
  height: "50px",
  width: "250px",
  borderColor: "transparent",
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "transparent",
    },
    "&:hover fieldset": {
      borderColor: "transparent",
    },
    "&.Mui-focused fieldset": {
      borderColor: "transparent",
    },
  },
});

export default function TextFieldForm() {
  return (
    <>
      <CssTextField
        id="custom-css-outlined-input"
      />
    </>
  );
}
