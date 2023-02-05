import axios from "axios";

/*------------- POST -------------*/
async function addProduct(e, setProducts, URL) {
  e.preventDefault();

  const postProductData = {
    image: e.target.image.value,
    productname: e.target.productname.value,
    price: e.target.price.value,
    stock: e.target.stock.value,
    color: e.target.color.value,
    category: e.target.category.value,
    description: e.target.description.value,
  };

  const FETCHED_DATA = await axios({
    url: URL,
    method: "POST",
    data: postProductData,
  });
  setProducts(FETCHED_DATA.data.data);
}

async function deleteProduct(productId, setProducts, URL) {
  const FETCHED_DATA = await axios({
    url: URL,
    method: "DELETE",
    data: {
      productId: productId,
    },
  });
  setProducts(FETCHED_DATA.data.data);
}

async function editProduct(e, setProducts, URL, currentProduct) {
  e.preventDefault();

  const putProductData = {
    id: currentProduct.id,
    image: currentProduct.image,
    productname: currentProduct.productname,
    price: currentProduct.price,
    stock: currentProduct.stock,
    color: currentProduct.color,
    category: currentProduct.category,
    description: currentProduct.description,
  };

  const FETCHED_DATA = await axios({
    url: URL,
    method: "PUT",
    data: putProductData,
  });
  setProducts(FETCHED_DATA.data.data);
}

export { addProduct, deleteProduct, editProduct };
