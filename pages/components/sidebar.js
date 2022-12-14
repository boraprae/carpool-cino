import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { useRouter } from "next/router";

const drawerWidth = 240;

export default function Sidebar() {
  const router = useRouter();
  const myCarpoolPath = ["/carpoolBooking", "/carpoolOffer"];
  const myCarPath = ["/carRegister", "/drivingHistory"];
  return (
    <>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <Typography
            sx={{
              fontWeight: "700",
              fontSize: "16px",
              color: "#504E4E",
              px: 2,
              pt: 3,
            }}
          >
            My Carpool
          </Typography>
          <List>
            {["Carpool Booking", "Carpool Offers"].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton
                  onClick={() => router.push(myCarpoolPath[index])}
                >
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Typography
            sx={{
              fontWeight: "700",
              fontSize: "16px",
              color: "#504E4E",
              px: 2,
              pt: 3,
            }}
          >
            My Account
          </Typography>
          <ListItem disablePadding>
            <ListItemButton onClick={() => router.push("/editProfileInfo")}>
              <ListItemText primary={"Edit Profile Information"} />
            </ListItemButton>
          </ListItem>
          <Typography
            sx={{
              fontWeight: "700",
              fontSize: "16px",
              color: "#504E4E",
              px: 2,
              pt: 3,
            }}
          >
            My Car
          </Typography>
          <List>
            {["Car Register", "Driving History "].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton onClick={() => router.push(myCarPath[index])}>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
