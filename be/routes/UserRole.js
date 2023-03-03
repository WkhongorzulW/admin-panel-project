import express from "express";
import {
  addRoles,
  deleteRole,
  getRoles,
  updateRoles,
} from "../services/UserRoleServices.js";

const role_router = express.Router();

role_router.get("/userroles", async (request, response) => {
  const result = await getRoles();

  response.status(200).send(result);
});

role_router.post("/userroles", async (request, response) => {
  const { roleName } = request.body;
  const result = await addRoles(roleName);

  response.status(200).send(result);
});

role_router.put("/userroles", async (request, response) => {
  const { roleId, roleName } = request.body;

  const result = await updateRoles(roleId, roleName);

  response.status(200).send(result);
});

role_router.delete("/userroles", async (request, response) => {
  const body = request.body;

  const result = await deleteRole(body.roleName);

  response.status(200).send(result);
});

export default role_router;
