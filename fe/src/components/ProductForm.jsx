import { Container } from "@mui/system";
import { useState } from "react";
import { Box, Button, FormControl, TextField, Typography } from "@mui/material";

export default function ProductForm() {
  const URL = "http://localhost:8080/products";
  const [users, setUsers] = useState([]);
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
    console.log("hi");

    const postUserData = {
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
      body: JSON.stringify(postUserData),
    };
    const FETCHED_DATA = await fetch(URL, options);
    const FETCHED_JSON = await FETCHED_DATA.json();
    setUsers(FETCHED_JSON.data);
    console.log(users);
  }

  return (
    <Container maxWidth="lg" sx={{ margin: "0 auto", paddingBottom: 5 }}>
      <Typography variant="h3" sx={{ marginBottom: 2 }}>
        NEW PRODUCT
      </Typography>
      <Box maxWidth="md" sx={{ margin: "0 auto" }}>
        <FormControl
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
          fullWidth={true}
          onSubmit={handleSubmit}
        >
          {/* <TextField
              name={"image"}
              type={"image"}
              label={"Upload image"}
              variant={"outlined"}
              fullWidth={"true"}
            /> */}
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

          <Button variant={"outlined"} color={"primary"}>
            Add
          </Button>
        </FormControl>
      </Box>
    </Container>
  );
}
