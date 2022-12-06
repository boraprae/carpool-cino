import { AppBar, Typography, Button } from "@mui/material";
import Sidebar from "./components/sidebar";
import styles from "../styles/Home.module.css";
import CreateCarpoolCard from "./components/createCarpoolCard";
import Stack from "@mui/material/Stack";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { colors } from '@mui/material';
export default function drivingHistory() {
  return (
    <main className={styles.main}>
      <Sidebar />
      <Typography
        sx={{
          fontWeight: 700,
          fontSize: "24px",
          lineHeight: "31px",
          color: "#504E4E",
        }}
      >
        My Driving History
      </Typography>

      {/* Driving History */}
      <Stack
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
       
          <CardContent>
            <Card sx={{
              width: 863,
              mr: 6,
              mt: 3,
              backgroundColor: "#FFFFFF"
            }}>
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
                    <Typography sx={{ fontSize: "14px" }}>
                      2 Nov 2022
                    </Typography>
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
                    <Typography sx={{ fontSize: "14px" }}>กขค 123 เชียงราย</Typography>
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
                    <Typography sx={{ fontSize: "14px" }}>
                      THB 220
                    </Typography>
                  </Stack>
                  <Stack
                    direction="column"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                  >
                    <Typography sx={{ fontSize: "16px", mt: 1, fontWeight: "bold" }}>
                      Seat
                    </Typography>
                    <Typography sx={{ fontSize: "14px" }}>
                      1
                    </Typography>
                  </Stack>
                </Stack>
              </CardContent>
            </Card>
          </CardContent>
      </Stack>

    </main>
  );
}
