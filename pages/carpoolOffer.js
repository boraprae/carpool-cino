import { AppBar, Typography, Button } from "@mui/material";
import Sidebar from "./components/sidebar";
import styles from "../styles/Home.module.css";
import CreateCarpoolCard from "./components/createCarpoolCard";
import * as React from "react";

export default function carPoolOffer() {
   const [carpoolOffer, setCarpoolOffer] = React.useState([]);

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
        My Carpool Offers
      </Typography>
      <Button
        variant="contained"
        sx={{ backgroundColor: "#58CAD2", px: 2, py: 1, my: 2 }}
      >
        Create Offer
      </Button>
      <CreateCarpoolCard/>
      <CreateCarpoolCard/>
    </main>
  );
}
