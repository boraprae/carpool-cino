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
import { useState } from "react";

const BookingButton = styled(Button)(({ theme }) => ({
  color: "#FFFFFF",
  fontSize: "14px",
  fontWeight: "bold",
  textTransform: "capitalize",
  height: "40px",
  width: "100px",
  borderRadius: "15px",
  padding: 16,
  backgroundColor: "#58CAD2",
  "&:hover": {
    backgroundColor: "#47AAB1",
  },
}));

export default function CreateCarpoolCard({
  id,
  carInfo,
  origin,
  destination,
  departureDate,
  departureTime,
  seat,
  description,
}) {
  return (
    <>
      <Card
        key={id}
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
            <Stack
              direction="column"
              justifyContent="flex-start"
              alignItems="flex-start"
            >
              <Typography sx={{ fontSize: "16px", mt: 1, fontWeight: "bold" }}>
                Car Information
              </Typography>
              <Typography sx={{ fontSize: "14px" }}>{carInfo}</Typography>
              <Typography sx={{ fontSize: "16px", mt: 1, fontWeight: "bold" }}>
                Departure Date
              </Typography>
              <Typography sx={{ fontSize: "14px" }}>{departureDate}</Typography>
            </Stack>

            <Stack
              direction="column"
              justifyContent="flex-start"
              alignItems="flex-start"
            >
              <Typography sx={{ fontSize: "16px", mt: 1, fontWeight: "bold" }}>
                Origin
              </Typography>
              <Typography sx={{ fontSize: "14px" }}>{origin}</Typography>

              <Typography sx={{ fontSize: "16px", mt: 1, fontWeight: "bold" }}>
                Departure Time
              </Typography>
              <Typography sx={{ fontSize: "14px" }}>{departureTime}</Typography>
            </Stack>
            <Stack
              direction="column"
              justifyContent="flex-start"
              alignItems="flex-start"
            >
              <Typography sx={{ fontSize: "16px", mt: 1, fontWeight: "bold" }}>
                Destination
              </Typography>
              <Typography sx={{ fontSize: "14px" }}>{description}</Typography>
              <Typography sx={{ fontSize: "16px", mt: 1, fontWeight: "bold" }}>
                Seat
              </Typography>
              <Typography sx={{ fontSize: "14px", mt: 1 }}>{seat}</Typography>
            </Stack>
          </Stack>

          <Stack
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            mx={2}
          >
            <Typography sx={{ fontSize: "16px", mt: 1, fontWeight: "bold" }}>
              Description
            </Typography>
            <Typography sx={{ fontSize: "14px", mt: 1 }}>
              {description}
            </Typography>
          </Stack>

          <Divider sx={{ mb: 2, mt: 2 }} />
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="flex-start"
            mx={2}
          >
            <Typography sx={{ fontSize: "14px", mt: 1 }}>
              Lastest Update: 18/11/2022
            </Typography>
            <BookingButton>Edit</BookingButton>
          </Stack>
        </CardContent>
      </Card>
    </>
  );
}
