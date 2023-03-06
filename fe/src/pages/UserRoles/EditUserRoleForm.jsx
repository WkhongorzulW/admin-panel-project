import { Button, FormControl, TextField, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserRoleContext } from "../../contexts/UserRoleContext";
import { editRoleName } from "../../services/RoleServices";

export default function EditUserRoleForm() {
  const [userRoles, setUserRoles, URL] = useContext(UserRoleContext);
  const userRoleData = useLocation();
  const navigate = useNavigate();

  const [currentRole, setCurrentRole] = useState(userRoleData.state.role[0]);

  function handleRoleName(e) {
    setCurrentRole({ ...currentRole, user_role_name: e.target.value });
  }

  async function handleEdit() {
    editRoleName(userRoles, setUserRoles, URL, currentRole);
    navigate("/user/role/list");
  }

  return (
    <Container>
      <Typography variant="h3" sx={{ marginBottom: 3, marginTop: 10 }}>
        EDIT USER ROLE
      </Typography>
      {currentRole && (
        <Box maxWidth="md" sx={{ margin: "0 auto" }}>
          <FormControl
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <TextField
              name="roleName"
              label="Role name"
              variant="filled"
              defaultValue={currentRole.user_role_name}
              onChange={handleRoleName}
            />
            <TextField
              name="roleId"
              label="Role id"
              variant="filled"
              defaultValue={currentRole.id}
            />
          </FormControl>
          <Link to={"/user/role/list"}>
            <Button
              variant="contained"
              sx={{ marginTop: 2, marginRight: 3 }}
              color="info"
            >
              BACK
            </Button>
          </Link>
          <Button
            type="submit"
            variant="contained"
            sx={{ marginTop: 2 }}
            color="success"
            onClick={handleEdit}
          >
            SAVE
          </Button>
        </Box>
      )}
    </Container>
  );
}
