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
  width: "300px",
  borderRadius: "15px",
  padding: 16,
  backgroundColor: "#CC8D48",
  "&:hover": {
    backgroundColor: "#A9773F",
  },
}));

export default function OfferCard() {
  return (
    <>
      <Card
        sx={{
          maxWidth: 350,
          mt: 4,
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.1)",
          borderRadius: "15px",
          mr: 5,
        }}
      >
        <CardMedia
          component="img"
          height="200"
          image="/assets/headweb.png"
          alt="car1"
        />
        <CardContent>
          <Stack
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            spacing={1}
            mb={1}
          >
            <Avatar
              alt="Cindy Baker"
              src="/assets/profileImg.jpg"
              sx={{ width: 24, height: 24 }}
            />
            <Typography sx={{ fontSize: "14px" }} color="text.secondary">
              Jane Kim
            </Typography>
          </Stack>
          <Divider />
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography sx={{ fontSize: "14px", mt: 1 }}>
              Destination
            </Typography>
            <Typography sx={{ fontSize: "14px", mt: 1 }}>Seat</Typography>
          </Stack>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography sx={{ fontSize: "18px", fontWeight: "bold" }}>
              Central Plaza Chiang Rai
            </Typography>
            <Typography sx={{ fontSize: "18px" }}>1/4</Typography>
          </Stack>

          <Typography sx={{ fontSize: "14px", mt: 1 }}>
            From Mae Fah Luang University, can pick up you anywhere around the
            university
          </Typography>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography sx={{ fontSize: "14px", mt: 1, fontWeight: "bold" }}>
              Departure Date
            </Typography>
            <Typography sx={{ fontSize: "14px", mt: 1, fontWeight: "bold" }}>
              Departure Time
            </Typography>
          </Stack>

          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography sx={{ fontSize: "16px" }}>2 Nov 2022</Typography>
            <Typography sx={{ fontSize: "16px" }}>5 P.M.</Typography>
          </Stack>
          <Divider sx={{ mb: 2, mt: 2 }} />
          <BookingButton>Booking</BookingButton>
        </CardContent>
      </Card>
    </>
  );
}
