import express from "express";
import {
  addProduct,
  deleteProduct,
  editProduct,
  getProducts,
} from "../services/product-services.js";

const product_router = express.Router();

product_router.get("/products", async (request, response) => {
  const result = await getProducts();

  response.status(200).send(result);
});

product_router.post("/products", async (request, response) => {
  const {
    productImage,
    productName,
    productPrice,
    quantity,
    categoryId,
    productDescription,
  } = request.body;
  const result = await addProduct(
    productImage,
    productName,
    productPrice,
    quantity,
    categoryId,
    productDescription
  );

  response.status(200).send(result);
});

product_router.put(
  ("/products",
  async (request, response) => {
    const {
      productId,
      productImage,
      productName,
      productPrice,
      quantity,
      categoryId,
      productDescription,
    } = request.body;
    const result = await editProduct(
      productId,
      productImage,
      productName,
      productPrice,
      quantity,
      categoryId,
      productDescription
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
