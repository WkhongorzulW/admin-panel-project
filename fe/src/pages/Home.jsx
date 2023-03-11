import * as React from "react";
import { ToastContainer } from "react-toastify";
import { Route, Routes } from "react-router-dom";
import { Box, AppBar, Toolbar, Typography } from "@mui/material";
import SideBar from "../components/SideBar";
import ProductForm from "./Products/ProductForm";
import UserForm from "./Users/UserForm";
import ProductTable from "./Products/ProductTable";
import UsersTable from "./Users/UsersTable";
import EditProductsForm from "./Products/EditProductsForm";
import EditUsersForm from "./Users/EditUsersForm";
import LoginForm from "./LoginForm";
import UserRoleForm from "./UserRoles/UserRoleForm";
import UserRoleTable from "./UserRoles/UserRoletable";
import EditUserRoleForm from "./UserRoles/EditUserRoleForm";
import CategoryForm from "./ProductCategories/CategoryForm";
import CategoriesTable from "./ProductCategories/CategoryTable";
import EditCategoryForm from "./ProductCategories/CategoryEditForm";

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
        <Route path="/user/list" element={<UsersTable />} />
        <Route path="/user/add" element={<UserForm />} />
        <Route path={"/edituser/:id"} element={<EditUsersForm />} />
        <Route path="/user/login" element={<LoginForm />} />
        <Route path="/user/role/add" element={<UserRoleForm />} />
        <Route path="/user/role/list" element={<UserRoleTable />} />
        <Route path="/user/role/edit/:id" element={<EditUserRoleForm />} />
        <Route path="/product/category/add" element={<CategoryForm />} />
        <Route path="/product/category/list" element={<CategoriesTable />} />
        <Route
          path="/product/category/edit/:id"
          element={<EditCategoryForm />}
        />
      </Routes>

      <ToastContainer />
    </Box>
  );
}
