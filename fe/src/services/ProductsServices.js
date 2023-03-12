import axios from "axios";

/*------------- POST -------------*/
export async function addProduct(e, setProducts, URL) {
  e.preventDefault();
  console.log(e.target.categoryId.value);

  const postProductData = {
    productImage: e.target.productImage.value,
    productName: e.target.productName.value,
    productPrice: e.target.productPrice.value,
    quantity: e.target.quantity.value,
    categoryId: e.target.categoryId.value,
    productDescription: e.target.productDescription.value,
  };

  const FETCHED_DATA = await axios({
    url: URL,
    method: "POST",
    data: postProductData,
  });
  setProducts(FETCHED_DATA);
}

// async function deleteProduct(productId, setProducts, URL) {
//   const FETCHED_DATA = await axios({
//     url: URL,
//     method: "DELETE",
//     data: {
//       productId: productId,
//     },
//   });
//   setProducts(FETCHED_DATA);
//   console.log(productId);
// }

export async function editProduct(e, setProducts, URL, currentProduct) {
  e.preventDefault();

  const putProductData = {
    productId: currentProduct.id,
    prodcutImage: currentProduct.image_path,
    productName: currentProduct.product_name,
    productPrice: currentProduct.product_price,
    quantity: currentProduct.product_quantity,
    categoryId: currentProduct.product_category_id,
    productDescription: currentProduct.product_description,
  };

  console.log(putProductData);

  const FETCHED_DATA = await axios({
    url: URL,
    method: "PUT",
    data: putProductData,
  });
  console.log(FETCHED_DATA);
  setProducts(FETCHED_DATA);
}
