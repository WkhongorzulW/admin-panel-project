import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Typography } from "@mui/material";

function ULBreadCrumbs() {
  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/">
      Users
    </Link>,
    <Typography key="3" color="text.primary">
      User List
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

function UFBreadCrumbs() {
  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/">
      Users
    </Link>,
    <Typography key="3" color="text.primary">
      Add User
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

function UEBreadCrumbs() {
  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/">
      Users
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href="/material-ui/getting-started/installation/"
      to={"/userlist"}
    >
      User List
    </Link>,
    <Typography key="3" color="text.primary">
      Edit User
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

export { ULBreadCrumbs, UFBreadCrumbs, UEBreadCrumbs };
