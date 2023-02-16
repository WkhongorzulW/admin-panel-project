import * as React from "react";
import { ToastContainer } from "react-toastify";
import { Route, Routes } from "react-router-dom";
import { Box, AppBar, Toolbar, Typography } from "@mui/material";
import SideBar from "../components/SideBar";
import ProductForm from "./ProductForm";
import UserForm from "./UserForm";
import ProductTable from "./ProductTable";
import UsersTable from "./UsersTable";
import EditProductsForm from "./EditProductsForm";
import EditUsersForm from "./EditUsersForm";
import LoginForm from "./LoginForm";

export default function Home() {
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
          path="/"
          element={
            <Typography variant="h2" sx={{ margin: "auto" }}>
              ADMIN PANEL PROJECT
            </Typography>
          }
        />
        <Route path="/productlist" element={<ProductTable />} />
        <Route path="/addproduct" element={<ProductForm />} />
        <Route path="/editproduct/:id" element={<EditProductsForm />} />
        <Route path="/userlist" element={<UsersTable />} />
        <Route path="/adduser" element={<UserForm />} />
        <Route path={"/edituser/:id"} element={<EditUsersForm />} />
        <Route path="/user/login" element={<LoginForm />} />
      </Routes>

      <ToastContainer />
    </Box>
  );
}
