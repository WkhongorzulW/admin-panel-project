import { Container } from "@mui/system";
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  TextField,
  Typography,
} from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { editUser } from "../services/UsersServices";
import { UEBreadCrumbs } from "../components/UBreadCrumbs";
import { UserContext } from "../contexts/UserContext";

export default function EditUsersForm() {
  const URL = "http://localhost:8080/users";

  const { setUsers } = useContext(UserContext);

  const navigate = useNavigate();
  const userData = useLocation();

  const [currentUser, setCurrentUser] = useState(userData.state.user[0]);

  async function handleEdit(e) {
    e.preventDefault();
    editUser(e, setUsers, URL, currentUser);
    navigate("/userlist");
  }

  function handleFirstname(e) {
    setCurrentUser({ ...currentUser, firstname: e.target.value });
  }
  function handleLastname(e) {
    setCurrentUser({ ...currentUser, lastname: e.target.value });
  }
  function handleEmail(e) {
    setCurrentUser({ ...currentUser, email: e.target.value });
  }
  function handleAge(e) {
    setCurrentUser({ ...currentUser, age: e.target.value });
  }
  function handlePhoneNumber(e) {
    setCurrentUser({ ...currentUser, phonenumber: e.target.value });
  }
  function handleRole(e) {
    setCurrentUser({ ...currentUser, role: e.target.value });
  }

  return (
    <Container maxWidth="lg" sx={{ margin: "0 auto", paddingBottom: 5 }}>
      <UEBreadCrumbs />
      <Typography variant="h3" sx={{ marginBottom: 3, marginTop: 10 }}>
        EDIT USER
      </Typography>
      <Box maxWidth="md" sx={{ margin: "0 auto" }}>
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
            variant={"outlined"}
            fullWidth={true}
            defaultValue={currentUser.firstname}
            onChange={handleFirstname}
          />
          <TextField
            name={"lastname"}
            type={"text"}
            label={"Last name"}
            variant={"outlined"}
            fullWidth={true}
            defaultValue={currentUser.lastname}
            onChange={handleLastname}
          />
          <TextField
            name={"email"}
            type={"email"}
            label={"Email"}
            variant={"outlined"}
            fullWidth={true}
            defaultValue={currentUser.email}
            onChange={handleEmail}
          />
          <TextField
            name={"age"}
            type={"number"}
            label={"Age"}
            variant={"outlined"}
            fullWidth={true}
            defaultValue={currentUser.age}
            onChange={handleAge}
          />
          <TextField
            name={"phonenumber"}
            type={"tel"}
            label={"Phone number"}
            variant={"outlined"}
            fullWidth={true}
            defaultValue={currentUser.phonenumber}
            onChange={handlePhoneNumber}
          />
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="other" control={<Radio />} label="Other" />
          <TextField
            name={"role"}
            type={"text"}
            label={"Role"}
            variant={"outlined"}
            fullWidth={true}
            defaultValue={currentUser.role}
            onChange={handleRole}
          />
          <TextField
            name={"image"}
            label={"Image URL"}
            variant={"outlined"}
            fullWidth={true}
          />

          <TextField
            name={"password"}
            type={"password"}
            label={"Password"}
            variant={"outlined"}
            fullWidth={true}
          />
        </FormControl>
        <Link to={"/userlist"}>
          <Button color="info" variant="contained" sx={{ marginTop: 2 }}>
            BACK
          </Button>
        </Link>
        {"     "}
        <Button
          variant={"contained"}
          type="submit"
          sx={{ marginTop: 2 }}
          color={"success"}
          onClick={handleEdit}
        >
          Save
        </Button>
      </Box>
    </Container>
  );
}
