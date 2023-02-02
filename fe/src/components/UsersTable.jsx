import { Container } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect } from "react";

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
  { field: "actions", headerName: "Actions", with: 200 },
];

export default function UsersTable({ users, setUsers }) {
  const URL = "http://localhost:8080/users";

  useEffect(() => {
    fetchUserData();
    console.log(users);
  }, []);

  async function fetchUserData() {
    const FETCHED_DATA = await fetch(URL);
    const FETCHED_JSON = await FETCHED_DATA.json();
    setUsers(FETCHED_JSON.data);
  }

  return (
    <Container style={{ height: 400, width: "100%" }}>
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
