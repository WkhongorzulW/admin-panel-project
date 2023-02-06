import { Container } from "@mui/system";
import {
  Box,
  Button,
  FormControl,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { addProduct } from "../services/ProductsServices";
import { PFBreadCrumbs } from "../components/PBreadCrumbs";
import MuiAlert from "@mui/material/Alert";
import React from "react";
import { useState } from "react";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function ProductForm({ setProducts }) {
  const URL = "http://localhost:8080/products";
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [check, setCheck] = useState("No");

  function handleClose(event, reason) {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  }

  async function handleSubmit(e) {
    addProduct(e, setProducts, URL);
    navigate("/productlist");
    setOpen(true);
  }

  return (
    <Container maxWidth="lg" sx={{ margin: "0 auto", paddingBottom: 5 }}>
      <PFBreadCrumbs />
      <Typography variant="h3" sx={{ marginBottom: 2 }}>
        NEW PRODUCT
      </Typography>
      <Box maxWidth="md" sx={{ margin: "0 auto" }}>
        <form onSubmit={handleSubmit}>
          <FormControl
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              justifyContent: "center",
            }}
            fullWidth={true}
          >
            <TextField
              name={"image"}
              label={"Image URL"}
              variant={"filled"}
              fullWidth={true}
            />
            <TextField
              name={"productname"}
              type={"text"}
              label={"Product name"}
              variant={"filled"}
              fullWidth={true}
            />
            <TextField
              name={"price"}
              type={"text"}
              label={"Price"}
              variant={"filled"}
              fullWidth={true}
            />
            <TextField
              name={"stock"}
              type={"number"}
              label={"Stock"}
              variant={"filled"}
              fullWidth={true}
            />
            <TextField
              name={"color"}
              type={"text"}
              label={"Color"}
              variant={"filled"}
              fullWidth={true}
            />
            <TextField
              name={"category"}
              type={"text"}
              label={"Category"}
              variant={"filled"}
              fullWidth={true}
            />
            <TextField
              name={"description"}
              type={"text"}
              label={"Description"}
              variant={"filled"}
              fullWidth={true}
            />
          </FormControl>

          <Button
            type="submit"
            variant={"contained"}
            sx={{ marginTop: 2 }}
            color={"success"}
          >
            Add
          </Button>
        </form>
      </Box>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert severity="success" sx={{ width: "100%" }}>
          Added !
        </Alert>
      </Snackbar>
    </Container>
  );
}
