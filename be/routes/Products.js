import express from "express";
import {
  addProduct,
  deleteProduct,
  editProduct,
  getProducts,
} from "../services/ProductServices.js";

const product_router = express.Router();

product_router.get("/products", async (request, response) => {
  const result = await getProducts();

  response.status(200).send(result);
});

product_router.post("/products", async (request, response) => {
  const body = request.body;
  const result = await addProduct(
    body.productImage,
    body.productName,
    body.productPrice,
    body.quantity,
    body.categoryId,
    body.productDescription
  );

  response.status(200).send(result);
});

product_router.put(
  ("/products",
  async (request, response) => {
    const body = request.body;
    const result = await editProduct(
      body.productId,
      body.productImage,
      body.productName,
      body.productPrice,
      body.quantity,
      body.productDescription
    );
    console.log(body);

    response.status(200).send(result);
  })
);

product_router.delete("/products", async (request, response) => {
  const body = request.body;

  const result = await deleteProduct(body.productId);

  response.status(200).send(result);
});

export default product_router;
