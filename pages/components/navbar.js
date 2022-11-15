import Link from "next/link";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Grid from "@mui/material/Grid";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import ToysIcon from "@mui/icons-material/Toys";

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
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
              variant="text"
              sx={{
                color: "white",
                fontWeight: 700,
                fontSize: "16px",
                textTransform: "capitalize",
                mr: 2
              }}
            >
              Sign Up
            </Button>
            <Button
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
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
