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
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function EditUsersForm({ users, setUsers }) {
  const URL = "http://localhost:8080/users";

  const navigate = useNavigate();
  const userData = useLocation();

  const [currentUser, setCurrentUser] = useState(userData.state.user[0]);

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

  async function handleEdit(e) {
    e.preventDefault();

    const putUserData = {
      id: currentUser.id,
      firstname: currentUser.firstname,
      lastname: currentUser.lastname,
      email: currentUser.email,
      age: currentUser.age,
      phonenumber: currentUser.phoneNumber,
      role: currentUser.role,
    };

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(putUserData),
    };

    const FETCHED_DATA = await fetch(URL, options);
    const FETCHED_JSON = await FETCHED_DATA.json();
    setUsers(FETCHED_JSON.data);

    navigate("/userlist");
  }
  return (
    <Container maxWidth="lg" sx={{ margin: "0 auto", paddingBottom: 5 }}>
      <Typography variant="h3" sx={{ marginBottom: 2 }}>
        ADD USER
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
            onChange={handleFirstname}
          />
          <TextField
            name={"lastname"}
            type={"text"}
            label={"Last name"}
            variant={"outlined"}
            fullWidth={true}
            onChange={handleLastname}
          />
          <TextField
            name={"email"}
            type={"email"}
            label={"Email"}
            variant={"outlined"}
            fullWidth={true}
            onChange={handleEmail}
          />
          <TextField
            name={"age"}
            type={"number"}
            label={"Age"}
            variant={"outlined"}
            fullWidth={true}
            onChange={handleAge}
          />
          <TextField
            name={"phonenumber"}
            type={"tel"}
            label={"Phone number"}
            variant={"outlined"}
            fullWidth={true}
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
            onChange={handleRole}
          />
          <TextField
            name={"image"}
            type={"file"}
            label={"Upload image"}
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

        <Button
          variant={"outlined"}
          type="submit"
          sx={{ marginTop: 2 }}
          color={"primary"}
        >
          Submit
        </Button>
      </Box>
    </Container>
  );
}
