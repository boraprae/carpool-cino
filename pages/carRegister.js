import { AppBar } from "@mui/material";
import Sidebar from "./components/sidebar";
import styles from "../styles/Home.module.css";
import CreateCarpoolCard from "./components/createCarpoolCard";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { border, color } from "@mui/system";
import Divider from "@mui/material/Divider";
import { green, grey, red } from "@mui/material/colors";
import { colors } from "@mui/material";
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Backdrop from '@mui/material/Backdrop';
import TextField from "@mui/material/TextField";


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
    color: "black"

};
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
const AddImageButton = styled(Button)(({ theme }) => ({
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

    //modal Add Car 
    const [openAddCar, setOpenAddCar] = React.useState(false);
    const handleOpenAddCar = () => {
        setOpenAddCar(true);
    };
    const handleCloseAddCar = () => {
        setOpenAddCar(false);
    };

    //modal Edit
    const [openEdit, setOpenEdit] = React.useState(false);
    const handleOpenEdit = () => {
        setOpenEdit(true);
    };
    const handleCloseEdit = () => {
        setOpenEdit(false);
    };

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
                My Car
            </Typography>

            {/* Button */}
            <AddCarButton
                onClick={handleOpenAddCar}
                sx={{
                    mt: 2,
                }}
            >
                Add car
            </AddCarButton>

            {/* Media Card */}
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
                        justifyContent="space-between"
                        alignItems="flex-start"
                    >
                        <Stack
                            direction="column"
                            justifyContent="flex-start"
                            alignItems="flex-start"
                        >
                            <Typography sx={{ fontSize: "16px", mt: 1, fontWeight: "bold" }}>
                                Car brand
                            </Typography>
                            <Typography sx={{ fontSize: "14px" }}>Mitsubishi</Typography>
                        </Stack>

                        <Stack
                            direction="column"
                            justifyContent="flex-start"
                            alignItems="flex-start"
                        >
                            <Typography sx={{ fontSize: "16px", mt: 1, fontWeight: "bold" }}>
                                Car model
                            </Typography>
                            <Typography sx={{ fontSize: "14px" }}>
                                Pickup Truck
                            </Typography>
                        </Stack>
                        <Stack
                            direction="column"
                            justifyContent="flex-start"
                            alignItems="flex-start"
                        >
                            <Typography sx={{ fontSize: "16px", mt: 1, fontWeight: "bold" }}>
                                Car color
                            </Typography>
                            <Typography sx={{ fontSize: "14px" }}>
                                Blue
                            </Typography>
                        </Stack>
                        <Stack
                            direction="column"
                            justifyContent="flex-start"
                            alignItems="flex-start"
                        >
                            <Typography sx={{ fontSize: "16px", mt: 1, fontWeight: "bold" }}>
                                License plate number
                            </Typography>
                            <Typography sx={{ fontSize: "14px" }}>กขค 123 เชียงราย</Typography>
                        </Stack>
                    </Stack>

                    <Divider sx={{ mb: 2, mt: 2 }} />
                    <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <Typography sx={{ fontSize: "14px" }}>
                            Lastest Update: 18/11/2022
                        </Typography>
                        <EditButton onClick={handleOpenEdit}>Edit</EditButton>
                    </Stack>
                </CardContent>
            </Card>

            {/* Modal Edit */}
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={openEdit}
                onClose={handleCloseEdit}
            >
                <Fade in={openEdit}>
                    <Box sx={{
                        ...style, width: 586, height: 474
                    }}>
                        <h2 id="parent-modal-title"
                        >
                            Edit
                        </h2>
                        <Divider />

                        {/* <TextField
                            id="standard-email-input"
                            label="Email"
                            variant="standard"
                            //onChange={changeEmail}
                            //value={email}
                            placeholderText={"example@sample.com"}
                            sx={{ mt: "10px", mb: "5px" }}
                        />

                        <TextField
                            id="standard-password-input"
                            label="Password"
                            variant="standard"
                            //onChange={changePassword}
                            //value={password}
                            placeholderText={"******"}
                            sx={{ mt: "10px", mb: "25px" }}
                        /> */}
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
                                <TextField
                                    id="standard-email-input"
                                    label="Car brand"
                                    variant="standard"
                                    //onChange={changeEmail}
                                    //value={email}

                                    sx={{ mt: "10px" }}
                                />
                                <TextField
                                    id="standard-email-input"
                                    label="Car color"
                                    variant="standard"
                                    //onChange={changeEmail}
                                    //value={email}

                                    sx={{ mt: 3, }}

                                />
                                <Typography sx={{ fontSize: "16px", mt: 6, fontWeight: "bold" }}>
                                    Add Car Image
                                </Typography>
                                <AddImageButton sx={{ mt: 3 }}>Upload Image</AddImageButton>

                            </Stack>
                            <Stack
                                direction="column"
                                justifyContent="flex-start"
                                alignItems="flex-start"
                            >
                                <TextField
                                    id="standard-email-input"
                                    label="Car model"
                                    variant="standard"
                                    //onChange={changeEmail}
                                    //value={email}

                                    sx={{ mt: "10px" }}
                                />
                                <TextField
                                    id="standard-email-input"
                                    label="License plate number"
                                    variant="standard"
                                    //onChange={changeEmail}
                                    //value={email}
                                    sx={{ mt: 3 }}
                                />
                            </Stack>
                        </Stack>

                        <Divider sx={{ mt: 4 }} />
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
                                onClick={handleCloseEdit}
                            >
                                Cancel
                            </Button>
                            <Button
                                variant="contained"
                                sx={{
                                    borderRadius: "10px",
                                    backgroundColor: "#58CAD2",
                                    height: "50px",
                                    mr: 1,
                                }}
                            //onClick={handleCloseAddCar}
                            >
                                Submit
                            </Button>
                        </Grid>
                    </Box>
                </Fade>
            </Modal>

            {/* Modal AddCar */}
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={openAddCar}
                onClose={handleCloseAddCar}
            >
                <Fade in={openAddCar}>
                    <Box sx={{
                        ...style, width: 586, height: 474
                    }}>
                        <h2 id="parent-modal-title"
                        >
                            Add Car
                        </h2>
                        <Divider />

                        {/* <TextField
                            id="standard-email-input"
                            label="Email"
                            variant="standard"
                            //onChange={changeEmail}
                            //value={email}
                            placeholderText={"example@sample.com"}
                            sx={{ mt: "10px", mb: "5px" }}
                        />

                        <TextField
                            id="standard-password-input"
                            label="Password"
                            variant="standard"
                            //onChange={changePassword}
                            //value={password}
                            placeholderText={"******"}
                            sx={{ mt: "10px", mb: "25px" }}
                        /> */}
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
                                <TextField
                                    id="standard-email-input"
                                    label="Car brand"
                                    variant="standard"
                                    //onChange={changeEmail}
                                    //value={email}

                                    sx={{ mt: "10px" }}
                                />
                                <TextField
                                    id="standard-email-input"
                                    label="Car color"
                                    variant="standard"
                                    //onChange={changeEmail}
                                    //value={email}

                                    sx={{ mt: 3, }}

                                />
                                <Typography sx={{ fontSize: "16px", mt: 6, fontWeight: "bold" }}>
                                    Add Car Image
                                </Typography>
                                <AddImageButton sx={{ mt: 3 }}>Upload Image</AddImageButton>

                            </Stack>
                            <Stack
                                direction="column"
                                justifyContent="flex-start"
                                alignItems="flex-start"
                            >
                                <TextField
                                    id="standard-email-input"
                                    label="Car model"
                                    variant="standard"
                                    //onChange={changeEmail}
                                    //value={email}

                                    sx={{ mt: "10px" }}
                                />
                                <TextField
                                    id="standard-email-input"
                                    label="License plate number"
                                    variant="standard"
                                    //onChange={changeEmail}
                                    //value={email}
                                    sx={{ mt: 3 }}
                                />
                            </Stack>
                        </Stack>

                        <Divider sx={{ mt: 4 }} />
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
                                onClick={handleCloseAddCar}
                            >
                                Cancel
                            </Button>
                            <Button
                                variant="contained"
                                sx={{
                                    borderRadius: "10px",
                                    backgroundColor: "#58CAD2",
                                    height: "50px",
                                    mr: 1,
                                }}
                            //onClick={handleCloseAddCar}
                            >
                                Submit
                            </Button>
                        </Grid>
                    </Box>
                </Fade>
            </Modal>
        </main>

    );
}