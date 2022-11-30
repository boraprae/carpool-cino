import * as React from "react";
import { AppBar, Typography, Button } from "@mui/material";
import Sidebar from "./components/sidebar";
import styles from "../styles/Home.module.css";
import CreateCarpoolCard from "./components/createCarpoolCard";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import dayjs from "dayjs";

export default function carPoolOffer() {
  const [carpoolOffer, setCarpoolOffer] = React.useState([]);
  //modal sign up action
  const [openModal, setOpenModal] = React.useState(false);
  const handleOpenModal = () => {
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  //Sign Up value
  const [carInfo, setCarInfo] = React.useState("");
  const [maxSeat, setMaxSeat] = React.useState("");
  const [origin, setOrigin] = React.useState("");
  const [destination, setDestination] = React.useState("");
  const [departureTime, setDepartureTime] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  //Date Picker
  const [dateValue, setDateValue] = React.useState(dayjs());
  const handleChange = (newValue) => {
    setDateValue(newValue);
  };
  const changeCarInfo = (event) => {
    setCarInfo(event.target.value);
  };
  const changeMaxSeat = (event) => {
    setMaxSeat(event.target.value);
  };

  const changeOrigin = (event) => {
    setOrigin(event.target.value);
  };

  const changeDestination = (event) => {
    setDestination(event.target.value);
  };

  const changeDrpartureTime = (event) => {
    setDepartureTime(event.target.value);
  };

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

  //modal style
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: "0px 4px 5px 1px rgba(0, 0, 0, 0.02)",
    borderRadius: "15px",
    pt: 2,
    px: 4,
    pb: 3,
  };

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
        onClick={handleOpenModal}
      >
        Create Offer
      </Button>
      <CreateCarpoolCard />
      <CreateCarpoolCard />

      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 650 }}>
          <Typography
            id="parent-modal-title"
            sx={{
              color: "#504E4E",
              fontSize: "24px",
              fontWeight: "bold",
              py: 2,
            }}
          >
            Create Offer
          </Typography>
          <Divider />
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
          >
            <TextField
              id="standard-name-input"
              label="Car Information"
              variant="standard"
              onChange={changeCarInfo}
              value={carInfo}
              sx={{ mt: "10px", mb: "5px", mr: "35px" }}
            />
            <TextField
              id="standard-name-input"
              label="Max Seats"
              variant="standard"
              onChange={changeMaxSeat}
              value={maxSeat}
              sx={{ mt: "10px", mb: "5px", mr: "35px" }}
            />
          </Grid>
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            mt={2}
          >
            <TextField
              id="email-input"
              label="Origin"
              variant="standard"
              onChange={changeOrigin}
              value={origin}
              sx={{ mt: "10px", mb: "5px", mr: "35px" }}
            />
            <TextField
              id="phone-number-input"
              label="Destination"
              variant="standard"
              onChange={changeDestination}
              value={destination}
              sx={{ mt: "10px" }}
            />
          </Grid>
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            mt={2}
          >
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DesktopDatePicker
                label="Departure date"
                inputFormat="DD/MM/YYYY"
                value={dateValue}
                onChange={handleChange}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
            <TextField
              id="con-password-input"
              label="Departure time"
              variant="standard"
              onChange={changeDrpartureTime}
              value={departureTime}
              sx={{ mt: "10px", mb: "25px", ml: "20px" }}
            />
          </Grid>
          <TextField
            id="con-password-input"
            label="Description"
            variant="standard"
            onChange={changeDrpartureTime}
            value={departureTime}
            sx={{ mt: "10px", mb: "25px" }}
          />
          <Divider />
          <Grid
            container
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
            mt={2}
          >
            <Button
              variant="contained"
              sx={{
                borderRadius: "10px",
                backgroundColor: "#999999",
                height: "50px",
                mr: 1,
              }}
              onClick={handleCloseModal}
            >
              Cancel
            </Button>
            <ColorButton variant="container">Sign Up</ColorButton>
          </Grid>
        </Box>
      </Modal>
    </main>
  );
}
