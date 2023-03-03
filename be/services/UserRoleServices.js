import { pool } from "../config/mysql-config.js";

export async function getRoles() {
  const [rows] = await pool.query(
    `select user_role_id as id, user_role_name from user_role;`
  );
  return rows;
}

export async function addRoles(roleName) {
  const query = `insert into user_role (user_role_name) values (?)`;
  const [rows] = await pool.query(query, [roleName]);

  return rows;
}

export async function updateRoles(roleId, roleName) {
  const query = `update user_role set user_role_name='${roleName}' where user_role_id=${roleId}`;
  const [rows] = await pool.query(query);
  return rows;
}

export async function deleteRole(roleName) {
  const query = `delete from user_role where user_role_name='${roleName}'`;
  const [rows] = await pool.query(query);

  return rows;
}
