import { Container } from "@mui/system";
import { Box, Button, FormControl, TextField, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  handlePname,
  handlePrice,
  handleStock,
  handleColor,
  handleCategory,
  handleDescription,
} from "../services/EditProduct";

export default function ProductForm({ products, setProducts }) {
  const URL = "http://localhost:8080/products";
  const navigate = useNavigate();
  const productData = useLocation();
  console.log(productData);
  const [currentProduct, setCurrentProduct] = useState([]);

  async function handleSubmit(e) {
    e.preventDefault();
    console.log("product");

    const postProductData = {
      productname: e.target.productname.value,
      price: e.target.price.value,
      stock: e.target.stock.value,
      color: e.target.color.value,
      category: e.target.category.value,
      description: e.target.description.value,
    };

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postProductData),
    };
    const FETCHED_DATA = await fetch(URL, options);
    const FETCHED_JSON = await FETCHED_DATA.json();
    setProducts(FETCHED_JSON.data);

    navigate("/productlist");
  }

  return (
    <Container maxWidth="lg" sx={{ margin: "0 auto", paddingBottom: 5 }}>
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
              flexWrap: "wrap",
              justifyContent: "center",
            }}
            fullWidth={true}
          >
            <TextField
              name={"productname"}
              type={"text"}
              label={"Product name"}
              variant={"filled"}
              fullWidth={true}
              // onChange={handlePname(currentProduct, setCurrentProduct)}
            />
            <TextField
              name={"price"}
              type={"text"}
              label={"Price"}
              variant={"filled"}
              fullWidth={true}
              // onChange={handlePrice(currentProduct, setCurrentProduct)}
            />
            <TextField
              name={"stock"}
              type={"number"}
              label={"Stock"}
              variant={"filled"}
              fullWidth={true}
              // onChange={handleStock(currentProduct, setCurrentProduct)}
            />
            <TextField
              name={"color"}
              type={"text"}
              label={"Color"}
              variant={"filled"}
              fullWidth={true}
              // onChange={handleColor(currentProduct, setCurrentProduct)}
            />
            <TextField
              name={"category"}
              type={"text"}
              label={"Category"}
              variant={"filled"}
              fullWidth={true}
              // onChange={handleCategory(currentProduct, setCurrentProduct)}
            />
            <TextField
              name={"description"}
              type={"text"}
              label={"Description"}
              variant={"filled"}
              fullWidth={true}
              // onChange={handleDescription(currentProduct, setCurrentProduct)}
            />
          </FormControl>

          <Button
            type="submit"
            variant={"outlined"}
            sx={{ marginTop: 2 }}
            color={"primary"}
          >
            Add
          </Button>
        </form>
      </Box>
    </Container>
  );
}
