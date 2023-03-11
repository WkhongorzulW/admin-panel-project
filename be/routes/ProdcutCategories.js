import express from "express";
import {
  addCategories,
  deleteCategories,
  editCategories,
  getCategories,
} from "../services/product-category-services.js";

const category_router = express.Router();

category_router.get("/categories", async (request, response) => {
  const result = await getCategories();

  response.status(200).send(result);
});

category_router.post("/categories", async (request, response) => {
  const { categoryName, categoryDescription } = request.body;
  const result = await addCategories(categoryName, categoryDescription);

  response.status(200).send(result);
});

category_router.put("/categories", async (request, response) => {
  const { categoryId, categoryName, categoryDescription } = request.body;

  const result = await editCategories(
    categoryId,
    categoryName,
    categoryDescription
  );

  response.status(200).send(result);
});

category_router.delete("/categories", async (request, response) => {
  const { categoryId } = request.body;

  const result = await deleteCategories(categoryId);
  console.log(result);

  response.status(200).send(result);
});

export default category_router;
