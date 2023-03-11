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
import { editUser } from "../../services/UsersServices";
import { UEBreadCrumbs } from "../../components/UBreadCrumbs";
import { UserContext } from "../../contexts/UserContext";

export default function EditUsersForm() {
  const { setUsers, URL } = useContext(UserContext);

  const navigate = useNavigate();
  const userData = useLocation();

  const [currentUser, setCurrentUser] = useState(userData.state.user[0]);

  async function handleEdit(e) {
    e.preventDefault();
    editUser(setUsers, URL, currentUser);
    navigate("/user/list");
  }

  function handleLastname(e) {
    setCurrentUser({ ...currentUser, last_name: e.target.value });
  }
  function handleEmail(e) {
    setCurrentUser({ ...currentUser, email: e.target.value });
  }
  function handlePhoneNumber(e) {
    setCurrentUser({ ...currentUser, phone_number: e.target.value });
  }
  function handleAddress(e) {
    setCurrentUser({ ...currentUser, address: e.target.value });
  }
  function handleRole(e) {
    setCurrentUser({ ...currentUser, user_role_id: e.target.value });
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
            name={"firstName"}
            type={"text"}
            label={"First name"}
            variant={"outlined"}
            fullWidth={true}
            defaultValue={currentUser.first_name}
          />
          <TextField
            name={"lastName"}
            type={"text"}
            label={"Last name"}
            variant={"outlined"}
            fullWidth={true}
            defaultValue={currentUser.last_name}
            onChange={handleLastname}
          />
          <TextField
            name={"birthDate"}
            type={"text"}
            label={"Birth Date"}
            variant={"outlined"}
            fullWidth={true}
            defaultValue={currentUser.birth_date}
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
            name={"address"}
            type={"text"}
            label={"Address"}
            variant={"outlined"}
            fullWidth={true}
            defaultValue={currentUser.address}
            onChange={handleAddress}
          />
          <TextField
            name={"phonenNmber"}
            type={"text"}
            label={"Phone number"}
            variant={"outlined"}
            fullWidth={true}
            defaultValue={currentUser.phone_number}
            onChange={handlePhoneNumber}
          />
          <TextField
            name={"roleId"}
            type={"text"}
            label={"Role Id"}
            variant={"outlined"}
            fullWidth={true}
            defaultValue={currentUser.user_role_id}
            onChange={handleRole}
          />
          <TextField
            name={"password"}
            type={"password"}
            label={"Password"}
            variant={"outlined"}
            fullWidth={true}
          />
        </FormControl>
        <Link to={"/user/list"}>
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
