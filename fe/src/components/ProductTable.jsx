import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";

export default function ProductTable({ users }) {
  return (
    <Container>
      {users &&
        users.map((user, index) => {
          return (
            <Container>
              <Typography variant="h5">{user.productname}</Typography>
            </Container>
          );
        })}
    </Container>
  );
}
