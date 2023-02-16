import { Container } from "@mui/system";
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  MenuItem,
  Radio,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { addUsers } from "../services/UsersServices";
import { UFBreadCrumbs } from "../components/UBreadCrumbs";
import { useEffect, useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export default function UserForm({ setUsers }) {
  const URL = "http://localhost:8080/users";
  const ROLE_URL = "http://localhost:8080/users/roles";

  const { roles, setRoles, currentRole, setCurrentRole } =
    useContext(UserContext);

  useEffect(() => {
    fetchRoles();
  }, []);

  async function fetchRoles() {
    const FETCHED_DATA = await fetch(ROLE_URL);
    const FETCHED_JSON = await FETCHED_DATA.json();
    setRoles(FETCHED_JSON.data);
  }

  function handleSelectChange(e) {
    setCurrentRole(e.target.value);
  }

  const navigate = useNavigate();

  async function handleSubmit(e) {
    addUsers(e, setUsers, URL);
    navigate("/userlist");
  }

  return (
    <Container maxWidth="lg" sx={{ margin: "0 auto", paddingBottom: 5 }}>
      <UFBreadCrumbs />
      <Typography variant="h3" sx={{ mb: 2, mt: 10 }}>
        ADD USER
      </Typography>
      <Box maxWidth="md" sx={{ margin: "0 auto" }}>
        <form onSubmit={handleSubmit}>
          <FormControl
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              flexWrap: "wrap",
              justifyContent: "center",
            }}
            fullWidth={true}
          >
            <TextField
              name={"firstname"}
              type={"text"}
              label={"First name"}
              variant={"filled"}
              fullWidth={true}
            />
            <TextField
              name={"lastname"}
              type={"text"}
              label={"Last name"}
              variant={"filled"}
              fullWidth={true}
            />
            <TextField
              name={"email"}
              type={"email"}
              label={"Email"}
              variant={"filled"}
              fullWidth={true}
            />
            <TextField
              name={"age"}
              type={"number"}
              label={"Age"}
              variant={"filled"}
              fullWidth={true}
            />
            <TextField
              name={"phonenumber"}
              type={"tel"}
              label={"Phone number"}
              variant={"filled"}
              fullWidth={true}
            />
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
            <Grid item xs={12}>
              <InputLabel>User Roles</InputLabel>
              <Select
                id="role-selector"
                value={currentRole}
                label="Roles"
                onChange={handleSelectChange}
              >
                {roles &&
                  roles.map((role, index) => {
                    return (
                      <MenuItem key={index} value={role.id}>
                        {role.name}
                      </MenuItem>
                    );
                  })}
              </Select>
            </Grid>
            <TextField
              name={"password"}
              type={"password"}
              label={"Password"}
              variant={"filled"}
              fullWidth={true}
            />
          </FormControl>

          <Button
            variant={"contained"}
            type="submit"
            sx={{ marginTop: 2 }}
            color={"success"}
          >
            Submit
          </Button>
        </form>
      </Box>
    </Container>
  );
}
