import { pool } from "../config/mysql-config.js";

export async function getCategories() {
  const query = `select product_category_id as id, product_category_name, product_category_description from product_category`;
  const [rows] = await pool.query(query);
  return rows;
}

export async function addCategories(categoryName, categoryDescription) {
  const query = `insert into product_category (product_category_name, product_category_description) values (?, ?)`;
  console.log(query);
  const [rows] = await pool.query(query, [categoryName, categoryDescription]);

  return rows;
}

export async function editCategories(
  categoryId,
  categoryName,
  categoryDescripion
) {
  const query = `update product_category set product_category_name='${categoryName}', product_category_description='${categoryDescripion}' where product_category_id=${categoryId}`;
  const [rows] = await pool.query(query);

  return rows;
}

export async function deleteCategories(categoryId) {
  const query = `delete from product_category where product_category_id=${categoryId}`;
  console.log(categoryId);
  const [rows] = await pool.query(query);

  return rows;
}
