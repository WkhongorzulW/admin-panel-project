import { pool } from "../config/mysql-config.js";

export async function getProducts() {
  const query = `select product_id as id, image_path, product_name, product_description, product_price, product_quantity, product_category_id, product_description from product`;

  const [rows] = await pool.query(query);
  return rows;
}

export async function addProduct(
  productImage,
  productName,
  productPrice,
  quantity,
  categoryId,
  productDescription
) {
  const query = `insert into product (image_path, product_name, product_price, product_quantity, product_category_id, product_description) values (?, ?, ${productPrice}, ${quantity}, ${categoryId}, ?);`;

  const [rows] = await pool.query(query, [
    productImage,
    productName,
    productDescription,
  ]);

  return rows;
}

export async function deleteProduct(productId) {
  const query = `delete from product where product_id=${productId}`;

  const [rows] = await pool.query(query);

  return rows;
}

export async function editProduct(
  productId,
  productImage,
  productName,
  productPrice,
  quantity,
  productDescription
) {
  const query = `update product set image_path='${productImage}', product_name='${productName}', product_price=${productPrice}, quantity=${quantity}, product_description='${productDescription}' where product_id=${productId}`;

  console.log(query);

  const [rows] = await pool.query(query);

  return rows;
}
