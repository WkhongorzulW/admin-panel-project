import * as React from "react";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";

export function LIprofile() {
  return (
    <Link to={"/profle"}>
      <ListItemText primary={"Profile"} />
    </Link>
  );
}

export function LIdashboard() {
  return (
    <Link to={"/dashboard"}>
      <ListItemText primary={"Dashboard"} />
    </Link>
  );
}

export function LIEcommerce() {
  return (
    <Link to={"/ecommerce"}>
      <ListItemText primary={"E-commerce"} />
    </Link>
  );
}

export function LIuser() {
  return (
    <Link to={"/users"}>
      <ListItemText primary={"User"} />
    </Link>
  );
}

export function LIdoc() {
  return (
    <Link to={"/doc"}>
      <ListItemText primary={"Documentation"} />
    </Link>
  );
}
