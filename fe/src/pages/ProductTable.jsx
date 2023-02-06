import { Button, Container, Snackbar, Typography } from "@mui/material";
import { useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import AutoFixHighOutlinedIcon from "@mui/icons-material/AutoFixHighOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { deleteProduct } from "../services/ProductsServices";
import { PLBreadCrumbs } from "../components/PBreadCrumbs";
import MuiAlert from "@mui/material/Alert";
import React from "react";
import { useState } from "react";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function ProductTable({ products, setProducts }) {
  const URL = "http://localhost:8080/products";
  const [open, setOpen] = useState(false);

  function handleClose(event, reason) {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  }

  useEffect(() => {
    fetchProductData();
  }, []);

  async function fetchProductData() {
    const FETCHED_DATA = await fetch(URL);
    const FETCHED_JSON = await FETCHED_DATA.json();
    setProducts(FETCHED_JSON.data);
  }

  async function handleDelete(productId) {
    deleteProduct(productId, setProducts, URL);
  }

  const columns = [
    { field: "id", headerName: "ID", width: 130 },
    {
      field: "image",
      headerName: "Image",
      height: 200,
      renderCell: (params) => {
        return <img src={params.row.image} style={{ width: "100px" }} />;
      },
    },
    { field: "productname", headerName: "Title", with: 130 },
    { field: "description", headerName: "Description", with: 150 },
    { field: "price", headerName: "Price", with: 50 },
    { field: "stock", headerName: "Stock", with: 80 },
    { field: "color", headerName: "Color", with: 80 },
    { field: "category", headerName: "Category", width: 90 },
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
      <Typography variant="h3" marginBottom={3}>
        Products
      </Typography>
      <DataGrid
        rows={products}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />

      <Link to={"/addproduct"}>
        <Button color="info" variant="contained" sx={{ marginTop: 5 }}>
          BACK
        </Button>
      </Link>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert severity="success" sx={{ width: "100%" }}>
          Deleted !
        </Alert>
      </Snackbar>
    </Container>
  );
}
