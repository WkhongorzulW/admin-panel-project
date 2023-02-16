import { Button, Container, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useContext, useEffect } from "react";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import AutoFixHighOutlinedIcon from "@mui/icons-material/AutoFixHighOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { deleteUser } from "../services/UsersServices";
import { ULBreadCrumbs } from "../components/UBreadCrumbs";
import { UserContext } from "../contexts/UserContext";

export default function UsersTable() {
  const URL = "http://localhost:8080/users";

  const { users, setUsers } = useContext(UserContext);

  useEffect(() => {
    fetchUserData();
  }, []);

  async function fetchUserData() {
    const FETCHED_DATA = await fetch(URL);
    const FETCHED_JSON = await FETCHED_DATA.json();
    setUsers(FETCHED_JSON.data);
  }

  async function handleDelete(userId) {
    deleteUser(userId, setUsers, URL);
  }

  const columns = [
    { field: "id", headerName: "ID", width: 130 },
    { field: "firstname", headerName: "First name", width: 130 },
    { field: "lastname", headerName: "Last name", width: 130 },
    { field: "phonenumber", headerName: "Phone number", width: 130 },
    { field: "email", headerName: "Email", width: 150 },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 80,
    },
    {
      field: "role",
      headerName: "Role",
      with: 120,
    },
    {
      field: "actions",
      headerName: "Actions",
      flex: 1,
      renderCell: (params) => {
        return (
          <Box>
            <Link
              to={`/edituser/${params.row.id}`}
              state={{ user: users.filter((u) => u.id === params.row.id) }}
            >
              <Button color="info" variant="outlined">
                <AutoFixHighOutlinedIcon />
              </Button>
            </Link>{" "}
            <Button
              onClick={() => handleDelete(params.row.id)}
              color="error"
              variant="contained"
            >
              <DeleteOutlineIcon />
            </Button>
          </Box>
        );
      },
    },
  ];

  return (
    <Container style={{ height: 400, width: "100%" }}>
      <ULBreadCrumbs />
      <Typography variant="h3" sx={{ mb: 3, mt: 10 }}>
        Users page
      </Typography>
      <DataGrid
        rows={users}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
      <Link to={"/adduser"}>
        <Button color="info" variant="contained" sx={{ marginTop: 5 }}>
          BACK
        </Button>
      </Link>
    </Container>
  );
}
