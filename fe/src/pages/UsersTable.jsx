import { Button, Container, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect } from "react";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import AutoFixHighOutlinedIcon from "@mui/icons-material/AutoFixHighOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

export default function UsersTable({ users, setUsers }) {
  const URL = "http://localhost:8080/users";

  useEffect(() => {
    fetchUserData();
  }, []);

  async function fetchUserData() {
    const FETCHED_DATA = await fetch(URL);
    const FETCHED_JSON = await FETCHED_DATA.json();
    setUsers(FETCHED_JSON.data);
  }

  async function handleDelete(userId) {
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: userId,
      }),
    };

    const FETCHED_DATA = await fetch(URL, options);
    const FETCHED_JSON = await FETCHED_DATA.json();
    setUsers(FETCHED_JSON.data);
  }

  const columns = [
    { field: "id", headerName: "ID", width: 200 },
    { field: "firstname", headerName: "First name", width: 130 },
    { field: "lastname", headerName: "Last name", width: 130 },
    { field: "phonenumber", headerName: "Phone number", width: 130 },
    { field: "email", headerName: "Email", width: 150 },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 50,
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
            <Link to={`/edituser/${params.row.id}`}>
              <Button
                state={{ user: users.map((u) => u.id === params.row.id) }}
              >
                <AutoFixHighOutlinedIcon />
              </Button>
            </Link>
            <Button onClick={() => handleDelete(params.row.id)}>
              <DeleteOutlineIcon />
            </Button>
          </Box>
        );
      },
    },
  ];

  return (
    <Container style={{ height: 400, width: "100%" }}>
      <Typography variant="h3" sx={{ mb: 3 }}>
        Users page
      </Typography>
      <DataGrid
        rows={users}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </Container>
  );
}
