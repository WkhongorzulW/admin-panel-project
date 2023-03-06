import axios from "axios";

/*------------- POST ------------*/
export async function addCategory(e, categories, setCategories, URL) {
  e.preventDefault();

  const FETCHED_DATA = await axios({
    url: URL,
    method: "POST",
    data: {
      categoryName: e.target.categoryName.value,
      categoryDescription: e.target.categoryDescription.value,
    },
  });
  setCategories(FETCHED_DATA);
  console.log(categories);
}

/*-------------- EDIT --------------*/
export async function editCategory(
  categories,
  setCategories,
  URL,
  currentCategory
) {
  const FETCHED_DATA = await axios({
    url: URL,
    method: "PUT",
    data: {
      categoryId: currentCategory.id,
      categoryName: currentCategory.product_category_name,
      categoryDescription: currentCategory.product_category_description,
    },
  });
  setCategories(FETCHED_DATA);
  console.log(categories);
}

/*------------ DELETE -------------*/
export async function deleteCategory(
  categoryId,
  categories,
  setCategories,
  URL
) {
  console.log(categoryId);
  const FETCHED_DATA = await axios({
    url: URL,
    method: "DELETE",
    data: {
      categoryId: categoryId,
    },
  });
  setCategories(FETCHED_DATA);
  console.log(categories);
}
