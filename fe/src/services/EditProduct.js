function handlePname(e, currentProduct, setCurrentProduct) {
  setCurrentProduct({ ...currentProduct, productname: e.target.value });
}
function handlePrice(e, currentProduct, setCurrentProduct) {
  setCurrentProduct({ ...currentProduct, price: e.target.value });
}
function handleStock(e, currentProduct, setCurrentProduct) {
  setCurrentProduct({ ...currentProduct, stock: e.target.value });
}
function handleColor(e, currentProduct, setCurrentProduct) {
  setCurrentProduct({ ...currentProduct, color: e.target.value });
}
function handleCategory(e, currentProduct, setCurrentProduct) {
  setCurrentProduct({ ...currentProduct, category: e.target.value });
}
function handleDescription(e, currentProduct, setCurrentProduct) {
  setCurrentProduct({ ...currentProduct, description: e.target.value });
}

export {
  handlePname,
  handlePrice,
  handleStock,
  handleColor,
  handleCategory,
  handleDescription,
};
