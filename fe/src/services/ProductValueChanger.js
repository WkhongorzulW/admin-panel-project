function handlePname(e, currentProduct, setCurrentProduct) {
  setCurrentProduct({ ...currentProduct, productname: e.target.value });
}

export default handlePname;
