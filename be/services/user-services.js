import { pool } from "../config/mysql-config.js";

export async function getUsers() {
  const query = `select user_id as id, first_name, last_name, birth_date, email, phone_number, address, user_role_id from user`;
  const [rows] = await pool.query(query);
  return rows;
}

export async function addUser(
  firstName,
  lastName,
  birthDate,
  email,
  phoneNumber,
  roleId,
  address
) {
  const query = `insert into user (first_name, last_name, birth_date, email, phone_number, user_role_id, address) values (?, ?, ?, ?, ?, ${roleId}, ?)`;

  const [rows] = await pool.query(query, [
    firstName,
    lastName,
    birthDate,
    email,
    phoneNumber,
    address,
  ]);

  return rows;
}

export async function editUser(
  userId,
  lastName,
  email,
  phoneNumber,
  roleId,
  address
) {
  const query = `update user set last_name='${lastName}', email='${email}', phone_number='${phoneNumber}', user_role_id=${roleId}, address='${address}' where user_id=${userId}`;

  const [rows] = await pool.query(query);

  return rows;
}
