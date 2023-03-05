import express from "express";
import {
  addCategories,
  getCategories,
} from "../services/ProductCategoryServices.js";

const category_router = express.Router();

category_router.get("/categories", async (request, response) => {
  const result = await getCategories();

  response.status(200).send(result);
});

category_router.post("/categories", async (request, response) => {
  console.log(request.body);
  const { categoryName, categoryDescription } = request.body;
  const result = await addCategories(categoryName, categoryDescription);

  response.status(200).send(result);
});

export default category_router;
