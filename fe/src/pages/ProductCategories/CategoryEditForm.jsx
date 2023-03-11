import { Button, FormControl, TextField, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { CategoryContext } from "../../contexts/CategoryContext";
import { editCategory } from "../../services/CategoryServices";

export default function EditCategoryForm() {
  const [categories, setCategories, URL] = useContext(CategoryContext);
  const categoryData = useLocation();
  const navigate = useNavigate();

  const [currentCategory, setCurrentCategory] = useState(
    categoryData.state.category[0]
  );

  function handleCategoryName(e) {
    setCurrentCategory({
      ...currentCategory,
      product_category_name: e.target.value,
    });
  }

  function handleCategoryDescription(e) {
    setCurrentCategory({
      ...currentCategory,
      product_category_description: e.target.value,
    });
  }

  async function handleEdit() {
    editCategory(categories, setCategories, URL, currentCategory);
    navigate("/product/category/list");
  }

  return (
    <Container>
      <Typography variant="h3" sx={{ marginBottom: 3, marginTop: 10 }}>
        EDIT PRODUCT CATEGORY
      </Typography>
      {currentCategory && (
        <Box maxWidth="md" sx={{ margin: "0 auto" }}>
          <FormControl
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <TextField
              name="categoryName"
              label="Category name"
              variant="filled"
              defaultValue={currentCategory.product_category_name}
              onChange={handleCategoryName}
            />
            <TextField
              name="categoryDescription"
              label="Category Description"
              variant="filled"
              defaultValue={currentCategory.product_category_description}
              onChange={handleCategoryDescription}
            />
            <TextField
              name="categoryId"
              label="Category id"
              type={"number"}
              variant="filled"
            />
          </FormControl>
          <Link to="/product/category/list">
            <Button
              type="submit"
              variant="contained"
              sx={{ marginTop: 2 }}
              color="success"
              onClick={handleEdit}
            >
              SAVE
            </Button>
          </Link>
        </Box>
      )}
    </Container>
  );
}
