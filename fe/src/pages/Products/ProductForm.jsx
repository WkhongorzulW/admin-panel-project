import { Container } from "@mui/system";
import { Box, Button, FormControl, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { addProduct } from "../../services/ProductsServices";
import { PFBreadCrumbs } from "../../components/PBreadCrumbs";
import React, { useContext } from "react";
import { ProductContext } from "../../contexts/ProductContext";

export default function ProductForm() {
  const navigate = useNavigate();

  const { setProducts, URL } = useContext(ProductContext);

  async function handleSubmit(e) {
    addProduct(e, setProducts, URL);
    navigate("/productlist");
  }

  return (
    <Container maxWidth="lg" sx={{ margin: "0 auto", paddingBottom: 5 }}>
      <PFBreadCrumbs />
      <Typography variant="h3" sx={{ marginBottom: 3, marginTop: 10 }}>
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
    </Container>
  );
}
