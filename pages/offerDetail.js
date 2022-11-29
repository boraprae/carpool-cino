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
import Avatar from "@mui/material/Avatar";
import styles from "../styles/Home.module.css";
import DrivingHistoryCard from "./components/drivingHistoryCard";

const BookingButton = styled(Button)(({ theme }) => ({
  color: "#FFFFFF",
  fontSize: "14px",
  fontWeight: "bold",
  textTransform: "capitalize",
  height: "42px",
  width: "300px",
  borderRadius: "10px",
  padding: 16,
  backgroundColor: "#CC8D48",
  "&:hover": {
    backgroundColor: "#A9773F",
  },
}));

export default function offerDetail() {
  return (
    <main className={styles.mainContent}>
      {/* Total Price  */}
      <Stack
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <Grid
          item
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
        >
          <Card
            sx={{
              width: 896,
              mr: 6,
              mt: 5,
            }}
          >
            <CardContent>
              <Typography sx={{ fontSize: "16px", mt: 1, fontWeight: "bold" }}>
                Driver Information
              </Typography>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="flex-start"
                sx={{ p: "17px" }}
              >
                <Stack
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="center"
                >
                  <Avatar
                    alt="Cindy Baker"
                    src="/assets/profileImg.jpg"
                    sx={{ width: 50, height: 50 }}
                  />
                </Stack>
                <Stack
                  direction="column"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                >
                  <Typography sx={{ fontSize: "12px", mt: 1 }}>Name</Typography>
                  <Typography sx={{ fontSize: "14px", fontWeight: "bold" }}>
                    Lung Too
                  </Typography>
                  <Typography sx={{ fontSize: "12px", mt: 1 }}>Age</Typography>
                  <Typography sx={{ fontSize: "14px", fontWeight: "bold" }}>
                    90 Years old
                  </Typography>
                </Stack>

                <Stack
                  direction="column"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                >
                  <Typography sx={{ fontSize: "12px", mt: 1 }}>
                    Gender
                  </Typography>

                  <Typography sx={{ fontSize: "14px", fontWeight: "bold" }}>
                    Man
                  </Typography>
                </Stack>
                <Divider orientation="vertical" flexItem></Divider>
                <Stack
                  direction="column"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                >
                  <Typography sx={{ fontSize: "12px", mt: 1 }}>
                    Car brand
                  </Typography>
                  <Typography sx={{ fontSize: "14px", fontWeight: "bold" }}>
                    Mitsubishi
                  </Typography>
                  <Typography sx={{ fontSize: "12px", mt: 1 }}>
                    License plate number
                  </Typography>
                  <Typography sx={{ fontSize: "14px", fontWeight: "bold" }}>
                    กขค 123 เชียงราย
                  </Typography>
                </Stack>
                <Stack
                  direction="column"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                >
                  <Typography sx={{ fontSize: "12px", mt: 1 }}>
                    Car model
                  </Typography>
                  <Typography sx={{ fontSize: "14px", fontWeight: "bold" }}>
                    Mitsubishi
                  </Typography>
                  <Typography sx={{ fontSize: "12px", mt: 1 }}>
                    Car color
                  </Typography>
                  <Typography sx={{ fontSize: "14px", fontWeight: "bold" }}>
                    Blue
                  </Typography>
                </Stack>
              </Stack>
            </CardContent>
          </Card>
          <Card
            sx={{
              width: 896,
              mr: 6,
              mt: 5,
            }}
          >
            <CardContent>
              <Typography sx={{ fontSize: "16px", mt: 1, fontWeight: "bold" }}>
                Description
              </Typography>
              <Typography
                sx={{ fontSize: "14px", mt: 1, fontWeight: "normal", mt: 2 }}
              >
                Paragraphs are the building block of papers. Many student define
                paragraph in terms of length: a paragraph is a group of at least
                five sentences, a paragraph is half a page long, etc. In
                reality, though, the unity and coherence of ideas among sentence
                is what constitutes a paragraph. A paragraph is defined as “a
                group of sentences or a single sentence that forms a unit”
                (Lunsford and Connors 116). Length and appearance do not
                determine whether a section in a paper is a paragraph. For
                instance, in some styles of writing, particularly journalistic
                styles, a paragraph can be just one sentence long. Ultimately, a
                paragraph is a sentence or group of sentences that support one
                main idea. In this handout, we will refer to this as the
                “controlling idea,” because it controls what happens in the rest
                of the paragraph.
              </Typography>
            </CardContent>
          </Card>
          <Card
            sx={{
              width: 896,
              mr: 6,
              mt: 5,
            }}
          >
            <CardContent>
              <Typography sx={{ fontSize: "16px", mt: 1, fontWeight: "bold" }}>
                Driving History
              </Typography>
              <DrivingHistoryCard />
            </CardContent>
          </Card>
        </Grid>
        <Grid
          item
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
        >
          <Card
            sx={{
              width: 374,
              height: 358,
              mr: 6,
              mt: 15,
              borderRadius: 3,
            }}
          >
            <CardContent>
              <Typography sx={{ fontSize: "20px", mt: 1, fontWeight: "bold" }}>
                Price Details
              </Typography>
              <Divider sx={{ mt: 2 }} />
              <Typography sx={{ fontSize: "16px", mt: 4, fontWeight: "bold" }}>
                Passenger
              </Typography>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="flex-start"
                sx={{ mt: 1 }}
              >
                <Stack
                  direction="column"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                >
                  <Typography sx={{ fontSize: "14px" }}>Adult</Typography>
                  <Typography sx={{ fontSize: "14px" }}>Gas cost</Typography>
                  <Typography sx={{ fontSize: "14px" }}>
                    Service Charge
                  </Typography>
                </Stack>

                <Stack
                  direction="column"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                >
                  <Typography sx={{ fontSize: "14px" }}>THB 220 x 1</Typography>
                  <Typography sx={{ fontSize: "14px" }}>THB 200 x 1</Typography>
                  <Typography sx={{ fontSize: "14px" }}>THB 20 x 1</Typography>
                </Stack>
              </Stack>
              <Divider sx={{ mt: 3 }} />
              <Grid sx={{ mt: 3 }}>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography sx={{ fontSize: "16px", fontWeight: "bold" }}>
                    Total
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "16px",
                      color: "#58CAD2",
                      fontWeight: "bold",
                    }}
                  >
                    THB 220
                  </Typography>
                </Stack>
              </Grid>
            </CardContent>
            <CardActions>
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <BookingButton>Booking</BookingButton>
              </Grid>
            </CardActions>
          </Card>
        </Grid>
      </Stack>

      {/* Media Card */}
    </main>
  );
}
