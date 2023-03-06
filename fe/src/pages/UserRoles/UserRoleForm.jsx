import { Button, FormControl, TextField, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import { addRole } from "../../services/RoleServices";
import { useContext } from "react";
import { UserRoleContext } from "../../contexts/UserRoleContext";
import { useNavigate } from "react-router-dom";

export default function UserRoleForm() {
  const [userRoles, setUserRoles, URL] = useContext(UserRoleContext);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    addRole(e, userRoles, setUserRoles, URL);
    navigate("/user/role/list");
  }

  return (
    <Container>
      <Typography variant="h3" sx={{ mb: 2, mt: 10 }}>
        ADD ROLE
      </Typography>
      <Box maxWidth="md" sx={{ margin: "0 auto" }}>
        <form onSubmit={handleSubmit}>
          <FormControl sx={{ margin: "0 auto" }}>
            <TextField
              name="roleName"
              type="text"
              label="Role name"
              variant="filled"
            />
            <br />
            <Button
              type="submit"
              variant="contained"
              sx={{ marginTop: 2 }}
              color="success"
            >
              Add
            </Button>
          </FormControl>
        </form>
      </Box>
    </Container>
  );
}
