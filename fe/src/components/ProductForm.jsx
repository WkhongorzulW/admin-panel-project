import { Container } from "@mui/system";
import { Box, Button, FormControl, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function ProductForm({ products, setProducts }) {
  const URL = "http://localhost:8080/products";
  const navigate = useNavigate();
  // const newUser = {
  //   image: "",
  //   id: "",
  //   productname: "",
  //   price: "",
  //   stock: "",
  //   color: "",
  //   category: "",
  //   description: "",
  // };

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
              variant={"outlined"}
              fullWidth={true}
            />
            <TextField
              name={"price"}
              type={"text"}
              label={"Price"}
              variant={"outlined"}
              fullWidth={true}
            />
            <TextField
              name={"stock"}
              type={"number"}
              label={"Stock"}
              variant={"outlined"}
              fullWidth={true}
            />
            <TextField
              name={"color"}
              type={"text"}
              label={"Color"}
              variant={"outlined"}
              fullWidth={true}
            />
            <TextField
              name={"category"}
              type={"text"}
              label={"Category"}
              variant={"outlined"}
              fullWidth={true}
            />
            <TextField
              name={"description"}
              type={"text"}
              label={"Description"}
              variant={"outlined"}
              fullWidth={true}
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
