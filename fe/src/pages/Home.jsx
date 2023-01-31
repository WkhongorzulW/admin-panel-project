import * as React from "react";
import { Route, Routes } from "react-router-dom";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import SideBar from "../components/SideBar";
import ProductForm from "../components/ProductForm";
import Users from "./User";
import UserForm from "../components/UserForm";

export default function Home() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
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
        <Route path="/dashboard" element={<ProductForm />} />
        <Route path="/users" element={<UserForm />} />
      </Routes>
    </Box>
  );
}
