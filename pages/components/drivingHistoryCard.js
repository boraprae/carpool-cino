import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { border, color } from "@mui/system";
import Divider from "@mui/material/Divider";
import { green, grey, red } from "@mui/material/colors";
import { colors } from "@mui/material";
import Stack from "@mui/material/Stack";
import CardMedia from "@mui/material/CardMedia";

export default function DrivingHistoryCard() {
  return (
    <>
      <Card
        sx={{
          width: 863,
          mr: 6,
          mt: 3,
          backgroundColor: colors.grey[400],
        }}
      >
        <CardContent>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="flex-start"
          >
            <Stack
              direction="column"
              justifyContent="flex-start"
              alignItems="flex-start"
            >
              <Typography sx={{ fontSize: "16px", mt: 1, fontWeight: "bold" }}>
                Date
              </Typography>
              <Typography sx={{ fontSize: "14px" }}>2 Nov 2022</Typography>
              <Typography sx={{ fontSize: "16px", mt: 1, fontWeight: "bold" }}>
                Carbrand
              </Typography>
              <Typography sx={{ fontSize: "14px" }}>Mitsubishi</Typography>
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
                License plate number
              </Typography>
              <Typography sx={{ fontSize: "14px" }}>
                กขค 123 เชียงราย
              </Typography>
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
                Price/Seat
              </Typography>
              <Typography sx={{ fontSize: "14px" }}>THB 220</Typography>
            </Stack>
            <Stack
              direction="column"
              justifyContent="flex-start"
              alignItems="flex-start"
            >
              <Typography sx={{ fontSize: "16px", mt: 1, fontWeight: "bold" }}>
                Seat
              </Typography>
              <Typography sx={{ fontSize: "14px" }}>1</Typography>
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    </>
  );
}
