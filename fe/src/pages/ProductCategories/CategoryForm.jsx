import { Box, Button, FormControl, TextField, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CategoryContext } from "../../contexts/CategoryContext";
import { addCategory } from "../../services/CategoryServices";

export default function CategoryForm() {
  const [categories, setCategories, URL] = useContext(CategoryContext);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    addCategory(e, categories, setCategories, URL);
    navigate("/product/category/list");
  }

  return (
    <Container>
      <Typography variant="h3" sx={{ mb: 2, mt: 10 }}>
        ADD PRODUCT CATEGORY
      </Typography>
      <Box maxwidth="md" sx={{ margin: "0 auto" }}>
        <form onSubmit={handleSubmit}>
          <FormControl sx={{ margin: "0 auto" }}>
            <TextField
              name="categoryName"
              type="text"
              label="Category name"
              variant="filled"
            />
            <TextField
              name="categoryDescription"
              type="text"
              label="Description"
              variant="filled"
            />
            <br />
            <Button
              type="submit"
              variant="contained"
              sx={{ marginTop: 2 }}
              color="success"
            >
              ADD
            </Button>
          </FormControl>
        </form>
      </Box>
    </Container>
  );
}
