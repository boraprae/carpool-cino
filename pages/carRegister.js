import { AppBar} from "@mui/material";
import Sidebar from "./components/sidebar";
import styles from "../styles/Home.module.css";
import CreateCarpoolCard from "./components/createCarpoolCard";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { border, color } from "@mui/system";
import Divider from "@mui/material/Divider";
import { green, grey, red } from "@mui/material/colors";
import { colors } from "@mui/material";

const AddCarButton = styled(Button)(({ theme }) => ({
  color: "#FFFFFF",
  fontSize: "14px",
  fontWeight: "bold",
  textTransform: "capitalize",
  height: "42px",
  width: "140px",
  borderRadius: "10px",
  padding: 16,
  backgroundColor: "#58CAD2",
  "&:hover": {
    backgroundColor: "#A9773F",
  },
}));

const EditButton = styled(Button)(({ theme }) => ({
  color: "#FFFFFF",
  fontSize: "14px",
  fontWeight: "bold",
  textTransform: "capitalize",
  height: "42px",
  width: "97px",
  borderRadius: "10px",
  padding: 16,
  backgroundColor: "#58CAD2",
  "&:hover": {
    backgroundColor: "#A9773F",
  },
}));

export default function carRegister() {
  return (
    <main className={styles.main}>
      <Sidebar />
      <Typography
        sx={{
          fontWeight: 700,
          fontSize: "24px",
          lineHeight: "31px",
          color: "#504E4E",
        }}
      >
        My Car
      </Typography>
     

      {/* Button */}
      <AddCarButton
        sx={{
          mt: 2,
        }}
      >
        Add car
      </AddCarButton>

      {/* Media Card */}
      <Card
        sx={{
          maxWidth: 1038,
          mt: 4,
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.1)",
          borderRadius: "15px",
          mr: 5,
        }}
      >
        <CardMedia
          component="img"
          height="200"
          image="/assets/headweb.png"
          alt="car1"
        />
        <CardContent>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="flex-start"
          >
            <Stack
              direction="column"
              justifyContent="flex-start"
              alignItems="flex-start"
            >
              <Typography sx={{ fontSize: "16px", mt: 1, fontWeight: "bold" }}>
                Date
              </Typography>
              <Typography sx={{ fontSize: "14px" }}>2 Nov 2022</Typography>
              <Typography sx={{ fontSize: "16px", mt: 1, fontWeight: "bold" }}>
                Carbrand
              </Typography>
              <Typography sx={{ fontSize: "14px" }}>Mitsubishi</Typography>
            </Stack>

            <Stack
              direction="column"
              justifyContent="flex-start"
              alignItems="flex-start"
            >
              <Typography sx={{ fontSize: "16px", mt: 1, fontWeight: "bold" }}>
                Origin
              </Typography>
              <Typography sx={{ fontSize: "14px" }}>
                Mae Fah Luang University
              </Typography>

              <Typography sx={{ fontSize: "16px", mt: 1, fontWeight: "bold" }}>
                License plate number
              </Typography>
              <Typography sx={{ fontSize: "14px" }}>
                กขค 123 เชียงราย
              </Typography>
            </Stack>
            <Stack
              direction="column"
              justifyContent="flex-start"
              alignItems="flex-start"
            >
              <Typography sx={{ fontSize: "16px", mt: 1, fontWeight: "bold" }}>
                Destination
              </Typography>
              <Typography sx={{ fontSize: "14px" }}>
                Central Plaza Chiang Rai
              </Typography>
              <Typography sx={{ fontSize: "16px", mt: 1, fontWeight: "bold" }}>
                Price/Seat
              </Typography>
              <Typography sx={{ fontSize: "14px" }}>THB 220</Typography>
            </Stack>
            <Stack
              direction="column"
              justifyContent="flex-start"
              alignItems="flex-start"
            >
              <Typography sx={{ fontSize: "16px", mt: 1, fontWeight: "bold" }}>
                Seat
              </Typography>
              <Typography sx={{ fontSize: "14px" }}>1</Typography>
            </Stack>
          </Stack>

          <Divider sx={{ mb: 2, mt: 2 }} />
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography sx={{ fontSize: "14px" }}>
              Lastest Update: 18/11/2022
            </Typography>
            <EditButton>Edit</EditButton>
          </Stack>
        </CardContent>
      </Card>
    </main>
  );
}
