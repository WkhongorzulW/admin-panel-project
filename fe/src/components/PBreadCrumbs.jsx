import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Typography } from "@mui/material";

function PLBreadCrumbs() {
  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/">
      Dashboard
    </Link>,
    <Typography key="3" color="text.primary">
      Product List
    </Typography>,
  ];

  return (
    <Stack spacing={2}>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>
  );
}

function PFBreadCrumbs() {
  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/">
      Dashboard
    </Link>,
    <Typography key="3" color="text.primary">
      Add Product
    </Typography>,
  ];

  return (
    <Stack spacing={2}>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>
  );
}

function PEBreadCrumbs() {
  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/">
      Dashboard
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href="/material-ui/getting-started/installation/"
      to={"/productlist"}
    >
      Product List
    </Link>,
    <Typography key="3" color="text.primary">
      Edit Product
    </Typography>,
  ];

  return (
    <Stack spacing={2}>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>
  );
}

export { PLBreadCrumbs, PFBreadCrumbs, PEBreadCrumbs };
