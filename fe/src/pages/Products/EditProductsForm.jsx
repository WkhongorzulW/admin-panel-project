import { Container } from "@mui/system";
import { Box, Button, FormControl, TextField, Typography } from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { editProduct } from "../../services/ProductsServices";
import { PEBreadCrumbs } from "../../components/PBreadCrumbs";
import { ProductContext } from "../../contexts/ProductContext";

export default function EditProductsForm() {
  const { products, setProducts, URL } = useContext(ProductContext);

  const productData = useLocation();
  const navigate = useNavigate();

  const [currentProduct, setCurrentProduct] = useState(
    productData.state.product[0]
  );

  function handlePname(e) {
    setCurrentProduct({ ...currentProduct, product_name: e.target.value });
  }
  function handlePrice(e) {
    setCurrentProduct({ ...currentProduct, product_price: e.target.value });
  }
  function handleStock(e) {
    setCurrentProduct({ ...currentProduct, product_quantity: e.target.value });
  }
  function handleCategory(e) {
    setCurrentProduct({
      ...currentProduct,
      product_category_id: e.target.value,
    });
  }
  function handleDescription(e) {
    setCurrentProduct({
      ...currentProduct,
      product_description: e.target.value,
    });
  }
  function handleImage(e) {
    setCurrentProduct({ ...currentProduct, image_path: e.target.value });
  }

  async function handleEdit(e) {
    editProduct(e, setProducts, URL, currentProduct);
    navigate("/productlist");
  }

  return (
    <Container maxWidth="lg" sx={{ margin: "0 auto", paddingBottom: 5 }}>
      <PEBreadCrumbs />
      <Typography variant="h3" sx={{ marginBottom: 3, marginTop: 10 }}>
        EDIT PRODUCT
      </Typography>
      {currentProduct && (
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
          >
            <TextField
              name={"productImage"}
              label={"Image URL"}
              variant={"filled"}
              fullWidth={true}
              defaultValue={currentProduct.image_path}
              onChange={handleImage}
            />
            <TextField
              name={"productName"}
              type={"text"}
              label={"Product name"}
              variant={"filled"}
              fullWidth={true}
              defaultValue={currentProduct.product_name}
              onChange={handlePname}
            />
            <TextField
              name={"productPrice"}
              type={"text"}
              label={"Price"}
              variant={"filled"}
              fullWidth={true}
              defaultValue={currentProduct.product_price}
              onChange={handlePrice}
            />
            <TextField
              name={"quantity"}
              type={"number"}
              label={"Stock"}
              variant={"filled"}
              fullWidth={true}
              defaultValue={currentProduct.product_quantity}
              onChange={handleStock}
            />
            <TextField
              name={"categoryId"}
              type={"number"}
              label={"Category Id"}
              variant={"filled"}
              fullWidth={true}
              defaultValue={currentProduct.product_category_id}
              onChange={handleCategory}
            />
            <TextField
              name={"productDescription"}
              type={"text"}
              label={"Description"}
              variant={"filled"}
              fullWidth={true}
              defaultValue={currentProduct.product_description}
              onChange={handleDescription}
            />
            <TextField
              name={"productId"}
              type={"number"}
              label={"Product Id"}
              variant={"filled"}
              fullWidth={true}
              defaultValue={currentProduct.id}
            />
          </FormControl>
          <Link to={"/productlist"}>
            <Button color="info" variant="contained" sx={{ marginTop: 2 }}>
              BACK
            </Button>
          </Link>
          {"   "}
          <Button
            type="submit"
            variant={"contained"}
            sx={{ marginTop: 2 }}
            color={"success"}
            onClick={handleEdit}
          >
            SAVE
          </Button>
        </Box>
      )}
    </Container>
  );
}
