import Link from "next/link";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Grid from "@mui/material/Grid";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import ToysIcon from "@mui/icons-material/Toys";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import { useEffect, useState } from "react";
import Divider from "@mui/material/Divider";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import MenuItem from "@mui/material/MenuItem";
function Navbar() {
  //modal sign up action
  const [openSignUp, setOpenSignUp] = React.useState(false);
  const handleOpenSignUp = () => {
    setOpenSignUp(true);
  };

  const [loginState, setLoginSatet] = useState(false);

  const handleCloseSignUp = () => {
    setFullName("");
    setPhoneNum("");
    setConPassword("");
    setDateValue("");
    setGender("");
    setEmail("");
    setPassword("");
    setOpenSignUp(false);
  };

  //modal sign In action
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {

    setFullName("");
    setPhoneNum("");
    setConPassword("");
    setDateValue("");
    setGender("");
    setEmail("");
    setPassword("");
    setOpen(false);
  };
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
  const submitLoginForm = async () => {
    console.log(email + " " + password);

    if (email != "" && password != "") {
      try {

        let headersList = {
          "Accept": "*/*",
          "Content-Type": "application/json"
        }

        let bodyContent = JSON.stringify({
          "email": email,
          "password": password,
        });

        let response = await fetch("http://localhost:3000/api/authen/login", {
          method: "POST",
          body: bodyContent,
          headers: headersList
        });

        if (response.ok) {
          let data = await response.text();
          setuInfo(true);
          // console.log(data);
          handleClose();
        } else {
          throw Error("Login Error");
        }

      } catch (error) {
        console.error(error.message);
        //     res.status(500).send(error.message);
      }
    }
  };

  //!Sign Up function here!
  const submitSignUpForm = async () => {
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

    // let headersList = {
    //   "Accept": "*/*",
    // }

    if (password == conPassword) {
      if (email != "" && password != "" && fullname != "" && password != "" && phoneNum != "") {
        try {

          let headersList = {
            "Accept": "*/*",
            "Content-Type": "application/json"
          }


          let bodyContent = JSON.stringify({
            "name": fullname,
            "pass": password,
            "phone": phoneNum,
            "email": email,
            "BirthDay": dateValue,
            "gender": gender
          });

          let response = await fetch("http://localhost:3000/api/authen/signup", {
            method: "POST",
            body: bodyContent,
            headers: headersList
          });

          if (response.ok) {
            let data = await response.text();
            console.log(data);
            handleCloseSignUp();
          } else {
            throw Error("Sign Up Error");
          }

        } catch (error) {
          console.error(error.message);
          //     res.status(500).send(error.message);
        }
      }

    }


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
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 , background: "#CC8D48"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
          >
            <ToysIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                color: "white",
                fontStyle: "italic",
              }}
            >
              Carpool Cino
            </Typography>
          </Grid>

          <Grid
            container
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
          >
            <Button
              onClick={handleOpenSignUp}
              variant="text"
              sx={{
                color: "white",
                fontWeight: 700,
                fontSize: "16px",
                textTransform: "capitalize",
                mr: 2,
              }}
            >
              Sign Up
            </Button>
            <Button
              onClick={handleOpen}
              variant="outlined"
              sx={{
                color: "white",
                fontWeight: 700,
                fontSize: "16px",
                borderRadius: "15px",
                border: "1px solid #FFFFFF",
                textTransform: "capitalize",
              }}
            >
              Sign In
            </Button>
            {/* //* Modal for Sign In */}
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="parent-modal-title"
              aria-describedby="parent-modal-description"
            >
              <Box sx={{ ...style, width: 400 }}>
                <h2 id="parent-modal-title">Sign In</h2>
                <Divider />

                <TextField
                  id="standard-email-input"
                  label="Email"
                  variant="standard"
                  onChange={changeEmail}
                  value={email}
                  placeholderText={"example@sample.com"}
                  sx={{ mt: "10px", mb: "5px" }}
                />

                <TextField
                  id="standard-password-input"
                  label="Password"
                  variant="standard"
                  onChange={changePassword}
                  value={password}
                  placeholderText={"******"}
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
                    onClick={handleClose}
                  >
                    Cancel
                  </Button>
                  <ColorButton variant="container" onClick={submitLoginForm}>
                    Sign in
                  </ColorButton>
                </Grid>
              </Box>
            </Modal>
            {/* //!Modal for Sign up */}
            <Modal
              open={openSignUp}
              onClose={handleCloseSignUp}
              aria-labelledby="parent-modal-title"
              aria-describedby="parent-modal-description"
            >
              <Box sx={{ ...style, width: 650 }}>
                <h2 id="parent-modal-title">Sign Up</h2>
                <Divider />
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
                    sx={{ mt: "10px", mb: "35px", mr: "35px" }}
                  />
                  <TextField
                    id="standard-select-gender"
                    select
                    label="Select"
                    value={gender}
                    onChange={handleChangeGender}
                    variant="standard"
                    sx={{ mt: "10px", mb: "35px", mr: "35px" }}
                  >
                    {genders.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DesktopDatePicker
                    label="Date of Birth"
                    inputFormat="DD/MM/YYYY"
                    value={dateValue}
                    onChange={handleChange}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
                <Grid
                  container
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="center"
                  mt={2}
                >
                  <TextField
                    id="email-input"
                    label="Email"
                    variant="standard"
                    onChange={changeEmail}
                    value={email}
                    sx={{ mt: "10px", mb: "5px", mr: "35px" }}
                  />
                  <TextField
                    id="phone-number-input"
                    label="Phone Number"
                    variant="standard"
                    onChange={changePhoneNum}
                    value={phoneNum}
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
                  <TextField
                    id="password-input"
                    label="Password"
                    variant="standard"
                    onChange={changePassword}
                    value={password}
                    sx={{ mt: "10px", mb: "25px", mr: "35px" }}
                  />
                  <TextField
                    id="con-password-input"
                    label="Confirmed Password"
                    variant="standard"
                    onChange={changeConPassword}
                    value={conPassword}
                    sx={{ mt: "10px", mb: "25px" }}
                  />
                </Grid>

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
                    onClick={handleCloseSignUp}
                  >
                    Cancel
                  </Button>
                  <ColorButton variant="container" onClick={submitSignUpForm}>
                    Sign Up
                  </ColorButton>
                </Grid>
              </Box>
            </Modal>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
