import * as React from "react";
import { Route, Routes } from "react-router-dom";
import { Box, AppBar, Toolbar, Typography } from "@mui/material";
import SideBar from "../components/SideBar";
import ProductForm from "../components/ProductForm";
import UserForm from "../components/UserForm";
import { useState } from "react";
import ProductTable from "./ProductTable";
import UsersTable from "./UsersTable";
import EditProductsForm from "../components/EditProductsForm";
import EditUsersForm from "../components/EditUsersForm";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Admin Panel
          </Typography>
        </Toolbar>
      </AppBar>

      <SideBar />

      <Routes>
        <Route
          path="/productlist"
          element={
            <ProductTable products={products} setProducts={setProducts} />
          }
        />
        <Route
          path="/addproduct"
          element={
            <ProductForm products={products} setProducts={setProducts} />
          }
        />
        <Route
          path="/editproduct/:id"
          element={
            <EditProductsForm products={products} setProducts={setProducts} />
          }
        />
        <Route
          path="/userlist"
          element={<UsersTable users={users} setUsers={setUsers} />}
        />
        <Route
          path="/adduser"
          element={<UserForm users={users} setUsers={setUsers} />}
        />
        <Route
          path={"/edituser/:id"}
          element={<EditUsersForm users={users} setUsers={setUsers} />}
        />
      </Routes>
    </Box>
  );
}
