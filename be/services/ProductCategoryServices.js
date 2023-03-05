import { pool } from "../config/mysql-config.js";

export async function getCategories() {
  const [rows] = await pool.query(
    `select product_category_id as id, product_category_name, product_category_description from product_category`
  );
  return rows;
}

export async function addCategories(categoryName, categoryDescription) {
  const query = `insert into product_category (product_category_name, product_category_description) values (?, ?)`;
  console.log(query);
  const [rows] = await pool.query(query, [categoryName, categoryDescription]);

  return rows;
}
