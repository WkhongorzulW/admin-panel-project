import { Button, Container, Typography } from "@mui/material";
import { useContext, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import AutoFixHighOutlinedIcon from "@mui/icons-material/AutoFixHighOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { deleteProduct } from "../../services/ProductsServices";
import { PLBreadCrumbs } from "../../components/PBreadCrumbs";
import React from "react";
import { ProductContext } from "../../contexts/ProductContext";

export default function ProductTable() {
  const { products, setProducts, URL } = useContext(ProductContext);

  useEffect(() => {
    fetchProductData();
  }, []);

  async function fetchProductData() {
    const FETCHED_DATA = await fetch(URL);
    const FETCHED_JSON = await FETCHED_DATA.json();
    setProducts(FETCHED_JSON);
  }

  async function handleDelete(productId) {
    //deleteProduct(productId, setProducts, URL);
  }

  const columns = [
    { field: "id", headerName: "Product Id", width: 130 },
    {
      field: "image_path",
      headerName: "Image",
      renderCell: (params) => {
        return (
          <img src={params.row.image_path} width="100px" alt="product_image" />
        );
      },
    },
    { field: "product_name", headerName: "Title", width: 130 },
    { field: "product_description", headerName: "Description", width: 150 },
    { field: "product_price", headerName: "Price", width: 50 },
    { field: "product_quantity", headerName: "Stock", width: 80 },
    { field: "product_category_id", headerName: "Category", width: 90 },
    {
      field: "actions",
      headerName: "Actions",
      flex: 1,
      renderCell: (params) => {
        return (
          <Box>
            <Link
              to={`/editproduct/${params.row.id}`}
              state={{
                product: products.filter((p) => p.id === params.row.id),
              }}
            >
              <Button color={"info"} variant={"outlined"}>
                <AutoFixHighOutlinedIcon />
              </Button>
            </Link>{" "}
            <Button
              onClick={() => handleDelete(params.row.id)}
              color={"error"}
              variant={"contained"}
            >
              <DeleteOutlineIcon />
            </Button>
          </Box>
        );
      },
    },
  ];

  return (
    <Container style={{ height: 400, width: "100%" }}>
      <PLBreadCrumbs />
      <Typography variant="h3" sx={{ marginBottom: 3, marginTop: 10 }}>
        Products
      </Typography>
      <DataGrid
        rows={products}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />

      <Link to={"/addproduct"}>
        <Button color="info" variant="contained" sx={{ marginTop: 5 }}>
          BACK
        </Button>
      </Link>
    </Container>
  );
}
