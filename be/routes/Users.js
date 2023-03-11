import express from "express";
import { addUser, editUser, getUsers } from "../services/user-services.js";

const user_router = express.Router();

user_router.get("/users", async (request, response) => {
  const result = await getUsers();
  response.status(200).send(result);
});

user_router.post("/users", async (request, response) => {
  const {
    firstName,
    lastName,
    birthDate,
    email,
    phoneNumber,
    roleId,
    address,
  } = request.body;

  const result = await addUser(
    firstName,
    lastName,
    birthDate,
    email,
    phoneNumber,
    roleId,
    address
  );

  response.status(200).send(result);
});

user_router.put("/users", async (request, response) => {
  const { userId, lastName, email, phoneNumber, roleId, address } =
    request.body;

  const result = await editUser(
    userId,
    lastName,
    email,
    phoneNumber,
    roleId,
    address
  );

  response.status(200).send(result);
});

export default user_router;
