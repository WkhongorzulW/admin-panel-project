import * as React from "react";
import { Route, Routes } from "react-router-dom";
import { Box, AppBar, Toolbar, Typography } from "@mui/material";
import SideBar from "../components/SideBar";
import ProductForm from "../components/ProductForm";
import Users from "./User";
import UserForm from "../components/UserForm";
import { useState } from "react";
import { useEffect } from "react";
import ProductTable from "../components/ProductTable";

export default function Home() {
  const URL = "http://localhost:8080/products";
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUserData();
  }, []);

  async function fetchUserData() {
    const FETCHED_DATA = await fetch(URL);
    const FETCHED_JSON = await FETCHED_DATA.json();
    setUsers(FETCHED_JSON.data);
  }
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
          element={<ProductTable users={users} setUsers={setUsers} URL={URL} />}
        />
        <Route
          path="/addproduct"
          element={<ProductForm users={users} setUsers={setUsers} URL={URL} />}
        />
        <Route path="/userlist" element={<Users />} />
        <Route path="/adduser" element={<UserForm />} />
      </Routes>
    </Box>
  );
}
