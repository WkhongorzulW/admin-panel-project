import { Container, Typography } from "@mui/material";
import { useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";

export default function ProductTable({ products, setProducts }) {
  const URL = "http://localhost:8080/products";

  const columns = [
    { field: "id", headerName: "ID", width: 200 },
    { field: "image", headerName: "Image", with: 150 },
    { field: "productname", headerName: "Title", with: 130 },
    { field: "description", headerName: "Description", with: 150 },
    { field: "price", headerName: "Price", with: 80 },
    { field: "stock", headerName: "Stock", with: 80 },
    { field: "color", headerName: "Color", with: 50 },
    { field: "category", headerName: "Category", width: 120 },
    { field: "actions", headerName: "Actions", with: 200 },
  ];

  useEffect(() => {
    fetchProductData();
    console.log(products);
  }, []);

  async function fetchProductData() {
    const FETCHED_DATA = await fetch(URL);
    const FETCHED_JSON = await FETCHED_DATA.json();
    setProducts(FETCHED_JSON.data);
  }
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
