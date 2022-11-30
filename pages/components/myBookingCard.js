import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Stack from "@mui/material/Stack";

import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const BookingButton = styled(Button)(({ theme }) => ({
  color: "#FFFFFF",
  fontSize: "14px",
  fontWeight: "bold",
  textTransform: "capitalize",
  height: "40px",
  width: "150px",
  borderRadius: "15px",
  padding: 16,
  backgroundColor: "#58CAD2",
  "&:hover": {
    backgroundColor: "#47AAB1",
  },
}));

export default function MyBookingCard() {
  return (
    <>
      <Card
        sx={{
          width: "1200px",
          mt: 4,
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.1)",
          borderRadius: "15px",
          mr: 5,
        }}
      >
        <CardContent>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="flex-start"
            mx={2}
          >
            <Avatar
              alt="Cindy Baker"
              src="/assets/profileImg.jpg"
              sx={{ width: 100, height: 100 }}
            />
            <Stack
              direction="column"
              justifyContent="flex-start"
              alignItems="flex-start"
            >
              <Typography sx={{ fontSize: "16px", mt: 1, fontWeight: "bold" }}>
                Car Information
              </Typography>
              <Typography sx={{ fontSize: "14px" }}>
                Mitsubishi กขค 123 เชียงราย
              </Typography>
              <Typography sx={{ fontSize: "16px", mt: 1, fontWeight: "bold" }}>
                Departure Date
              </Typography>
              <Typography sx={{ fontSize: "14px" }}>2 Nov 2022</Typography>
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
                Departure Time
              </Typography>
              <Typography sx={{ fontSize: "14px" }}>5 P.M.</Typography>
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
                Seat
              </Typography>
              <Typography sx={{ fontSize: "14px", mt: 1 }}>1</Typography>
            </Stack>
          </Stack>
          <Divider sx={{ mb: 2, mt: 2 }} />
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="flex-start"
            mx={2}
          >
            <Typography sx={{ fontSize: "14px", mt: 1 }}>
              From Mae Fah Luang University, can pick up you anywhere around the
              university
            </Typography>
            <BookingButton>Cancel Booking</BookingButton>
          </Stack>
        </CardContent>
      </Card>
    </>
  );
}
