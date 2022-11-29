import { AppBar, Typography, Button } from "@mui/material";
import Sidebar from "./components/sidebar";
import styles from "../styles/Home.module.css";
import CreateCarpoolCard from "./components/createCarpoolCard";
import MyBookingCard from "./components/myBookingCard";

export default function carPoolBooking() {
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
        My Carpool Booking
      </Typography>
      <MyBookingCard/>
      <MyBookingCard/>
    </main>
  );
}
