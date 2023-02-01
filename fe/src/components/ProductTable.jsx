import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect } from "react";

export default function ProductTable({ products, setProducts }) {
  const URL = "http://localhost:8080/products";

  useEffect(() => {
    fetchUserData();
    console.log(products);
  }, []);

  async function fetchUserData() {
    const FETCHED_DATA = await fetch(URL);
    const FETCHED_JSON = await FETCHED_DATA.json();
    setProducts(FETCHED_JSON.data);
  }
  return (
    <Container>
      {products &&
        products.map((product, index) => {
          return (
            <Container>
              <Typography variant="h5">{product.productname}</Typography>
            </Container>
          );
        })}
    </Container>
  );
}
