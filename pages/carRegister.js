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
import { useEffect } from "react";
import swal from 'sweetalert';

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
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
    const [images, setImages] = React.useState([]);
    const [imageURLs, setImageURLs] = React.useState([]);
    const [cars, setCars] = React.useState([
        { image: "/assets/headweb.png", Band: 'Ford', Model: 'Ranger Raptor', Color: 'red', Plate: 'กย.15', id: 100 },

    ]);

    useEffect(() => {
        if (images.length < 1) return;
        const newImageUrls = [];
        images.forEach((image) => newImageUrls.push(URL.createObjectURL(image)));
        setImageURLs(newImageUrls);
    }, [images]);

    function onImageChange(e) {
        setImages([...e.target.files]);
    }

    const [inputs, setInputs] = React.useState({

    });

    const [editID, setEditID] = React.useState(0);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs({ ...inputs, [name]: value });
    }

    const listCard = cars.map((e) => (

        <Card
            sx={{
                width: 1038,
                mt: 4,
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.1)",
                borderRadius: "15px",
                mr: 5,
            }}
        >
            <CardMedia
                component="img"
                height="200"
                image={e.image}
                alt="car"
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
                        <Typography sx={{ fontSize: "14px" }}>{e.Band}</Typography>
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
                            {e.Model}
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
                            {e.Color}
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
                        <Typography sx={{ fontSize: "14px" }}>{e.Plate}</Typography>
                    </Stack>
                </Stack>

                <Divider sx={{ mb: 2, mt: 2 }} />
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Typography sx={{ fontSize: "14px" }}>
                        Lastest Update: {date}
                    </Typography>
                    <EditButton onClick={() => handleOpenEdit(e.id)}>Edit</EditButton>
                </Stack>
            </CardContent>
        </Card>
    ));

    //=================Add Car ==============================
    const Addcar = () => {
        let newCars = [...cars];
        {
            imageURLs.map((imageSrc) => (
                <img src={imageSrc} />
            ))
        }
        const item = { image: imageURLs, Band: inputs.CarBand, Model: inputs.CarModel, Color: inputs.CarColor, Plate: inputs.CarPlate, id: newCars.length + 100 };
        if (imageURLs.length == 0 || inputs.CarBand == null || inputs.CarModel == null || inputs.CarColor == null || inputs.CarPlate == null) {
            swal({
                title: "Fail!",
                text: "Please sign the info!",
                icon: "error",
                dangerMode: true,
            })
        }
        else {
            swal({
                title: "Success!",
                text: "Add success!",
                icon: "success",
                dangerMode: true,
            })
            newCars.push(item);
            setCars(newCars);
            setOpenAddCar(false);
            //Clear Text    
            setInputs({});
            setImageURLs([]);
        }
        console.log(imageURLs.length);
    }

    //================= Edit Car ==============================
    const EditCar = () => {
        //console.log(editID);
        swal({
            title: "Are you sure?",
            text: "Are you sure that you want to edit?",
            icon: "warning",
            dangerMode: true,
        })
            .then(willDelete => {
                if (willDelete) {
                    swal("Edited!", "Edit success!", "success");
                    const editCar = cars.map((cars) => {

                        if (cars.id === editID) {
                            return {
                                ...cars, image: imageURLs, Band: inputs.CarBandEdit, Model: inputs.CarModelEdit, Color: inputs.CarColorEdit, Plate: inputs.CarPlateEdit
                            }
                        }
                        return cars;
                    })
                    setCars(editCar)
                    setOpenEdit(false);
                    //Clear Text 
                    setInputs({});
                }
            });
    }


    //modal Add Car 
    const [openAddCar, setOpenAddCar] = React.useState(false);

    const handleOpenAddCar = () => {
        setOpenAddCar(true);
    };
    const handleCloseAddCar = () => {
        setOpenAddCar(false);
        setInputs({});
        setImageURLs([]);
    };

    //modal Edit
    const [openEdit, setOpenEdit] = React.useState(false);
    const handleOpenEdit = (id) => {
        setOpenEdit(true);
        setEditID(id);
        //console.log(id);
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
            {listCard}

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
                                    onChange={handleChange}
                                    name="CarBandEdit"
                                    value={inputs.CarBandEdit}
                                    sx={{ mt: "10px" }}
                                />
                                <TextField
                                    id="standard-email-input"
                                    label="Car color"
                                    variant="standard"
                                    onChange={handleChange}
                                    name="CarColorEdit"
                                    value={inputs.CarColorEdit}
                                    sx={{ mt: 3, }}

                                />
                                <Typography sx={{ fontSize: "16px", mt: 6, mb: 3, fontWeight: "bold" }}>
                                    Add Car Image
                                </Typography>
                                <input type="file" multiple accept="image/*" onChange={onImageChange} />
                                {/* <Button
                                    variant="outlined"
                                    sx={{
                                        borderColor: "#8F8F8F",
                                        color: "#8F8F8F",
                                        height: "30px",
                                        fontSize: "12px",
                                        padding: "16",
                                        mt: 2,
                                    }}
                                >
                                    
                                    Upload Image
                                </Button> */}

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
                                    onChange={handleChange}
                                    name="CarModelEdit"
                                    value={inputs.CarModelEdit}
                                    sx={{ mt: "10px" }}
                                />
                                <TextField
                                    id="standard-email-input"
                                    label="License plate number"
                                    variant="standard"
                                    onChange={handleChange}
                                    name="CarPlateEdit"
                                    value={inputs.CarPlateEdit}
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
                                onClick={EditCar}
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
                                    onChange={handleChange}
                                    name="CarBand"
                                    value={inputs.CarBand}
                                    sx={{ mt: "10px" }}
                                />
                                <TextField
                                    id="standard-email-input"
                                    label="Car color"
                                    variant="standard"
                                    onChange={handleChange}
                                    name="CarColor"
                                    value={inputs.CarColor}
                                    sx={{ mt: 3 }}

                                />
                                <Typography sx={{ fontSize: "16px", mt: 6, mb: 3, fontWeight: "bold" }}>
                                    Add Car Image
                                </Typography>
                                <input type="file" multiple accept="image/*" onChange={onImageChange} />
                                {/* <Button
                                
                                    variant="outlined"
                                    sx={{
                                        borderColor: "#8F8F8F",
                                        color: "#8F8F8F",
                                        height: "30px",
                                        fontSize: "12px",
                                        padding: "16",
                                        mt: 2,
                                    }}
                                    
                                >
                                    Upload Image
                                </Button> */}

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
                                    onChange={handleChange}
                                    name="CarModel"
                                    value={inputs.CarModel}
                                    sx={{ mt: "10px" }}
                                />
                                <TextField
                                    id="standard-email-input"
                                    label="License plate number"
                                    variant="standard"
                                    onChange={handleChange}
                                    name="CarPlate"
                                    value={inputs.CarPlate}
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
                                onClick={Addcar}
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