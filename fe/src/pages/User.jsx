import { Container, Typography } from "@mui/material";
import UsersTable from "../components/UsersTable";

export default function Users({ users, setUsers }) {
  return (
    <Container maxWidth="lg" sx={{ marginRight: 5 }}>
      <Typography variant="h3" sx={{ mb: 3 }}>
        Users page
      </Typography>
      <UsersTable users={users} setUsers={setUsers} />
    </Container>
  );
}
