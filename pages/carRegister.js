import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from "@mui/material/CardMedia";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { border, color } from '@mui/system';
import Divider from '@mui/material/Divider';
import { green, grey, red } from '@mui/material/colors';
import { colors } from '@mui/material';

const AddCarButton = styled(Button)(({ theme }) => ({
    color: "#FFFFFF",
    fontSize: "14px",
    fontWeight: "bold",
    textTransform: "capitalize",
    height: "42px",
    width: "140px",
    borderRadius: "10px",
    padding: 16,
    backgroundColor: "#58CAD2",
    "&:hover": {
        backgroundColor: "#A9773F",
    },
}));

const EditButton = styled(Button)(({ theme }) => ({
    color: "#FFFFFF",
    fontSize: "14px",
    fontWeight: "bold",
    textTransform: "capitalize",
    height: "42px",
    width: "97px",
    borderRadius: "10px",
    padding: 16,
    backgroundColor: "#58CAD2",
    "&:hover": {
        backgroundColor: "#A9773F",
    },
}));

export default function carRegister() {
    return (
        <div>

            <Grid sx={{
                mt: 16,
                ml: 6,
            }}>

                {/* My car text  */}
                <Typography sx={{
                    fontSize: "24px",
                    fontWeight: "bold",
                    color: "#504E4E"
                }}
                > My Car</Typography>


                {/* Button */}
                <AddCarButton sx={{
                mt: 2,
                }}>Add car</AddCarButton>

                {/* Cart */}
                <Card
                    sx={{
                        maxWidth: 1038,
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
                        <EditButton>Edit</EditButton>
                    </CardContent>
                </Card>
            </Grid>
        </div>
    )
}