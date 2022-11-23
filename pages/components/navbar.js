import Link from "next/link";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Grid from "@mui/material/Grid";
import Toolbar from "@mui/material/Toolbar";
// import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
// import Menu from "@mui/material/Menu";
// import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
// import Avatar from "@mui/material/Avatar";
// import Tooltip from "@mui/material/Tooltip";
// import MenuItem from "@mui/material/MenuItem";
// import AdbIcon from "@mui/icons-material/Adb";
import ToysIcon from "@mui/icons-material/Toys";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import TextFieldForm from "./textfiledForm";
import { styled } from "@mui/material/styles";
import Divider from "@mui/material/Divider";

function Navbar() {
  //modal sign In action
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
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

  //Sign in function here
  const submitLoginForm = () => {
    console.log(email + " " + password);
    handleClose();
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
    // <nav>
    //   <Link href="/"> Home</Link>
    //   <Link href="/about"> About</Link>
    // </nav>
    <AppBar position="fixed" sx={{ background: "#CC8D48" }}>
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
              onClick={handleOpen}
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
            {/* //! Modal for Sign In */}
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="parent-modal-title"
              aria-describedby="parent-modal-description"
            >
              <Box sx={{ ...style, width: 400 }}>
                <h2 id="parent-modal-title">Sign In</h2>
                <Divider />
                <Typography
                  sx={{
                    fontWeight: 700,
                    fontSize: "18px",
                    color: "#504E4E",
                    mt: 2,
                    mb: 1,
                  }}
                >
                  Email
                </Typography>
                <TextFieldForm
                  placeholderText={"example@sample.com"}
                  onChange={changeEmail}
                  value={email}
                />
                <Typography
                  sx={{
                    fontWeight: 700,
                    fontSize: "18px",
                    color: "#504E4E",
                    mt: 2,
                    mb: 1,
                  }}
                >
                  Password
                </Typography>
                <TextFieldForm
                  placeholderText={"******"}
                  sx={{ mb: 2 }}
                  onChange={changePassword}
                  value={password}
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
                  >
                    Cancel
                  </Button>
                  <ColorButton variant="container" onClick={submitLoginForm}>
                    Sign in
                  </ColorButton>
                </Grid>
              </Box>
            </Modal>
            {/* //!Modal for Sign up
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="parent-modal-title"
              aria-describedby="parent-modal-description"
            >
              <Box sx={{ ...style, width: 400 }}>
                <h2 id="parent-modal-title">Sign Up</h2>
                <Divider />
                <Grid
                  container
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography
                    sx={{
                      fontWeight: 700,
                      fontSize: "18px",
                      color: "#504E4E",
                      mt: 2,
                      mb: 1,
                    }}
                  >
                    Name
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: 700,
                      fontSize: "18px",
                      color: "#504E4E",
                      mt: 2,
                      mb: 1,
                    }}
                  >
                    Date of Birth
                  </Typography>
                </Grid>
                <Grid
                  container
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <TextFieldForm placeholderText={"example@sample.com"} />
                </Grid>

                <Typography
                  sx={{
                    fontWeight: 700,
                    fontSize: "18px",
                    color: "#504E4E",
                    mt: 2,
                    mb: 1,
                  }}
                >
                  Password
                </Typography>
                <TextFieldForm placeholderText={"******"} sx={{ mb: 2 }} />
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
                  >
                    Cancel
                  </Button>
                  <ColorButton variant="container">Sign in</ColorButton>
                </Grid>
              </Box>
            </Modal> */}
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
