import * as React from "react";
import { AppBar, Typography, Button } from "@mui/material";
import Sidebar from "./components/sidebar";
import styles from "../styles/Home.module.css";
import CreateCarpoolCard from "./components/createCarpoolCard";
import Stack from "@mui/material/Stack";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { colors } from '@mui/material';


export default function drivingHistory() {
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
  
  const [carsInfo, setCarsinfo] = React.useState([
    { date: date, Origin: 'Mae Fah Luang University', Destination: 'Central Plaza Chiang Rai', Seat: '1', Carbrand: 'Ford', LicensePlate: 'กขค 123 เชียงราย', Price_seat: '230', id: 100 },
    { date: date, Origin: 'Mae Fah Luang University', Destination: 'Central Plaza Chiang Rai', Seat: '2', Carbrand: 'BMW', LicensePlate: 'กขค 554 เชียงราย', Price_seat: '460', id: 101 },
    { date: date, Origin: 'Mae Fah Luang University', Destination: 'Central Plaza Chiang Rai', Seat: '3', Carbrand: 'Lambogini', LicensePlate: 'กขค 654 เชียงราย', Price_seat: '690', id: 102 },
  ]);

  const listCard = carsInfo.map((e) => (
    <Card sx={{
      width: 863,
      mr: 6,
      mt: 3,
      backgroundColor: "#FFFFFF"
    }}>
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
            <Typography sx={{ fontSize: "14px" }}>
              {e.date}
            </Typography>
            <Typography sx={{ fontSize: "16px", mt: 1, fontWeight: "bold" }}>
              Carbrand
            </Typography>
            <Typography sx={{ fontSize: "14px" }}>{e.Carbrand}</Typography>
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
              {e.Origin}
            </Typography>

            <Typography sx={{ fontSize: "16px", mt: 1, fontWeight: "bold" }}>
              License plate number
            </Typography>
            <Typography sx={{ fontSize: "14px" }}>{e.LicensePlate}</Typography>
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
              {e.Destination}
            </Typography>
            <Typography sx={{ fontSize: "16px", mt: 1, fontWeight: "bold" }}>
              Price/Seat
            </Typography>
            <Typography sx={{ fontSize: "14px" }}>
              THB {e.Price_seat}
            </Typography>
          </Stack>
          <Stack
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
          >
            <Typography sx={{ fontSize: "16px", mt: 1, fontWeight: "bold" }}>
              Seat
            </Typography>
            <Typography sx={{ fontSize: "14px" }}>
              {e.Seat}
            </Typography>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  ))
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
        My Driving History
      </Typography>

      {/* Driving History */}
      <Stack
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >

        <CardContent>
          {listCard}
        </CardContent>
      </Stack>

    </main>
  );
}
