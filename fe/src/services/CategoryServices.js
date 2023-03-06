import axios from "axios";

/*------------- POST ------------*/
export async function addCategory(e, setCategories, URL) {
  e.preventDefault();
  console.log(e.target.categoryName.value);
  console.log(e.target.categoryDescription.value);

  const FETCHED_DATA = await axios({
    url: URL,
    method: "POST",
    data: {
      categoryName: e.target.categoryName.value,
      categoryDescription: e.target.categoryDescription.value,
    },
  });
  setCategories(FETCHED_DATA);
}

/*------------ DELETE -------------*/
export async function deleteCategory(e, setCategories, URL){
  const FETCHED_DATA = await axios({
    url: URL,
    method: "DELETE",
    data: {
      
    }
  })
}