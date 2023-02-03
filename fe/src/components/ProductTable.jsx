import { Button, Container, Typography } from "@mui/material";
import { useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import AutoFixHighOutlinedIcon from "@mui/icons-material/AutoFixHighOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

export default function ProductTable({ products, setProducts }) {
  const URL = "http://localhost:8080/products";

  useEffect(() => {
    fetchProductData();
  }, []);

  async function fetchProductData() {
    const FETCHED_DATA = await fetch(URL);
    const FETCHED_JSON = await FETCHED_DATA.json();
    setProducts(FETCHED_JSON.data);
  }

  async function handleDelete(productId) {
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        productId: productId,
      }),
    };

    const FETCHED_DATA = await fetch(URL, options);
    const FETCHED_JSON = await FETCHED_DATA.json();
    setProducts(FETCHED_JSON.data);
  }

  async function handleEdit(productId) {
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        productId: productId,
      }),
    };

    const FETCHED_DATA = await fetch(URL, options);
    const FETCHED_JSON = await FETCHED_DATA.json();
    setProducts(FETCHED_JSON.data);
  }

  const columns = [
    { field: "id", headerName: "ID", width: 150 },
    { field: "image", headerName: "Image", with: 150 },
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
            <Link to={"/addproduct"}>
              <Button
                onClick={() => handleEdit(params.row.id)}
                state={{
                  product: products.filter((p) => p.id === params.row.id),
                }}
              >
                <AutoFixHighOutlinedIcon />
              </Button>
            </Link>
            <Button onClick={() => handleDelete(params.row.id)}>
              <DeleteOutlineIcon />
            </Button>
          </Box>
        );
      },
    },
  ];

  return (
    <Container style={{ height: 400, width: "100%" }}>
      <Typography variant="h3" marginBottom={3}>
        Product Page
      </Typography>
      <DataGrid
        rows={products}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </Container>
  );
}
