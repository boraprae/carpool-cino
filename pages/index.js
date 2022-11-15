import * as React from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const ColorButton = styled(Button)(({ theme }) => ({
  color: "#FFFFFF",
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.1)",
  height: "50px",
  borderRadius: "10px",
  backgroundColor: "#58CAD2",
  "&:hover": {
    backgroundColor: "#45A1A8",
  },
}));

export default function Home() {
  const router = useRouter();
  const [value, setValue] = React.useState(null);
  return (
    <>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <CardMedia
          component="img"
          height="400"
          image="/assets/headweb.png"
          sx={{ position: "relative", left: 0, right: 0, bottom: 0 }}
        />
        <Typography
          sx={{
            fontStyle: "italic",
            fontWeight: 400,
            color: "white",
            fontSize: "64px",
            position: "absolute",
            left: "40%",
            top: "20%",
          }}
        >
          Carpool Cino
        </Typography>
        <Typography
          sx={{
            fontStyle: "italic",
            color: "white",
            fontSize: "24px",
            position: "absolute",
            left: "35%",
            top: "30%",
          }}
        >
          Sharing of car journeys and save your money here!
        </Typography>
        <Card
          sx={{
            backgroundColor: "white",
            boxShadow: "3px 5px 6px rgba(0, 0, 0, 0.1)",
            borderRadius: "5px",
            position: "absolute",
            left: "30%",
            top: "43%",
          }}
        >
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            sx={{ p: "16px" }}
          >
            <CardContent>
              <TextField
                id="standard-basic"
                label="Destination"
                variant="outlined"
                sx={{ mr: "16px" }}
              />
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Select Date"
                  value={value}
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
              <ColorButton variant="contained" sx={{ ml: "16px" }}>
                <SearchIcon /> Search
              </ColorButton>
            </CardContent>
          </Grid>
        </Card>
      </Stack>
     
    </>
  );
}
