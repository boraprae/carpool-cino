import * as React from "react";
import { AppBar, Typography, Button } from "@mui/material";
import Sidebar from "./components/sidebar";
import styles from "../styles/Home.module.css";
import CreateCarpoolCard from "./components/createCarpoolCard";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import MenuItem from "@mui/material/MenuItem";

export default function editProfileInfo() {
  //Sign Up value
  const [emailSignUp, setEmailSignUp] = React.useState("");
  const [passwordSignUp, setPasswordSignUp] = React.useState("");
  const [fullname, setFullName] = React.useState("");
  const [phoneNum, setPhoneNum] = React.useState("");
  const [conPassword, setConPassword] = React.useState("");
  //Date Picker
  const [dateValue, setDateValue] = React.useState(dayjs());

  const handleChange = (newValue) => {
    setDateValue(newValue);
  };
  const changePhoneNum = (event) => {
    setPhoneNum(event.target.value);
  };
  const changeFullName = (event) => {
    setFullName(event.target.value);
  };
  const changeConPassword = (event) => {
    setConPassword(event.target.value);
  };
  //Gender selector
  const [gender, setGender] = React.useState("Male");
  const genders = [
    {
      value: "Male",
      label: "Male",
    },
    {
      value: "Female",
      label: "Female",
    },
  ];

  const handleChangeGender = (event) => {
    setGender(event.target.value);
  };

  //Sign in value
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const changeEmail = (event) => {
    setEmail(event.target.value);
  };
  const changePassword = (event) => {
    setPassword(event.target.value);
  };

  //!Sign in function here!
  const submitLoginForm = () => {
    console.log(email + " " + password);
    handleClose();
  };

  //!Sign Up function here!
  const submitSignUpForm = () => {
    console.log(
      email +
        " " +
        password +
        "Name: " +
        fullname +
        "Confirmed password: " +
        conPassword +
        "Date of birth: " +
        dateValue +
        "Phone Number: " +
        phoneNum +
        "Gender: " +
        gender
    );
    handleCloseSignUp();
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
          mb: 2,
        }}
      >
        My Profile
      </Typography>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            mx={2}
          >
            <Grid
              item
              direction="column"
              justifyContent="center"
              alignItems="center"
              mr={2}
            >
              <Avatar
                alt="Cindy Baker"
                src="/assets/profileImg.jpg"
                sx={{ width: 150, height: 150 , ml: 1.5}}
              />
              <Button
                variant="outlined"
                sx={{
                  borderColor: "#8F8F8F",
                  color: "#8F8F8F",
                  height: "30px",
                  fontSize: "12px",
                  padding: "16",
                  mt: 2,
                }}
              >
                Change Profile Image
              </Button>
            </Grid>
            <Grid
              item
              direction="column"
              justifyContent="flex-start"
              alignItems="center"
            >
              <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
              >
                <TextField
                  id="standard-name-input"
                  label="Name"
                  variant="standard"
                  onChange={changeFullName}
                  value={fullname}
                  sx={{ mt: "10px", mb: "5px", mr: "35px" }}
                />
                <TextField
                  id="email-input"
                  label="Email"
                  variant="standard"
                  onChange={changeEmail}
                  value={email}
                  sx={{ mt: "10px", mb: "5px", mr: "35px" }}
                />
              </Grid>
              <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                mt={2}
                mb={3}
              >
                <TextField
                  id="phone-number-input"
                  label="Phone Number"
                  variant="standard"
                  onChange={changePhoneNum}
                  value={phoneNum}
                  sx={{ mt: "10px" }}
                />
                <TextField
                  id="standard-select-gender"
                  select
                  label="Select"
                  value={gender}
                  onChange={handleChangeGender}
                  variant="standard"
                  sx={{ mt: "10px", mx: "35px" }}
                >
                  {genders.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DesktopDatePicker
                    label="Date of Birth"
                    inputFormat="DD/MM/YYYY"
                    value={dateValue}
                    onChange={handleChange}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </Grid>
              <Divider />
              <Grid
                container
                direction="row"
                justifyContent="flex-end"
                alignItems="center"
                mt={2}
              >
                <ColorButton variant="container">Edit</ColorButton>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </main>
  );
}
